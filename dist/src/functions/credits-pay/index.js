"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function payCredit(req, context) {
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
        const body = await req.json();
        const { installmentNumbers } = body;
        if (!creditId || isNaN(creditId)) {
            return (0, utils_1.createResponse)(400, { error: 'ID de crédito requerido' });
        }
        if (!Array.isArray(installmentNumbers) || installmentNumbers.length === 0) {
            return (0, utils_1.createResponse)(400, { error: 'Debes indicar las cuotas a pagar' });
        }
        const uniqueInstallments = Array.from(new Set(installmentNumbers.map(Number))).sort((a, b) => a - b);
        const credit = await prisma_1.prisma.credit.findUnique({
            where: { id: creditId },
            include: {
                user: true,
                interestRate: true,
                payments: {
                    orderBy: { installmentNumber: 'asc' }
                }
            }
        });
        if (!credit) {
            return (0, utils_1.createResponse)(404, { error: 'Crédito no encontrado' });
        }
        if (credit.status !== 'ACTIVO') {
            return (0, utils_1.createResponse)(400, { error: 'Solo se pueden registrar pagos sobre créditos activos' });
        }
        const isAdmin = ['admin', 'superadmin'].includes(user.role);
        if (credit.userId !== user.id && !isAdmin) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para registrar pagos en este crédito' });
        }
        const nextInstallment = (credit.paidInstallments || 0) + 1;
        uniqueInstallments.forEach((installment, index) => {
            if (installment !== nextInstallment + index) {
                throw new Error(`Las cuotas a pagar deben ser consecutivas. Próxima cuota esperada: ${nextInstallment + index}`);
            }
        });
        const monthlyRate = 0.013; // 1.3% mensual
        let outstanding = Number(credit.outstandingAmount);
        const paymentsToCreate = uniqueInstallments.map((installmentNumber) => {
            const interestAmount = +(outstanding * monthlyRate).toFixed(2);
            let principalAmount = credit.installmentAmount - interestAmount;
            if (principalAmount < 0)
                principalAmount = 0;
            if (principalAmount > outstanding)
                principalAmount = outstanding;
            const amount = +(principalAmount + interestAmount).toFixed(2);
            outstanding = Math.max(0, +(outstanding - principalAmount).toFixed(2));
            return {
                installmentNumber,
                amount,
                interestAmount,
                principalAmount,
                remainingBalance: outstanding,
                paymentDate: new Date(),
                status: 'PAGADO'
            };
        });
        const creditBeforeUpdate = credit;
        const updatedCredit = await prisma_1.prisma.$transaction(async (tx) => {
            for (const payment of paymentsToCreate) {
                await tx.paymentHistory.create({
                    data: {
                        creditId,
                        userId: credit.userId,
                        installmentNumber: payment.installmentNumber,
                        amount: payment.amount,
                        interestAmount: payment.interestAmount,
                        principalAmount: payment.principalAmount,
                        remainingBalance: payment.remainingBalance,
                        paymentDate: payment.paymentDate,
                        status: payment.status
                    }
                });
            }
            const remainingBalance = paymentsToCreate.length
                ? paymentsToCreate[paymentsToCreate.length - 1].remainingBalance
                : credit.outstandingAmount;
            const newPaidInstallments = (credit.paidInstallments || 0) + paymentsToCreate.length;
            const creditUpdate = await tx.credit.update({
                where: { id: creditId },
                data: {
                    outstandingAmount: remainingBalance,
                    paidInstallments: newPaidInstallments,
                    status: remainingBalance <= 0 ? 'PAGADO' : 'ACTIVO'
                },
                include: {
                    user: true,
                    interestRate: true,
                    payments: {
                        orderBy: { installmentNumber: 'asc' }
                    }
                }
            });
            await (0, middleware_1.recalcUserDebt)(credit.userId, tx);
            return creditUpdate;
        });
        await (0, middleware_1.createAuditLog)(user.id, 'pay', 'credits', creditId, creditBeforeUpdate, updatedCredit, req);
        return (0, utils_1.createResponse)(200, updatedCredit);
    }
    catch (error) {
        context.error('Error registrando pago de crédito:', error);
        const message = error.message || 'Error interno del servidor';
        return (0, utils_1.createResponse)(400, { error: message });
    }
}
functions_1.app.http('credits-pay', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'api/credits/{id}/pay',
    handler: payCredit
});
//# sourceMappingURL=index.js.map