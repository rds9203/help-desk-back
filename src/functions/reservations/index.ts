import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog } from '../../../lib/middleware';

async function getReservations(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    let whereClause: any = {};

    // Si no es admin o superadmin, solo ver sus propias reservas
    if (!['admin', 'superadmin'].includes(currentUser.role)) {
      whereClause = { userId: currentUser.id };
    }

    const reservations = await prisma.reservation.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        resource: true
      },
      orderBy: { startDate: 'desc' }
    });

    return createResponse(200, reservations);
  } catch (error) {
    context.error('Error obteniendo reservas:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

async function createReservation(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const { resourceId, startDate, endDate, title, description } = body;

    if (!resourceId || !startDate || !endDate || !title) {
      return createResponse(400, { error: 'Campos requeridos: resourceId, startDate, endDate, title' });
    }

    // Verificar disponibilidad
    const conflictingReservation = await prisma.reservation.findFirst({
      where: {
        resourceId: parseInt(resourceId),
        status: 'confirmed',
        OR: [
          {
            AND: [
              { startDate: { lte: new Date(startDate) } },
              { endDate: { gte: new Date(startDate) } }
            ]
          },
          {
            AND: [
              { startDate: { lte: new Date(endDate) } },
              { endDate: { gte: new Date(endDate) } }
            ]
          }
        ]
      }
    });

    if (conflictingReservation) {
      return createResponse(400, { error: 'El recurso no está disponible en ese horario' });
    }

    const reservation = await prisma.reservation.create({
      data: {
        userId: currentUser.id,
        resourceId: parseInt(resourceId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        title,
        description
      },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        resource: true
      }
    });

    // Crear log de auditoría
    await createAuditLog(currentUser.id, 'create', 'reservations', reservation.id, null, reservation, req);

    return createResponse(201, reservation);
  } catch (error) {
    context.error('Error creando reserva:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('reservations', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'api/reservations',
  handler: async (req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
    if (req.method === 'GET') {
      return await getReservations(req, context);
    } else if (req.method === 'POST') {
      return await createReservation(req, context);
    } else {
      return createResponse(405, { error: 'Método no permitido' });
    }
  }
});
