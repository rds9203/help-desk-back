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
async function changePassword(req, context) {
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
        const body = await req.json();
        const { email, currentPassword, newPassword } = body;
        if (!email || !currentPassword || !newPassword) {
            return (0, utils_1.createResponse)(400, { error: 'Email, contraseña actual y nueva contraseña son requeridos' });
        }
        if (newPassword.length < 6) {
            return (0, utils_1.createResponse)(400, { error: 'La nueva contraseña debe tener al menos 6 caracteres' });
        }
        if (newPassword === currentPassword) {
            return (0, utils_1.createResponse)(400, { error: 'La nueva contraseña debe ser diferente a la actual' });
        }
        // Buscar usuario por email
        const user = await prisma_1.prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return (0, utils_1.createResponse)(404, { error: 'Usuario no encontrado' });
        }
        // Verificar que el usuario autenticado pueda cambiar la contraseña de este usuario
        if (user.id !== currentUser.id && !['admin', 'superadmin'].includes(currentUser.role)) {
            return (0, utils_1.createResponse)(403, { error: 'No tienes permisos para cambiar la contraseña de otro usuario' });
        }
        // Validar contraseña actual
        if (!user.password) {
            return (0, utils_1.createResponse)(400, { error: 'El usuario no tiene una contraseña establecida' });
        }
        const isValidCurrentPassword = await bcryptjs_1.default.compare(currentPassword, user.password);
        if (!isValidCurrentPassword) {
            return (0, utils_1.createResponse)(401, { error: 'Contraseña actual incorrecta' });
        }
        // Hashear la nueva contraseña
        const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 10);
        // Actualizar contraseña en la base de datos
        const updatedUser = await prisma_1.prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedNewPassword,
                mustChangePassword: false, // Ya no debe cambiar contraseña
                pendingActivation: false, // Ya no está pendiente de activación
                updatedAt: new Date()
            }
        });
        // Crear log de auditoría
        await (0, middleware_1.createAuditLog)(currentUser.id, 'update', 'users', user.id, { mustChangePassword: user.mustChangePassword }, { mustChangePassword: false }, req);
        context.log(`Contraseña cambiada exitosamente para usuario: ${user.email}`);
        return (0, utils_1.createResponse)(200, {
            message: 'Contraseña cambiada exitosamente',
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                mustChangePassword: updatedUser.mustChangePassword,
                pendingActivation: updatedUser.pendingActivation
            }
        });
    }
    catch (error) {
        context.error('Error cambiando contraseña:', error);
        return (0, utils_1.createResponse)(500, { error: 'Error interno del servidor al cambiar contraseña' });
    }
}
functions_1.app.http('change-password', {
    methods: ['PUT'],
    authLevel: 'anonymous',
    route: 'api/change-password',
    handler: changePassword
});
//# sourceMappingURL=index.js.map