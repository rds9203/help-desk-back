"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function getCredits(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    try {
        const authResult = await (0, middleware_1.authenticateToken)(req);
        if ('response' in authResult) {
            return authResult.response;
        }
        const { user: currentUser } = authResult;
        let whereClause = {};
        // Si no es admin o superadmin, solo ver sus propios créditos
        if (!['admin', 'superadmin'].includes(currentUser.role)) {
            whereClause = { userId: currentUser.id };
        }
        const credits = await prisma_1.prisma.credit.findMany({
            where: whereClause,
            include: {
                user: {
                    select: { id: true, firstName: true, lastName: true, email: true }
                },
                interestRate: true,
                payments: {
                    orderBy: { installmentNumber: 'asc' }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        return (0, utils_1.createResponse)(200, credits);
    }
    catch (error) {
        context.error('Error obteniendo créditos:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
async function createCredit(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    try {
        const authResult = await (0, middleware_1.authenticateToken)(req);
        if ('response' in authResult) {
            return authResult.response;
        }
        const { user: currentUser } = authResult;
        const body = await req.json();
        const { loanAmount, installments, creditType, interestRateId, userId } = body;
        if (!loanAmount || !installments) {
            return (0, utils_1.createResponse)(400, { error: 'Monto y número de cuotas son requeridos' });
        }
        const numericAmount = parseFloat(loanAmount);
        const numericInstallments = parseInt(installments);
        if (Number.isNaN(numericAmount) || numericAmount <= 0) {
            return (0, utils_1.createResponse)(400, { error: 'El monto del crédito debe ser un número mayor a 0' });
        }
        if (Number.isNaN(numericInstallments) || numericInstallments <= 0 || numericInstallments > 36) {
            return (0, utils_1.createResponse)(400, { error: 'La cantidad de cuotas debe ser un número entre 1 y 36 meses' });
        }
        const targetUserId = userId ? parseInt(userId) : currentUser.id;
        if (Number.isNaN(targetUserId)) {
            return (0, utils_1.createResponse)(400, { error: 'El usuario indicado no es válido' });
        }
        const isCreatingForAnotherUser = targetUserId !== currentUser.id;
        if (isCreatingForAnotherUser && !['admin', 'superadmin'].includes(currentUser.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para crear créditos a otros usuarios' });
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: targetUserId },
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
        if (!user) {
            return (0, utils_1.createResponse)(404, { error: 'Usuario no encontrado' });
        }
        const existingExposure = user.credits.reduce((total, credit) => {
            const outstanding = credit.outstandingAmount ?? credit.loanAmount ?? 0;
            return total + outstanding;
        }, 0);
        const maxCredit = (0, middleware_1.calculateMaxCreditForUser)(user);
        const availableAmount = Math.max(0, maxCredit - existingExposure);
        // Consolidación de deudas:
        const consolidatedLoanAmount = Math.min(maxCredit, existingExposure + numericAmount);
        const disbursedAmount = Math.max(0, consolidatedLoanAmount - existingExposure);
        const finalLoanAmount = consolidatedLoanAmount;
        if (finalLoanAmount <= 0) {
            return (0, utils_1.createResponse)(400, {
                error: 'El usuario no tiene cupo disponible para solicitar nuevos créditos',
                maxCredit,
                usedAmount: existingExposure,
                availableAmount: 0
            });
        }
        // Calcular fechas
        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + numericInstallments);
        // Calcular monto de cuota y monto pendiente
        const installmentAmount = finalLoanAmount / numericInstallments;
        const outstandingAmount = finalLoanAmount;
        // Obtener tasa de interés por defecto si no se especifica
        let finalInterestRateId = interestRateId;
        if (!finalInterestRateId) {
            const defaultRate = await prisma_1.prisma.interestRate.findFirst({
                where: { isActive: true }
            });
            finalInterestRateId = defaultRate ? defaultRate.id : 1;
        }
        // Crear el nuevo crédito consolidado
        const credit = await prisma_1.prisma.credit.create({
            data: {
                userId: targetUserId,
                loanAmount: finalLoanAmount,
                installments: numericInstallments,
                installmentAmount: installmentAmount,
                outstandingAmount: outstandingAmount,
                startDate,
                endDate,
                interestRateId: finalInterestRateId,
                status: 'PENDIENTE_APROBACION'
            },
            include: {
                user: {
                    select: { id: true, firstName: true, lastName: true, email: true }
                },
                interestRate: true
            }
        });
        await prisma_1.prisma.user.update({
            where: { id: targetUserId },
            data: {
                hasDebt: true,
                debtAmount: existingExposure + outstandingAmount
            }
        });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(currentUser.id, 'create', 'credits', credit.id, null, credit, req);
        return (0, utils_1.createResponse)(201, {
            ...credit,
            disbursedAmount: Number(disbursedAmount.toFixed(2)),
            consolidatedPreviousDebt: existingExposure,
            maxCredit,
            availableAmountBefore: availableAmount
        });
    }
    catch (error) {
        context.error('Error creando crédito:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('credits', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'api/credits',
    handler: async (req, context) => {
        if (req.method === 'GET') {
            return await getCredits(req, context);
        }
        else if (req.method === 'POST') {
            return await createCredit(req, context);
        }
        else {
            return (0, utils_1.createResponse)(405, { error: 'Método no permitido' });
        }
    }
});
//# sourceMappingURL=index.js.map