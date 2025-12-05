"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function approveUser(req, context) {
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
        const isAuthorized = (0, middleware_1.authorize)(['users.update'])(userPermissions);
        if (!isAuthorized) {
            return (0, utils_1.createResponse)(403, { error: 'Permisos insuficientes' });
        }
        const userId = parseInt(req.params?.id || '');
        if (!userId || isNaN(userId)) {
            return (0, utils_1.createResponse)(400, { error: 'ID de usuario requerido' });
        }
        const dbUser = await prisma_1.prisma.user.findUnique({
            where: { id: userId }
        });
        if (!dbUser) {
            return (0, utils_1.createResponse)(404, { error: 'Usuario no encontrado' });
        }
        const updatedUser = await prisma_1.prisma.user.update({
            where: { id: userId },
            data: {
                pendingApproval: false,
                approvedBy: user.id,
                approvedAt: new Date()
            },
            include: { role: true }
        });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(user.id, 'update', 'users', userId, dbUser, updatedUser, req);
        const { password: _, ...userWithoutPassword } = updatedUser;
        return (0, utils_1.createResponse)(200, userWithoutPassword);
    }
    catch (error) {
        context.error('Error aprobando usuario:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('users-approve', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    route: 'api/users/{id}/approve',
    handler: approveUser
});
//# sourceMappingURL=index.js.map