import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, createAuditLog } from '../../../lib/middleware';

async function approveCredit(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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

    if (!['admin', 'superadmin'].includes(user.role)) {
      return createResponse(403, { error: 'No tienes permisos para aprobar créditos' });
    }

    const creditId = parseInt(req.params?.id || '');

    if (!creditId || isNaN(creditId)) {
      return createResponse(400, { error: 'ID de crédito requerido' });
    }

    const credit = await prisma.credit.findUnique({
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
      return createResponse(404, { error: 'Crédito no encontrado' });
    }

    if (!credit.user) {
      return createResponse(400, { error: 'El crédito no tiene usuario asociado' });
    }

    const otherCredits = credit.user.credits.filter((item: any) => item.id !== creditId);
    const existingExposure = otherCredits.reduce((total: number, item: any) => {
      const outstanding = item.outstandingAmount ?? item.loanAmount ?? 0;
      return total + outstanding;
    }, 0);

    const creditExposure = credit.outstandingAmount ?? credit.loanAmount ?? 0;

    const updatedCredit = await prisma.$transaction(async (tx) => {
      if (otherCredits.length > 0) {
        await Promise.all(
          otherCredits.map(async (c: any) => {
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
          })
        );
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

    await createAuditLog(
      user.id,
      'approve',
      'credits',
      creditId,
      credit,
      updatedCredit,
      req
    );

    return createResponse(200, updatedCredit);
  } catch (error) {
    context.error('Error aprobando crédito:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('credits-approve', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'api/credits/{id}/approve',
  handler: approveCredit
});
