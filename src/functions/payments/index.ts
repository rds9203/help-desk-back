import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken } from '../../../lib/middleware';

async function getPayments(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const id = req.query.get('id');
    const userId = req.query.get('userId');
    const creditId = req.query.get('creditId');

    if (id) {
      // Obtener pago específico
      const payment = await prisma.paymentHistory.findUnique({
        where: { id: parseInt(id) },
        include: {
          user: true,
          credit: true
        }
      });

      if (!payment) {
        return createResponse(404, { error: 'Pago no encontrado' });
      }

      // Verificar permisos
      if (!['admin', 'superadmin'].includes(user.role) && payment.userId !== user.id) {
        return createResponse(403, { error: 'No tienes permisos para ver este pago' });
      }

      return createResponse(200, payment);
    } else if (userId) {
      // Obtener pagos de un usuario específico
      const targetUserId = parseInt(userId);

      // Verificar permisos
      if (!['admin', 'superadmin'].includes(user.role) && targetUserId !== user.id) {
        return createResponse(403, { error: 'No tienes permisos para ver los pagos de otro usuario' });
      }

      const payments = await prisma.paymentHistory.findMany({
        where: { userId: targetUserId },
        include: {
          user: true,
          credit: true
        },
        orderBy: { paymentDate: 'desc' }
      });

      return createResponse(200, payments);
    } else if (creditId) {
      // Obtener pagos de un crédito específico
      const targetCreditId = parseInt(creditId);

      // Verificar que el crédito pertenezca al usuario o sea admin
      const credit = await prisma.credit.findUnique({
        where: { id: targetCreditId },
        select: { userId: true }
      });

      if (!credit) {
        return createResponse(404, { error: 'Crédito no encontrado' });
      }

      if (!['admin', 'superadmin'].includes(user.role) && credit.userId !== user.id) {
        return createResponse(403, { error: 'No tienes permisos para ver los pagos de este crédito' });
      }

      const payments = await prisma.paymentHistory.findMany({
        where: { creditId: targetCreditId },
        include: {
          user: true,
          credit: true
        },
        orderBy: { installmentNumber: 'asc' }
      });

      return createResponse(200, payments);
    } else {
      // Obtener todos los pagos (solo admin)
      if (!['admin', 'superadmin'].includes(user.role)) {
        return createResponse(403, { error: 'No tienes permisos para ver todos los pagos' });
      }

      const payments = await prisma.paymentHistory.findMany({
        include: {
          user: true,
          credit: true
        },
        orderBy: { paymentDate: 'desc' }
      });

      return createResponse(200, payments);
    }
  } catch (error) {
    context.error('Error obteniendo pagos:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

async function getPaymentById(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const id = parseInt(req.params?.id || '');

    if (!id || isNaN(id)) {
      return createResponse(400, { error: 'ID de pago requerido' });
    }

    const payment = await prisma.paymentHistory.findUnique({
      where: { id },
      include: {
        user: true,
        credit: true
      }
    });

    if (!payment) {
      return createResponse(404, { error: 'Pago no encontrado' });
    }

    // Verificar permisos
    if (!['admin', 'superadmin'].includes(user.role) && payment.userId !== user.id) {
      return createResponse(403, { error: 'No tienes permisos para ver este pago' });
    }

    return createResponse(200, payment);
  } catch (error) {
    context.error('Error obteniendo pago:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('payments', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/payments',
  handler: getPayments
});

app.http('payments-by-id', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/payments/{id}',
  handler: getPaymentById
});


