"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function handleGetUser(req, context) {
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
        const dbUser = await prisma_1.prisma.user.findUnique({
            where: { id: user.id },
            include: { role: true }
        });
        if (!dbUser || !dbUser.isActive) {
            return (0, utils_1.createResponse)(401, { error: 'Usuario no encontrado o inactivo' });
        }
        const permissions = (0, middleware_1.parsePermissions)(dbUser.role.permissions);
        return (0, utils_1.createResponse)(200, {
            user: {
                id: dbUser.id,
                firstName: dbUser.firstName,
                lastName: dbUser.lastName,
                email: dbUser.email,
                documentNumber: dbUser.documentNumber,
                birthDate: dbUser.birthDate,
                position: dbUser.position,
                role: dbUser.role.name,
                permissions,
                salary: dbUser.salary,
                hasDebt: dbUser.hasDebt,
                debtAmount: dbUser.debtAmount,
                paidAmount: dbUser.paidAmount,
                installmentAmount: dbUser.installmentAmount,
                interestRate: dbUser.interestRate,
                startDate: dbUser.startDate,
                contractType: dbUser.contractType,
                mustChangePassword: dbUser.mustChangePassword,
                pendingActivation: dbUser.pendingActivation,
                isActive: dbUser.isActive
            }
        });
    }
    catch (error) {
        context.error('Error obteniendo usuario autenticado:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('auth-me', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'api/auth/me',
    handler: handleGetUser
});
//# sourceMappingURL=index.js.map