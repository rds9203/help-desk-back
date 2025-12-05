import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import bcrypt from 'bcryptjs';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize, parsePermissions, createAuditLog } from '../../../lib/middleware';

async function getUsers(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const isAuthorized = authorize(['users.read'])(userPermissions);

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const users = await prisma.user.findMany({
      include: { role: true },
      orderBy: { createdAt: 'desc' }
    });

    const usersWithoutPassword = users.map(user => ({
      ...user,
      password: undefined
    }));

    return createResponse(200, usersWithoutPassword);
  } catch (error) {
    context.error('Error obteniendo usuarios:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

async function createUser(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const userPermissions = currentUser.permissions || [];
    const isAuthorized = authorize(['users.create'])(userPermissions);

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const body = await req.json() as any;
    const { firstName, lastName, email, password, position, startDate, salary, roleId } = body;

    if (!firstName || !lastName || !email || !password) {
      return createResponse(400, { error: 'Campos requeridos: firstName, lastName, email, password' });
    }

    // Validar dominio de email
    if (!email.endsWith('@sectorial.co')) {
      return createResponse(400, { error: 'Solo se permiten emails del dominio @sectorial.co' });
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return createResponse(400, { error: 'El email ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const pendingApproval = currentUser.role !== 'superadmin'; // Solo superadmin puede crear usuarios sin aprobación

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        position,
        startDate: startDate ? new Date(startDate) : null,
        salary: salary ? parseFloat(salary) : null,
        roleId: parseInt(roleId),
        pendingApproval,
        approvedBy: !pendingApproval ? currentUser.id : null,
        approvedAt: !pendingApproval ? new Date() : null
      },
      include: { role: true }
    });

    // Crear log de auditoría
    await createAuditLog(currentUser.id, 'create', 'users', user.id, null, user, req);

    const { password: _, ...userWithoutPassword } = user;
    return createResponse(201, userWithoutPassword);
  } catch (error) {
    context.error('Error creando usuario:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('users', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'api/users',
  handler: async (req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
    if (req.method === 'GET') {
      return await getUsers(req, context);
    } else if (req.method === 'POST') {
      return await createUser(req, context);
    } else {
      return createResponse(405, { error: 'Método no permitido' });
    }
  }
});
