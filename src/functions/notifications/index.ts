import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function getNotifications(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    const notifications = await prisma.notification.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' }
    });

    return createResponse(200, notifications);
  } catch (error) {
    context.error('Error obteniendo notificaciones:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('notifications', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/notifications',
  handler: getNotifications
});
