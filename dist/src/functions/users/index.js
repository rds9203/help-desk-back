"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
async function getUsers(req, context) {
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
        const userPermissions = user.permissions || [];
        const isAuthorized = (0, middleware_1.authorize)(['users.read'])(userPermissions);
        if (!isAuthorized) {
            return (0, utils_1.createResponse)(403, { error: 'Permisos insuficientes' });
        }
        const users = await prisma_1.prisma.user.findMany({
            include: { role: true },
            orderBy: { createdAt: 'desc' }
        });
        const usersWithoutPassword = users.map(user => ({
            ...user,
            password: undefined
        }));
        return (0, utils_1.createResponse)(200, usersWithoutPassword);
    }
    catch (error) {
        context.error('Error obteniendo usuarios:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
async function createUser(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    try {
        const authResult = await (0, middleware_1.authenticateToken)(req);
        if ('response' in authResult) {
            return authResult.response;
        }
        const { user: currentUser } = authResult;
        const userPermissions = currentUser.permissions || [];
        const isAuthorized = (0, middleware_1.authorize)(['users.create'])(userPermissions);
        if (!isAuthorized) {
            return (0, utils_1.createResponse)(403, { error: 'Permisos insuficientes' });
        }
        const body = await req.json();
        const { firstName, lastName, email, password, position, startDate, salary, roleId } = body;
        if (!firstName || !lastName || !email || !password) {
            return (0, utils_1.createResponse)(400, { error: 'Campos requeridos: firstName, lastName, email, password' });
        }
        // Validar dominio de email
        if (!email.endsWith('@sectorial.co')) {
            return (0, utils_1.createResponse)(400, { error: 'Solo se permiten emails del dominio @sectorial.co' });
        }
        // Verificar si el email ya existe
        const existingUser = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return (0, utils_1.createResponse)(400, { error: 'El email ya está registrado' });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const pendingApproval = currentUser.role !== 'superadmin'; // Solo superadmin puede crear usuarios sin aprobación
        const user = await prisma_1.prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                position,
                startDate: startDate ? new Date(startDate) : null,
                salary: salary ? parseFloat(salary) : null,
                roleId: parseInt(roleId),
                pendingApproval,
                approvedBy: !pendingApproval ? currentUser.id : null,
                approvedAt: !pendingApproval ? new Date() : null
            },
            include: { role: true }
        });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(currentUser.id, 'create', 'users', user.id, null, user, req);
        const { password: _, ...userWithoutPassword } = user;
        return (0, utils_1.createResponse)(201, userWithoutPassword);
    }
    catch (error) {
        context.error('Error creando usuario:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('users', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: 'api/users',
    handler: async (req, context) => {
        if (req.method === 'GET') {
            return await getUsers(req, context);
        }
        else if (req.method === 'POST') {
            return await createUser(req, context);
        }
        else {
            return (0, utils_1.createResponse)(405, { error: 'Método no permitido' });
        }
    }
});
//# sourceMappingURL=index.js.map