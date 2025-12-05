"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function approveCredit(req, context) {
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
        if (!['admin', 'superadmin'].includes(user.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para aprobar créditos' });
        }
        const creditId = parseInt(req.params?.id || '');
        if (!creditId || isNaN(creditId)) {
            return (0, utils_1.createResponse)(400, { error: 'ID de crédito requerido' });
        }
        const credit = await prisma_1.prisma.credit.findUnique({
            where: { id: creditId },
            include: {
                user: {
                    include: {
                        credits: {
                            where: {
                                status: {
                                    in: ['ACTIVO', 'PENDIENTE_APROBACION']
                                }
                            }
                        }
                    }
                }
            }
        });
        if (!credit) {
            return (0, utils_1.createResponse)(404, { error: 'Crédito no encontrado' });
        }
        if (!credit.user) {
            return (0, utils_1.createResponse)(400, { error: 'El crédito no tiene usuario asociado' });
        }
        const otherCredits = credit.user.credits.filter((item) => item.id !== creditId);
        const existingExposure = otherCredits.reduce((total, item) => {
            const outstanding = item.outstandingAmount ?? item.loanAmount ?? 0;
            return total + outstanding;
        }, 0);
        const creditExposure = credit.outstandingAmount ?? credit.loanAmount ?? 0;
        const updatedCredit = await prisma_1.prisma.$transaction(async (tx) => {
            if (otherCredits.length > 0) {
                await Promise.all(otherCredits.map(async (c) => {
                    await tx.credit.update({
                        where: { id: c.id },
                        data: {
                            status: 'PAGADO',
                            outstandingAmount: 0,
                            paidInstallments: c.installments
                        }
                    });
                    await tx.paymentHistory.updateMany({
                        where: { creditId: c.id, status: { not: 'PAGADO' } },
                        data: { status: 'PAGADO' }
                    });
                }));
            }
            const activated = await tx.credit.update({
                where: { id: creditId },
                data: { status: 'ACTIVO' },
                include: {
                    user: {
                        select: { id: true, firstName: true, lastName: true, email: true }
                    },
                    interestRate: true
                }
            });
            await tx.user.update({
                where: { id: credit.userId },
                data: {
                    hasDebt: creditExposure > 0,
                    debtAmount: creditExposure
                }
            });
            return activated;
        });
        await (0, middleware_1.createAuditLog)(user.id, 'approve', 'credits', creditId, credit, updatedCredit, req);
        return (0, utils_1.createResponse)(200, updatedCredit);
    }
    catch (error) {
        context.error('Error aprobando crédito:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('credits-approve', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    route: 'api/credits/{id}/approve',
    handler: approveCredit
});
//# sourceMappingURL=index.js.map