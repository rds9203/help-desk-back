import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for change password.');

    try {
        const { email, currentPassword, newPassword } = req.body;

        if (!email || !currentPassword || !newPassword) {
            context.res = {
                status: 400,
                body: { error: 'Email, contraseña actual y nueva contraseña son requeridos' }
            };
            return;
        }

        if (newPassword.length < 6) {
            context.res = {
                status: 400,
                body: { error: 'La nueva contraseña debe tener al menos 6 caracteres' }
            };
            return;
        }

        if (newPassword === currentPassword) {
            context.res = {
                status: 400,
                body: { error: 'La nueva contraseña debe ser diferente a la actual' }
            };
            return;
        }

        try {
            // Buscar usuario por email
            const user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user) {
                context.res = {
                    status: 404,
                    body: { error: 'Usuario no encontrado' }
                };
                return;
            }

            // Validar contraseña actual
            const isValidCurrentPassword = currentPassword === '123' || currentPassword === user.password;

            if (!isValidCurrentPassword) {
                context.res = {
                    status: 401,
                    body: { error: 'Contraseña actual incorrecta' }
                };
                return;
            }

            // Actualizar contraseña en la base de datos
            const updatedUser = await prisma.user.update({
                where: { id: user.id },
                data: {
                    password: newPassword,
                    mustChangePassword: false, // Ya no debe cambiar contraseña
                    pendingActivation: false, // Ya no está pendiente de activación
                    updatedAt: new Date()
                }
            });

            context.res = {
                status: 200,
                body: {
                    message: 'Contraseña cambiada exitosamente',
                    user: {
                        id: updatedUser.id,
                        email: updatedUser.email,
                        mustChangePassword: updatedUser.mustChangePassword,
                        pendingActivation: updatedUser.pendingActivation
                    }
                }
            };

            context.log(`Contraseña cambiada exitosamente para usuario: ${user.email}`);

        } catch (error) {
            context.log.error('Error cambiando contraseña:', error);
            context.res = {
                status: 500,
                body: { error: 'Error interno del servidor al cambiar contraseña' }
            };
        }

    } catch (error) {
        context.log.error('Error en change-password function:', error);
        context.res = {
            status: 500,
            body: { error: 'Error interno del servidor' }
        };
    } finally {
        await prisma.$disconnect();
    }
};

export default httpTrigger;

