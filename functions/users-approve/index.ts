import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize, createAuditLog } from '../../../lib/middleware';

async function approveUser(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const authResult = await authenticateToken(req);
    if ('response' in authResult) {
      return authResult.response;
    }

    const { user } = authResult;
    const userPermissions = user.permissions || [];
    const isAuthorized = authorize(['users.update'])(userPermissions);

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const userId = parseInt(req.params?.id || '');

    if (!userId || isNaN(userId)) {
      return createResponse(400, { error: 'ID de usuario requerido' });
    }

    const dbUser = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!dbUser) {
      return createResponse(404, { error: 'Usuario no encontrado' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        pendingApproval: false,
        approvedBy: user.id,
        approvedAt: new Date()
      },
      include: { role: true }
    });

    // Crear log de auditoría
    await createAuditLog(user.id, 'update', 'users', userId, dbUser, updatedUser, req);

    const { password: _, ...userWithoutPassword } = updatedUser;
    return createResponse(200, userWithoutPassword);
  } catch (error) {
    context.error('Error aprobando usuario:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('users-approve', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/users/{id}/approve',
  handler: approveUser
});
