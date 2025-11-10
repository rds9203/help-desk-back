import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request for create user.');

    try {
        const {
            firstName,
            lastName,
            email,
            documentNumber,
            birthDate,
            position,
            salary,
            hasDebt,
            startDate,
            role,
            contractType,
            debtAmount,
            paidAmount,
            installmentAmount,
            interestRate
        } = req.body;

        // Validaciones básicas
        if (!firstName || !lastName || !email) {
            context.res = {
                status: 400,
                body: { error: 'Nombre, apellido y email son requeridos' }
            };
            return;
        }

        // Verificar si el email ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            context.res = {
                status: 400,
                body: { error: 'El email ya está registrado en el sistema' }
            };
            return;
        }

        const roleName = role || 'user';
        const roleRecord = await prisma.role.findUnique({
            where: { name: roleName }
        });

        if (!roleRecord) {
            context.res = {
                status: 400,
                body: { error: `El rol "${roleName}" no existe en el sistema` }
            };
            return;
        }

        try {
            const defaultPassword = '123';
            const hashedPassword = await bcrypt.hash(defaultPassword, 10);

            // Crear usuario en la base de datos
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    documentNumber: documentNumber || null,
                    birthDate: birthDate ? new Date(birthDate) : null,
                    position: position || null,
                    salary: salary !== undefined && salary !== null ? Number(salary) : null,
                    hasDebt: Boolean(hasDebt),
                    debtAmount: Boolean(hasDebt) ? Number(debtAmount ?? 0) : null,
                    paidAmount: Boolean(hasDebt) ? Number(paidAmount ?? 0) : null,
                    installmentAmount: Boolean(hasDebt) ? Number(installmentAmount ?? 0) : null,
                    interestRate: Boolean(hasDebt) ? Number(interestRate ?? 0) : null,
                    startDate: startDate ? new Date(startDate) : new Date(),
                    contractType: contractType || 'indefinido',
                    password: hashedPassword, // Contraseña por defecto hasheada
                    mustChangePassword: true, // Debe cambiar contraseña en primer login
                    pendingActivation: true, // Pendiente de activación
                    isActive: true,
                    emailVerified: false,
                    pendingApproval: false,
                    roleId: roleRecord.id
                },
                include: { role: true }
            });

            context.res = {
                status: 201,
                body: {
                    message: 'Usuario creado correctamente',
                    user: {
                        id: newUser.id,
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        email: newUser.email,
                        documentNumber: newUser.documentNumber,
                        position: newUser.position,
                        birthDate: newUser.birthDate,
                        salary: newUser.salary,
                        hasDebt: newUser.hasDebt,
                        debtAmount: newUser.debtAmount,
                        paidAmount: newUser.paidAmount,
                        installmentAmount: newUser.installmentAmount,
                        interestRate: newUser.interestRate,
                        startDate: newUser.startDate,
                        contractType: newUser.contractType,
                        role: newUser.role.name,
                        isActive: newUser.isActive,
                        pendingActivation: newUser.pendingActivation,
                        mustChangePassword: newUser.mustChangePassword
                    },
                    defaultPassword
                }
            };

            context.log(`Usuario creado exitosamente: ${newUser.email}`);

        } catch (error) {
            context.log.error('Error creando usuario:', error);
            context.res = {
                status: 500,
                body: { error: 'Error interno del servidor al crear usuario' }
            };
        }

    } catch (error) {
        context.log.error('Error en create-user function:', error);
        context.res = {
            status: 500,
            body: { error: 'Error interno del servidor' }
        };
    } finally {
        await prisma.$disconnect();
    }
};

export default httpTrigger;

