import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog } from '../../../lib/middleware';

async function createVacationRequest(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const body = await req.json() as any;
    const { startDate, endDate, reason } = body;

    if (!startDate || !endDate) {
      return createResponse(400, { error: 'Fecha de inicio y fin son requeridas' });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    // Verificar días disponibles
    const currentYear = new Date().getFullYear();
    const vacationDays = await prisma.vacationDay.findFirst({
      where: {
        userId: user.id,
        year: currentYear
      }
    });

    if (!vacationDays) {
      return createResponse(400, { error: 'No se encontraron días de vacaciones para este año' });
    }

    if (vacationDays.usedDays + days > vacationDays.totalDays) {
      return createResponse(400, {
        error: `No tienes suficientes días de vacaciones. Disponibles: ${vacationDays.totalDays - vacationDays.usedDays}`
      });
    }

    const vacationRequest = await prisma.vacationRequest.create({
      data: {
        userId: user.id,
        vacationDayId: vacationDays.id,
        startDate: start,
        endDate: end,
        days,
        reason
      }
    });

    // Crear log de auditoría
    await createAuditLog(user.id, 'create', 'vacation_requests', vacationRequest.id, null, vacationRequest, req);

    return createResponse(201, vacationRequest);
  } catch (error) {
    context.error('Error creando solicitud de vacaciones:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('vacations-request', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'api/vacations/request',
  handler: createVacationRequest
});
