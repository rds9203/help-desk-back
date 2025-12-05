import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize, createAuditLog } from '../../../lib/middleware';

async function getTickets(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    // Si no es admin, technology o superadmin, solo ver sus propios tickets
    if (!['admin', 'technology', 'superadmin'].includes(currentUser.role)) {
      whereClause = {
        OR: [
          { createdById: currentUser.id },
          { assignedTo: currentUser.id }
        ]
      };
    }

    const tickets = await prisma.ticket.findMany({
      where: whereClause,
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        assignedUser: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        comments: {
          include: {
            user: {
              select: { id: true, firstName: true, lastName: true }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return createResponse(200, tickets);
  } catch (error) {
    context.error('Error obteniendo tickets:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

async function createTicket(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const { title, description, priority, category } = body;

    if (!title || !description) {
      return createResponse(400, { error: 'Título y descripción son requeridos' });
    }

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority: priority || 'medium',
        category: category || 'other',
        createdById: currentUser.id
      },
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Crear log de auditoría
    await createAuditLog(currentUser.id, 'create', 'tickets', ticket.id, null, ticket, req);

    return createResponse(201, ticket);
  } catch (error) {
    context.error('Error creando ticket:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('tickets', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  route: 'api/tickets',
  handler: async (req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
    if (req.method === 'GET') {
      return await getTickets(req, context);
    } else if (req.method === 'POST') {
      return await createTicket(req, context);
    } else {
      return createResponse(405, { error: 'Método no permitido' });
    }
  }
});
