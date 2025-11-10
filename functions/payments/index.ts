import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { prisma } from '../../lib/prisma';
import { createResponse, handleCors } from '../../lib/utils';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    context.res = corsResponse;
    return;
  }

  try {
    switch (req.method) {
      case 'GET':
        await getPayments(context, req);
        break;
      case 'POST':
        await createPayment(context, req);
        break;
      case 'PUT':
        await updatePayment(context, req);
        break;
      default:
        context.res = createResponse(405, { error: 'Método no permitido' });
    }
  } catch (error) {
    context.log.error('Error en payments endpoint:', error);
    context.res = createResponse(500, { error: 'Error interno del servidor' });
  }
};

async function getPayments(context: Context, req: HttpRequest): Promise<void> {
  const { id, userId, creditId } = req.query;
  
  if (id) {
    // Obtener pago específico
    const payment = await prisma.paymentHistory.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        user: true,
        credit: true
      }
    });
    
    if (!payment) {
      context.res = createResponse(404, { error: 'Pago no encontrado' });
      return;
    }
    
    context.res = createResponse(200, payment);
  } else if (userId) {
    // Obtener pagos de un usuario específico
    const payments = await prisma.paymentHistory.findMany({
      where: { userId: parseInt(userId as string) },
      include: {
        user: true,
        credit: true
      },
      orderBy: { paymentDate: 'desc' }
    });
    
    context.res = createResponse(200, payments);
  } else if (creditId) {
    // Obtener pagos de un crédito específico
    const payments = await prisma.paymentHistory.findMany({
      where: { creditId: parseInt(creditId as string) },
      include: {
        user: true,
        credit: true
      },
      orderBy: { installmentNumber: 'asc' }
    });
    
    context.res = createResponse(200, payments);
  } else {
    // Obtener todos los pagos
    const payments = await prisma.paymentHistory.findMany({
      include: {
        user: true,
        credit: true
      },
      orderBy: { paymentDate: 'desc' }
    });
    
    context.res = createResponse(200, payments);
  }
}

async function createPayment(context: Context, req: HttpRequest): Promise<void> {
  const { userId, creditId, installmentNumber } = req.body;
  
  if (!userId || !creditId || !installmentNumber) {
    context.res = createResponse(400, { error: 'Faltan campos requeridos' });
    return;
  }
  
  const credit = await prisma.credit.findUnique({
    where: { id: parseInt(creditId) },
    include: {
      interestRate: true,
      payments: true
    }
  });
  
  if (!credit) {
    context.res = createResponse(404, { error: 'Crédito no encontrado' });
    return;
  }
  
  const nextInstallment = credit.paidInstallments + 1;
  if (parseInt(installmentNumber) !== nextInstallment) {
    context.res = createResponse(400, { error: `La próxima cuota a pagar es la número ${nextInstallment}` });
    return;
  }
  
  const monthlyRate = 0.01;
  const outstanding = Number(credit.outstandingAmount);
  const interestAmount = +(outstanding * monthlyRate).toFixed(2);
  let principalAmount = credit.installmentAmount - interestAmount;
  if (principalAmount < 0) principalAmount = 0;
  if (principalAmount > outstanding) principalAmount = outstanding;
  const amount = +(principalAmount + interestAmount).toFixed(2);
  const remainingBalance = Math.max(0, +(outstanding - principalAmount).toFixed(2));
  
  const payment = await prisma.paymentHistory.create({
    data: {
      userId: parseInt(userId),
      creditId: parseInt(creditId),
      installmentNumber: parseInt(installmentNumber),
      amount,
      interestAmount,
      principalAmount,
      remainingBalance,
      paymentDate: new Date(),
      status: 'PAGADO'
    },
    include: {
      user: true,
      credit: true
    }
  });
  
  const updatedCredit = await prisma.credit.update({
    where: { id: parseInt(creditId) },
    data: {
      outstandingAmount: remainingBalance,
      paidInstallments: credit.paidInstallments + 1,
      status: remainingBalance <= 0 ? 'PAGADO' : 'ACTIVO'
    }
  });
  
  await prisma.user.update({
    where: { id: parseInt(userId) },
    data: {
      hasDebt: remainingBalance > 0,
      debtAmount: remainingBalance
    }
  });
  
  context.res = createResponse(201, { payment, credit: updatedCredit });
}

async function updatePayment(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  const updateData = req.body;
  
  if (!id) {
    context.res = createResponse(400, { error: 'ID de pago requerido' });
    return;
  }
  
  const payment = await prisma.paymentHistory.update({
    where: { id: parseInt(id) },
    data: updateData,
    include: {
      user: true,
      credit: true
    }
  });
  
  context.res = createResponse(200, payment);
}

export default httpTrigger;

