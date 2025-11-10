import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    try {
        const { method } = req;

        switch (method) {
            case 'POST':
                await handleLogin(context, req);
                break;
            case 'GET':
                await handleGetUser(context, req);
                break;
            default:
                context.res = {
                    status: 405,
                    body: { error: 'Method not allowed' }
                };
        }
    } catch (error) {
        context.log.error('Error in auth function:', error);
        context.res = {
            status: 500,
            body: { error: 'Internal server error' }
        };
    } finally {
        await prisma.$disconnect();
    }
};

async function handleLogin(context: Context, req: HttpRequest): Promise<void> {
    const { email, password } = req.body;

    if (!email || !password) {
        context.res = {
            status: 400,
            body: { error: 'Email and password are required' }
        };
        return;
    }

    try {
        // Buscar usuario por email
        const user = await prisma.user.findUnique({
            where: { email },
            include: { role: true }
        });

        if (!user) {
            context.res = {
                status: 401,
                body: { error: 'Usuario no registrado en el sistema' }
            };
            return;
        }

        // Validar que el usuario esté activo
        if (!user.isActive) {
            context.res = {
                status: 401,
                body: { error: 'Tu cuenta está inactiva. Contacta al administrador.' }
            };
            return;
        }

        // Validar que el usuario no esté pendiente de activación
        // EXCEPTO si debe cambiar contraseña (permite login para cambiar contraseña)
        if (user.pendingActivation && !user.mustChangePassword) {
            context.res = {
                status: 401,
                body: { error: 'Tu cuenta está pendiente de activación. Revisa tu correo para completar el proceso.' }
            };
            return;
        }

        // Validar contraseña: acepta '123' como contraseña por defecto O la contraseña personalizada del usuario
        const isValidPassword = password === '123' || password === user.password;

        if (!isValidPassword) {
            context.res = {
                status: 401,
                body: { error: 'Email o contraseña incorrectos' }
            };
            return;
        }

        // Login exitoso
        const response = {
            token: `token-${user.id}-${Date.now()}`,
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                documentNumber: user.documentNumber,
                birthDate: user.birthDate,
                position: user.position,
                role: user.role.name,
                salary: user.salary,
                hasDebt: user.hasDebt,
                startDate: user.startDate,
                isActive: user.isActive,
                pendingActivation: user.pendingActivation,
                mustChangePassword: user.mustChangePassword,
                contractType: user.contractType
            }
        };

        context.res = {
            status: 200,
            body: response
        };

        context.log(`Login exitoso para usuario: ${user.email}`);

    } catch (error) {
        context.log.error('Error en login:', error);
        context.res = {
            status: 500,
            body: { error: 'Error interno del servidor' }
        };
    }
}

async function handleGetUser(context: Context, req: HttpRequest): Promise<void> {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
        context.res = {
            status: 401,
            body: { error: 'Token de autorización requerido' }
        };
        return;
    }

    try {
        // Extraer ID del usuario del token (simplificado)
        const userId = token.split('-')[1];
        
        if (!userId) {
            context.res = {
                status: 401,
                body: { error: 'Token inválido' }
            };
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { role: true }
        });

        if (!user) {
            context.res = {
                status: 404,
                body: { error: 'Usuario no encontrado' }
            };
            return;
        }

        context.res = {
            status: 200,
            body: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                documentNumber: user.documentNumber,
                birthDate: user.birthDate,
                position: user.position,
                role: user.role.name,
                salary: user.salary,
                hasDebt: user.hasDebt,
                startDate: user.startDate,
                isActive: user.isActive,
                pendingActivation: user.pendingActivation,
                mustChangePassword: user.mustChangePassword,
                contractType: user.contractType
            }
        };

    } catch (error) {
        context.log.error('Error obteniendo usuario:', error);
        context.res = {
            status: 500,
            body: { error: 'Error interno del servidor' }
        };
    }
}

export default httpTrigger;

