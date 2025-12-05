import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog, recalcUserDebt } from '../../../lib/middleware';

async function rejectCredit(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    if (!creditId || isNaN(creditId)) {
      return createResponse(400, { error: 'ID de crédito requerido' });
    }

    const credit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: {
        user: true
      }
    });

    if (!credit) {
      return createResponse(404, { error: 'Crédito no encontrado' });
    }

    // Solo el dueño o admin puede rechazar/cancelar
    if (credit.userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
      return createResponse(403, { error: 'No tienes permisos para rechazar este crédito' });
    }

    const updatedCredit = await prisma.credit.update({
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
      await recalcUserDebt(credit.userId);
    }

    await createAuditLog(
      user.id,
      'reject',
      'credits',
      creditId,
      credit,
      updatedCredit,
      req
    );

    return createResponse(200, updatedCredit);
  } catch (error) {
    context.error('Error rechazando crédito:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('credits-reject', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/credits/{id}/reject',
  handler: rejectCredit
});
