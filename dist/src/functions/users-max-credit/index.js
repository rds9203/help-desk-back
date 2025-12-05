"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function getMaxCredit(req, context) {
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
        const userId = parseInt(req.params?.id || '');
        if (!userId || isNaN(userId)) {
            return (0, utils_1.createResponse)(400, { error: 'ID de usuario requerido' });
        }
        // Solo puede ver su propio crédito máximo, a menos que sea admin
        if (userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para ver el crédito máximo de otro usuario' });
        }
        const dbUser = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            include: {
                credits: {
                    where: {
                        status: {
                            in: ['ACTIVO', 'PENDIENTE_APROBACION']
                        }
                    }
                }
            }
        });
        if (!dbUser) {
            return (0, utils_1.createResponse)(404, { error: 'Usuario no encontrado' });
        }
        const maxCredit = (0, middleware_1.calculateMaxCreditForUser)(dbUser);
        const existingExposure = dbUser.credits.reduce((total, credit) => {
            const outstanding = credit.outstandingAmount ?? credit.loanAmount ?? 0;
            return total + outstanding;
        }, 0);
        const availableAmount = Math.max(0, maxCredit - existingExposure);
        const monthsWorked = dbUser.startDate ? (0, middleware_1.calculateMonthsBetween)(dbUser.startDate, new Date()) : 0;
        return (0, utils_1.createResponse)(200, {
            userId: dbUser.id,
            userName: `${dbUser.firstName} ${dbUser.lastName}`,
            salary: dbUser.salary,
            monthsWorked,
            maxCredit,
            existingExposure,
            availableAmount,
            hasDebt: dbUser.hasDebt
        });
    }
    catch (error) {
        context.error('Error obteniendo crédito máximo:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('users-max-credit', {
    methods: ['GET'],
    authLevel: 'anonymous',
    route: 'api/users/{id}/max-credit',
    handler: getMaxCredit
});
//# sourceMappingURL=index.js.map