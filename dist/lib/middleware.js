"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recalcUserDebt = exports.calculateMaxCreditForUser = exports.calculateMonthsBetween = exports.createAuditLog = exports.authorize = exports.authenticateToken = exports.parsePermissions = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("./prisma");
const JWT_SECRET = process.env.JWT_SECRET || 'helpdesk_secret_key_2024';
const parsePermissions = (value) => {
    if (!value) {
        return [];
    }
    if (Array.isArray(value)) {
        return value;
    }
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    }
    catch (error) {
        console.warn('⚠️ No se pudieron parsear los permisos, usando arreglo vacío', error);
        return [];
    }
};
exports.parsePermissions = parsePermissions;
const authenticateToken = async (req) => {
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
        const user = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return { user };
    }
    catch (err) {
        return {
            response: {
                status: 403,
                jsonBody: { error: 'Token inválido' }
            }
        };
    }
};
exports.authenticateToken = authenticateToken;
const authorize = (permissions) => {
    return (userPermissions) => {
        return userPermissions.includes('*') || permissions.some(p => userPermissions.includes(p));
    };
};
exports.authorize = authorize;
const createAuditLog = async (userId, action, entityType, entityId, oldValues, newValues, req) => {
    try {
        await prisma_1.prisma.auditLog.create({
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
    }
    catch (error) {
        console.error('Error creando log de auditoría:', error);
    }
};
exports.createAuditLog = createAuditLog;
const calculateMonthsBetween = (startDate, endDate) => {
    if (!startDate)
        return 0;
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
exports.calculateMonthsBetween = calculateMonthsBetween;
const calculateMaxCreditForUser = (user) => {
    const salary = Number(user?.salary ?? 0);
    if (!salary || Number.isNaN(salary)) {
        return 0;
    }
    // Cualquier persona puede prestar el doble de lo que gana
    return salary * 2;
};
exports.calculateMaxCreditForUser = calculateMaxCreditForUser;
const recalcUserDebt = async (userId, client = prisma_1.prisma) => {
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
    const debtAmount = credits.reduce((total, credit) => {
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
exports.recalcUserDebt = recalcUserDebt;
//# sourceMappingURL=middleware.js.map