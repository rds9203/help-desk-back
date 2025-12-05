"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function rejectCredit(req, context) {
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
        const creditId = parseInt(req.params?.id || '');
        if (!creditId || isNaN(creditId)) {
            return (0, utils_1.createResponse)(400, { error: 'ID de crédito requerido' });
        }
        const credit = await prisma_1.prisma.credit.findUnique({
            where: { id: creditId },
            include: {
                user: true
            }
        });
        if (!credit) {
            return (0, utils_1.createResponse)(404, { error: 'Crédito no encontrado' });
        }
        // Solo el dueño o admin puede rechazar/cancelar
        if (credit.userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para rechazar este crédito' });
        }
        const updatedCredit = await prisma_1.prisma.credit.update({
            where: { id: creditId },
            data: { status: 'RECHAZADO' },
            include: {
                user: {
                    select: { id: true, firstName: true, lastName: true, email: true }
                },
                interestRate: true
            }
        });
        if (credit.user) {
            await (0, middleware_1.recalcUserDebt)(credit.userId);
        }
        await (0, middleware_1.createAuditLog)(user.id, 'reject', 'credits', creditId, credit, updatedCredit, req);
        return (0, utils_1.createResponse)(200, updatedCredit);
    }
    catch (error) {
        context.error('Error rechazando crédito:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('credits-reject', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    route: 'api/credits/{id}/reject',
    handler: rejectCredit
});
//# sourceMappingURL=index.js.map