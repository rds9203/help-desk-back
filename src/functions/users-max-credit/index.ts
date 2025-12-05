import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import { prisma } from '../../../lib/prisma';
import { createResponse, handleCors } from '../../../lib/utils';
import { authenticateToken, calculateMonthsBetween, calculateMaxCreditForUser } from '../../../lib/middleware';

async function getMaxCredit(req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
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
    const userId = parseInt(req.params?.id || '');

    if (!userId || isNaN(userId)) {
      return createResponse(400, { error: 'ID de usuario requerido' });
    }

    // Solo puede ver su propio crédito máximo, a menos que sea admin
    if (userId !== user.id && !['admin', 'superadmin'].includes(user.role)) {
      return createResponse(403, { error: 'No tienes permisos para ver el crédito máximo de otro usuario' });
    }

    const dbUser = await prisma.user.findUnique({
      where: { id: userId },
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

    if (!dbUser) {
      return createResponse(404, { error: 'Usuario no encontrado' });
    }

    const maxCredit = calculateMaxCreditForUser(dbUser);
    const existingExposure = dbUser.credits.reduce((total: number, credit: any) => {
      const outstanding = credit.outstandingAmount ?? credit.loanAmount ?? 0;
      return total + outstanding;
    }, 0);
    const availableAmount = Math.max(0, maxCredit - existingExposure);

    const monthsWorked = dbUser.startDate ? calculateMonthsBetween(dbUser.startDate, new Date()) : 0;

    return createResponse(200, {
      userId: dbUser.id,
      userName: `${dbUser.firstName} ${dbUser.lastName}`,
      salary: dbUser.salary,
      monthsWorked,
      maxCredit,
      existingExposure,
      availableAmount,
      hasDebt: dbUser.hasDebt
    });
  } catch (error) {
    context.error('Error obteniendo crédito máximo:', error);
    return createResponse(500, { error: 'Error interno del servidor' });
  }
}

app.http('users-max-credit', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'api/users/{id}/max-credit',
  handler: getMaxCredit
});
