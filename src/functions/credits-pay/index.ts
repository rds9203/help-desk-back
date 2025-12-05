import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog, recalcUserDebt } from '../../../lib/middleware';

async function payCredit(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const authResult = await authenticateToken(req);
    if ('response' in authResult) {
      return authResult.response;
    }

    const { user } = authResult;
    const creditId = parseInt(req.params?.id || '');
    const body = await req.json() as any;
    const { installmentNumbers } = body;

    if (!creditId || isNaN(creditId)) {
      return createResponse(400, { error: 'ID de crédito requerido' });
    }

    if (!Array.isArray(installmentNumbers) || installmentNumbers.length === 0) {
      return createResponse(400, { error: 'Debes indicar las cuotas a pagar' });
    }

    const uniqueInstallments = Array.from(new Set(installmentNumbers.map(Number))).sort((a, b) => a - b);

    const credit = await prisma.credit.findUnique({
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
      return createResponse(404, { error: 'Crédito no encontrado' });
    }

    if (credit.status !== 'ACTIVO') {
      return createResponse(400, { error: 'Solo se pueden registrar pagos sobre créditos activos' });
    }

    const isAdmin = ['admin', 'superadmin'].includes(user.role);
    if (credit.userId !== user.id && !isAdmin) {
      return createResponse(403, { error: 'No tienes permisos para registrar pagos en este crédito' });
    }

    const nextInstallment = (credit.paidInstallments || 0) + 1;
    uniqueInstallments.forEach((installment, index) => {
      if (installment !== nextInstallment + index) {
        throw new Error(`Las cuotas a pagar deben ser consecutivas. Próxima cuota esperada: ${nextInstallment + index}`);
      }
    });

    const monthlyRate = 0.013; // 1.3% mensual
    let outstanding = Number(credit.outstandingAmount);

    const paymentsToCreate = uniqueInstallments.map((installmentNumber: number) => {
      const interestAmount = +(outstanding * monthlyRate).toFixed(2);
      let principalAmount = credit.installmentAmount - interestAmount;
      if (principalAmount < 0) principalAmount = 0;
      if (principalAmount > outstanding) principalAmount = outstanding;
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

    const updatedCredit = await prisma.$transaction(async (tx) => {
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

      await recalcUserDebt(credit.userId, tx);

      return creditUpdate;
    });

    await createAuditLog(user.id, 'pay', 'credits', creditId, creditBeforeUpdate, updatedCredit, req);

    return createResponse(200, updatedCredit);
  } catch (error: any) {
    context.error('Error registrando pago de crédito:', error);
    const message = error.message || 'Error interno del servidor';
    return createResponse(400, { error: message });
  }
}

app.http('credits-pay', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'api/credits/{id}/pay',
  handler: payCredit
});
