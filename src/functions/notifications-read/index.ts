import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function markAsRead(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const notificationId = parseInt(req.params?.id || '');

    if (!notificationId || isNaN(notificationId)) {
      return createResponse(400, { error: 'ID de notificación requerido' });
    }

    const notification = await prisma.notification.update({
      where: {
        id: notificationId,
        userId: user.id
      },
      data: { isRead: true }
    });

    return createResponse(200, notification);
  } catch (error) {
    context.error('Error marcando notificación:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('notifications-read', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/notifications/{id}/read',
  handler: markAsRead
});
