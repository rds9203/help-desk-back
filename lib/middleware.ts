import { HttpRequest, HttpResponseInit } from '@azure/functions';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'helpdesk_secret_key_2024';

export interface UserPayload {
  id: number;
  email: string;
  role: string;
  permissions: string[];
}

export const parsePermissions = (value: any): string[] => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn('⚠️ No se pudieron parsear los permisos, usando arreglo vacío', error);
    return [];
  }
};

export const authenticateToken = async (
  req: HttpRequest
): Promise<{ user: UserPayload } | { response: HttpResponseInit }> => {
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return {
      response: {
        status: 401,
        jsonBody: { error: 'Token de acceso requerido' }
      }
    };
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as UserPayload;
    return { user };
  } catch (err) {
    return {
      response: {
        status: 403,
        jsonBody: { error: 'Token inválido' }
      }
    };
  }
};

export const authorize = (permissions: string[]) => {
  return (userPermissions: string[]): boolean => {
    return userPermissions.includes('*') || permissions.some(p => userPermissions.includes(p));
  };
};

export const createAuditLog = async (
  userId: number | null,
  action: string,
  entityType: string | null,
  entityId: number | null,
  oldValues: any,
  newValues: any,
  req: HttpRequest
): Promise<void> => {
  try {
    await prisma.auditLog.create({
      data: {
        userId: userId || null,
        action,
        entityType: entityType || '',
        entityId: entityId || null,
        oldValues: oldValues ? JSON.stringify(oldValues) : null,
        newValues: newValues ? JSON.stringify(newValues) : null,
        ipAddress: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
        userAgent: req.headers.get('user-agent') || 'unknown'
      }
    });
  } catch (error) {
    console.error('Error creando log de auditoría:', error);
  }
};

export const calculateMonthsBetween = (startDate: Date, endDate: Date): number => {
  if (!startDate) return 0;

  const start = new Date(startDate);
  if (Number.isNaN(start.getTime())) {
    return 0;
  }

  const end = new Date(endDate);
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  return Math.max(months, 0);
};

export const calculateMaxCreditForUser = (user: any): number => {
  const salary = Number(user?.salary ?? 0);
  if (!salary || Number.isNaN(salary)) {
    return 0;
  }

  // Cualquier persona puede prestar el doble de lo que gana
  return salary * 2;
};

export const recalcUserDebt = async (userId: number, client: any = prisma): Promise<void> => {
  const credits = await client.credit.findMany({
    where: {
      userId,
      status: {
        in: ['ACTIVO', 'PENDIENTE_APROBACION']
      }
    },
    select: {
      outstandingAmount: true
    }
  });

  const debtAmount = credits.reduce((total: number, credit: any) => {
    return total + Number(credit.outstandingAmount || 0);
  }, 0);

  await client.user.update({
    where: { id: userId },
    data: {
      hasDebt: debtAmount > 0,
      debtAmount
    }
  });
};
