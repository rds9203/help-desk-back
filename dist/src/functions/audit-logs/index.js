"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function getAuditLogs(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    try {
        const authResult = await (0, middleware_1.authenticateToken)(req);
        if ('response' in authResult) {
            return authResult.response;
        }
        const { user } = authResult;
        const userPermissions = user.permissions || [];
        const isAuthorized = (0, middleware_1.authorize)(['*'])(userPermissions); // Solo superadmin
        if (!isAuthorized) {
            return (0, utils_1.createResponse)(403, { error: 'Permisos insuficientes' });
        }
        const page = parseInt(req.query.get('page') || '1');
        const limit = parseInt(req.query.get('limit') || '50');
        const entityType = req.query.get('entityType') || req.query.get('tableName') || undefined;
        const action = req.query.get('action') || undefined;
        const whereClause = {};
        if (entityType)
            whereClause.entityType = entityType;
        if (action)
            whereClause.action = action;
        const logs = await prisma_1.prisma.auditLog.findMany({
            where: whereClause,
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * limit,
            take: limit
        });
        const total = await prisma_1.prisma.auditLog.count({ where: whereClause });
        return (0, utils_1.createResponse)(200, {
            logs,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        });
    }
    catch (error) {
        context.error('Error obteniendo logs de auditoría:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('audit-logs', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'api/audit-logs',
    handler: getAuditLogs
});
//# sourceMappingURL=index.js.map