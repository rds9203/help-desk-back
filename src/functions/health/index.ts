import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { createResponse, handleCors } from '../../../lib/utils';

async function healthCheck(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  return createResponse(200, { 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
}

app.http('health', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/health',
  handler: healthCheck
});


