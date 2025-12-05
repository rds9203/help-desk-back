import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, authorize } from '../../../lib/middleware';

async function getAuditLogs(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const isAuthorized = authorize(['*'])(userPermissions); // Solo superadmin

    if (!isAuthorized) {
      return createResponse(403, { error: 'Permisos insuficientes' });
    }

    const page = parseInt(req.query.get('page') || '1');
    const limit = parseInt(req.query.get('limit') || '50');
    const entityType = req.query.get('entityType') || req.query.get('tableName') || undefined;
    const action = req.query.get('action') || undefined;

    const whereClause: any = {};
    if (entityType) whereClause.entityType = entityType;
    if (action) whereClause.action = action;

    const logs = await prisma.auditLog.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit
    });

    const total = await prisma.auditLog.count({ where: whereClause });

    return createResponse(200, {
      logs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    context.error('Error obteniendo logs de auditoría:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('audit-logs', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/audit-logs',
  handler: getAuditLogs
});


