import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { parsePermissions, createAuditLog } from '../../../lib/middleware';

const JWT_SECRET = process.env.JWT_SECRET || 'helpdesk_secret_key_2024';

async function handleLogin(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const body = await req.json() as any;
    const { email, password } = body;

    if (!email || !password) {
      return createResponse(400, { error: 'Email y contraseña son requeridos' });
    }

    context.log(`🔍 Intentando login para: ${email}`);

    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    });

    if (!user) {
      context.log(`❌ Usuario no encontrado: ${email}`);
      return createResponse(401, { error: 'Credenciales inválidas' });
    }

    context.log(`👤 Usuario encontrado: ${user.email}, isActive: ${user.isActive}, pendingApproval: ${user.pendingApproval}, pendingActivation: ${user.pendingActivation}`);

    if (!user.isActive) {
      context.log(`❌ Usuario inactivo: ${email}`);
      return createResponse(401, { error: 'Tu cuenta está inactiva. Contacta al administrador.' });
    }

    if (!user.password) {
      context.log(`❌ Usuario sin contraseña: ${email}`);
      return createResponse(401, { error: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      context.log(`❌ Contraseña inválida para: ${email}`);
      return createResponse(401, { error: 'Credenciales inválidas' });
    }

    if (user.pendingApproval) {
      context.log(`❌ Usuario pendiente de aprobación: ${email}`);
      return createResponse(403, { error: 'Tu cuenta está pendiente de aprobación' });
    }

    const permissions = parsePermissions(user.role.permissions);

    // Crear token JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role.name,
        permissions
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Crear log de auditoría
    await createAuditLog(user.id, 'login', null, null, null, null, req);

    return createResponse(200, {
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        position: user.position,
        role: user.role.name,
        permissions,
        mustChangePassword: user.mustChangePassword,
        pendingActivation: user.pendingActivation,
        isActive: user.isActive
      }
    });
  } catch (error) {
    context.error('Error en login:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('auth-login', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'api/auth/login',
  handler: handleLogin
});
