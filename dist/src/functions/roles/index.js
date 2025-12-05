"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function getRoles(req, context) {
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
        const isAuthorized = (0, middleware_1.authorize)(['users.read'])(userPermissions);
        if (!isAuthorized) {
            return (0, utils_1.createResponse)(403, { error: 'Permisos insuficientes' });
        }
        const roles = await prisma_1.prisma.role.findMany({
            orderBy: { name: 'asc' }
        });
        return (0, utils_1.createResponse)(200, roles);
    }
    catch (error) {
        context.error('Error obteniendo roles:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('roles', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'api/roles',
    handler: getRoles
});
//# sourceMappingURL=index.js.map