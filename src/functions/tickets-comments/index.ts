import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function addComment(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const ticketId = parseInt(req.params?.id || '');

    if (!ticketId || isNaN(ticketId)) {
      return createResponse(400, { error: 'ID de ticket requerido' });
    }

    const body = await req.json() as any;
    const { comment } = body;

    if (!comment) {
      return createResponse(400, { error: 'Comentario es requerido' });
    }

    const ticketComment = await prisma.ticketComment.create({
      data: {
        ticketId,
        userId: user.id,
        comment
      },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true }
        }
      }
    });

    return createResponse(201, ticketComment);
  } catch (error) {
    context.error('Error agregando comentario:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('tickets-comments', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'api/tickets/{id}/comments',
  handler: addComment
});
