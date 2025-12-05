"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function updateCredit(req, context) {
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
        const body = await req.json();
        const { loanAmount, installments, status, creditType } = body;
        // Obtener crédito actual
        const currentCredit = await prisma_1.prisma.credit.findUnique({
            where: { id: creditId },
            include: { user: true }
        });
        if (!currentCredit) {
            return (0, utils_1.createResponse)(404, { error: 'Crédito no encontrado' });
        }
        // Solo el dueño o admin puede modificar
        if (currentCredit.userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para modificar este crédito' });
        }
        const updateData = {};
        let loanAmt = currentCredit.loanAmount;
        let installs = currentCredit.installments;
        if (loanAmount !== undefined) {
            loanAmt = parseFloat(loanAmount);
            updateData.loanAmount = loanAmt;
        }
        if (installments !== undefined) {
            installs = parseInt(installments);
            updateData.installments = installs;
            updateData.installmentAmount = loanAmt / installs;
            const startDate = currentCredit.startDate;
            const endDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + installs);
            updateData.endDate = endDate;
        }
        if (status !== undefined)
            updateData.status = status;
        const updatedCredit = await prisma_1.prisma.credit.update({
            where: { id: creditId },
            data: updateData,
            include: {
                user: {
                    select: { id: true, firstName: true, lastName: true, email: true }
                },
                interestRate: true,
                payments: {
                    orderBy: { installmentNumber: 'asc' }
                }
            }
        });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(user.id, 'update', 'credits', creditId, currentCredit, updatedCredit, req);
        return (0, utils_1.createResponse)(200, updatedCredit);
    }
    catch (error) {
        context.error('Error actualizando crédito:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('credits-update', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    route: 'api/credits/{id}',
    handler: updateCredit
});
//# sourceMappingURL=index.js.map