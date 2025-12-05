import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import bcrypt from 'bcryptjs';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog } from '../../../lib/middleware';

async function changePassword(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const authResult = await authenticateToken(req);
    if ('response' in authResult) {
      return authResult.response;
    }

    const { user: currentUser } = authResult;
    const body = await req.json() as any;
    const { email, currentPassword, newPassword } = body;

    if (!email || !currentPassword || !newPassword) {
      return createResponse(400, { error: 'Email, contraseña actual y nueva contraseña son requeridos' });
    }

    if (newPassword.length < 6) {
      return createResponse(400, { error: 'La nueva contraseña debe tener al menos 6 caracteres' });
    }

    if (newPassword === currentPassword) {
      return createResponse(400, { error: 'La nueva contraseña debe ser diferente a la actual' });
    }

    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return createResponse(404, { error: 'Usuario no encontrado' });
    }

    // Verificar que el usuario autenticado pueda cambiar la contraseña de este usuario
    if (user.id !== currentUser.id && !['admin', 'superadmin'].includes(currentUser.role)) {
      return createResponse(403, { error: 'No tienes permisos para cambiar la contraseña de otro usuario' });
    }

    // Validar contraseña actual
    if (!user.password) {
      return createResponse(400, { error: 'El usuario no tiene una contraseña establecida' });
    }

    const isValidCurrentPassword = await bcrypt.compare(currentPassword, user.password);

    if (!isValidCurrentPassword) {
      return createResponse(401, { error: 'Contraseña actual incorrecta' });
    }

    // Hashear la nueva contraseña
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Actualizar contraseña en la base de datos
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedNewPassword,
        mustChangePassword: false, // Ya no debe cambiar contraseña
        pendingActivation: false, // Ya no está pendiente de activación
        updatedAt: new Date()
      }
    });

    // Crear log de auditoría
    await createAuditLog(currentUser.id, 'update', 'users', user.id, { mustChangePassword: user.mustChangePassword }, { mustChangePassword: false }, req);

    context.log(`Contraseña cambiada exitosamente para usuario: ${user.email}`);

    return createResponse(200, {
      message: 'Contraseña cambiada exitosamente',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        mustChangePassword: updatedUser.mustChangePassword,
        pendingActivation: updatedUser.pendingActivation
      }
    });
  } catch (error) {
    context.error('Error cambiando contraseña:', error);
    return createResponse(500, { error: 'Error interno del servidor al cambiar contraseña' });
  }
}

app.http('change-password', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/change-password',
  handler: changePassword
});
