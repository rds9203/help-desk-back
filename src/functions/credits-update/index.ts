import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog } from '../../../lib/middleware';

async function updateCredit(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    const body = await req.json() as any;
    const { loanAmount, installments, status, creditType } = body;

    // Obtener crédito actual
    const currentCredit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: { user: true }
    });

    if (!currentCredit) {
      return createResponse(404, { error: 'Crédito no encontrado' });
    }

    // Solo el dueño o admin puede modificar
    if (currentCredit.userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
      return createResponse(403, { error: 'No tienes permisos para modificar este crédito' });
    }

    const updateData: any = {};
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
    if (status !== undefined) updateData.status = status;

    const updatedCredit = await prisma.credit.update({
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
    await createAuditLog(
      user.id,
      'update',
      'credits',
      creditId,
      currentCredit,
      updatedCredit,
      req
    );

    return createResponse(200, updatedCredit);
  } catch (error) {
    context.error('Error actualizando crédito:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('credits-update', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/credits/{id}',
  handler: updateCredit
});
