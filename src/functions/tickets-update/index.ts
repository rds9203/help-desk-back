import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize, createAuditLog } from '../../../lib/middleware';

async function updateTicket(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const isAuthorized = authorize(['tickets.update'])(userPermissions);

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const ticketId = parseInt(req.params?.id || '');

    if (!ticketId || isNaN(ticketId)) {
      return createResponse(400, { error: 'ID de ticket requerido' });
    }

    const body = await req.json() as any;
    const { status, priority, assignedTo } = body;

    const oldTicket = await prisma.ticket.findUnique({
      where: { id: ticketId }
    });

    if (!oldTicket) {
      return createResponse(404, { error: 'Ticket no encontrado' });
    }

    const updateData: any = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (assignedTo) updateData.assignedTo = assignedTo;
    if (status === 'resolved') updateData.resolvedAt = new Date();

    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: updateData,
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        assignedUser: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Crear log de auditoría
    await createAuditLog(user.id, 'update', 'tickets', ticketId, oldTicket, updatedTicket, req);

    return createResponse(200, updatedTicket);
  } catch (error) {
    context.error('Error actualizando ticket:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('tickets-update', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/tickets/{id}',
  handler: updateTicket
});
