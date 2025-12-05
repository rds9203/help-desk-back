"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("@azure/functions");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../../lib/prisma");
const utils_1 = require("../../../lib/utils");
const middleware_1 = require("../../../lib/middleware");
const JWT_SECRET = process.env.JWT_SECRET || 'helpdesk_secret_key_2024';
async function handleLogin(req, context) {
    const corsResponse = (0, utils_1.handleCors)(req);
    if (corsResponse) {
        return corsResponse;
    }
    try {
        const body = await req.json();
        const { email, password } = body;
        if (!email || !password) {
            return (0, utils_1.createResponse)(400, { error: 'Email y contraseña son requeridos' });
        }
        context.log(`🔍 Intentando login para: ${email}`);
        const user = await prisma_1.prisma.user.findUnique({
            where: { email },
            include: { role: true }
        });
        if (!user) {
            context.log(`❌ Usuario no encontrado: ${email}`);
            return (0, utils_1.createResponse)(401, { error: 'Credenciales inválidas' });
        }
        context.log(`👤 Usuario encontrado: ${user.email}, isActive: ${user.isActive}, pendingApproval: ${user.pendingApproval}, pendingActivation: ${user.pendingActivation}`);
        if (!user.isActive) {
            context.log(`❌ Usuario inactivo: ${email}`);
            return (0, utils_1.createResponse)(401, { error: 'Tu cuenta está inactiva. Contacta al administrador.' });
        }
        if (!user.password) {
            context.log(`❌ Usuario sin contraseña: ${email}`);
            return (0, utils_1.createResponse)(401, { error: 'Credenciales inválidas' });
        }
        const validPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!validPassword) {
            context.log(`❌ Contraseña inválida para: ${email}`);
            return (0, utils_1.createResponse)(401, { error: 'Credenciales inválidas' });
        }
        if (user.pendingApproval) {
            context.log(`❌ Usuario pendiente de aprobación: ${email}`);
            return (0, utils_1.createResponse)(403, { error: 'Tu cuenta está pendiente de aprobación' });
        }
        const permissions = (0, middleware_1.parsePermissions)(user.role.permissions);
        // Crear token JWT
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            email: user.email,
            role: user.role.name,
            permissions
        }, JWT_SECRET, { expiresIn: '24h' });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(user.id, 'login', null, null, null, null, req);
        return (0, utils_1.createResponse)(200, {
            token,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                position: user.position,
                role: user.role.name,
                permissions,
                mustChangePassword: user.mustChangePassword,
                pendingActivation: user.pendingActivation,
                isActive: user.isActive
            }
        });
    }
    catch (error) {
        context.error('Error en login:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor' });
    }
}
functions_1.app.http('auth-login', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'api/auth/login',
    handler: handleLogin
});
//# sourceMappingURL=index.js.map