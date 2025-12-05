import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize } from '../../../lib/middleware';

async function getAllVacations(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const isAuthorized = authorize(['vacations.read'])(userPermissions);

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const currentYear = new Date().getFullYear();

    const vacationDays = await prisma.vacationDay.findMany({
      where: { year: currentYear },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true, position: true }
        }
      },
      orderBy: { user: { firstName: 'asc' } }
    });

    return createResponse(200, vacationDays);
  } catch (error) {
    context.error('Error obteniendo vacaciones:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('vacations', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/vacations',
  handler: getAllVacations
});
