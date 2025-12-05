import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function getVacationDays(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const currentYear = new Date().getFullYear();

    const vacationDays = await prisma.vacationDay.findFirst({
      where: {
        userId: user.id,
        year: currentYear
      }
    });

    if (!vacationDays) {
      // Crear registro si no existe
      const newVacationDays = await prisma.vacationDay.create({
        data: {
          userId: user.id,
          year: currentYear,
          totalDays: 22,
          usedDays: 0
        }
      });
      return createResponse(200, newVacationDays);
    } else {
      return createResponse(200, vacationDays);
    }
  } catch (error) {
    context.error('Error obteniendo días de vacaciones:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('vacations-days', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/vacations/days',
  handler: getVacationDays
});
