import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize } from '../../../lib/middleware';

async function getRoles(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    const roles = await prisma.role.findMany({
      orderBy: { name: 'asc' }
    });

    return createResponse(200, roles);
  } catch (error) {
    context.error('Error obteniendo roles:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('roles', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/roles',
  handler: getRoles
});
