import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function getResources(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const authResult = await authenticateToken(req);
    if ('response' in authResult) {
      return authResult.response;
    }

    const resources = await prisma.resource.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });

    return createResponse(200, resources);
  } catch (error) {
    context.error('Error obteniendo recursos:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('resources', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/resources',
  handler: getResources
});
