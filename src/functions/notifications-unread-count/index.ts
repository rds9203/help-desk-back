import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function getUnreadCount(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    const count = await prisma.notification.count({
      where: {
        userId: user.id,
        isRead: false
      }
    });

    return createResponse(200, { count });
  } catch (error) {
    context.error('Error obteniendo contador de notificaciones:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('notifications-unread-count', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/notifications/unread-count',
  handler: getUnreadCount
});
