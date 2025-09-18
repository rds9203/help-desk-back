import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { prisma } from '../../lib/prisma';
import { createResponse, handleCors } from '../../lib/utils';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const corsResponse = handleCors(req);
  if (corsResponse) {
    context.res = corsResponse;
    return;
  }

  try {
    switch (req.method) {
      case 'GET':
        await getUsers(context, req);
        break;
      case 'POST':
        await createUser(context, req);
        break;
      case 'PUT':
        await updateUser(context, req);
        break;
      case 'DELETE':
        await deleteUser(context, req);
        break;
      default:
        context.res = createResponse(405, { error: 'Método no permitido' });
    }
  } catch (error) {
    context.log.error('Error en users endpoint:', error);
    context.res = createResponse(500, { error: 'Error interno del servidor' });
  }
};

async function getUsers(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  
  if (id) {
    // Obtener usuario específico
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: {
        role: true,
        credits: {
          include: {
            interestRate: true,
            paymentHistory: true
          }
        }
      }
    });
    
    if (!user) {
      context.res = createResponse(404, { error: 'Usuario no encontrado' });
      return;
    }
    
    context.res = createResponse(200, user);
  } else {
    // Obtener todos los usuarios
    const users = await prisma.user.findMany({
      include: {
        role: true,
        credits: {
          include: {
            interestRate: true
          }
        }
      }
    });
    
    context.res = createResponse(200, users);
  }
}

async function createUser(context: Context, req: HttpRequest): Promise<void> {
  const { firstName, lastName, email, password, birthDate, position, startDate, roleId } = req.body;
  
  if (!firstName || !lastName || !email || !password || !birthDate || !position || !startDate || !roleId) {
    context.res = createResponse(400, { error: 'Faltan campos requeridos' });
    return;
  }
  
  // Verificar si el email ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });
  
  if (existingUser) {
    context.res = createResponse(400, { error: 'El email ya está registrado' });
    return;
  }
  
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password, // En producción, hashear la contraseña
      birthDate: new Date(birthDate),
      position,
      startDate: new Date(startDate),
      roleId: parseInt(roleId)
    },
    include: {
      role: true
    }
  });
  
  context.res = createResponse(201, user);
}

async function updateUser(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  const updateData = req.body;
  
  if (!id) {
    context.res = createResponse(400, { error: 'ID de usuario requerido' });
    return;
  }
  
  const user = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      ...updateData,
      birthDate: updateData.birthDate ? new Date(updateData.birthDate) : undefined,
      startDate: updateData.startDate ? new Date(updateData.startDate) : undefined
    },
    include: {
      role: true
    }
  });
  
  context.res = createResponse(200, user);
}

async function deleteUser(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  
  if (!id) {
    context.res = createResponse(400, { error: 'ID de usuario requerido' });
    return;
  }
  
  await prisma.user.delete({
    where: { id: parseInt(id) }
  });
  
  context.res = createResponse(200, { message: 'Usuario eliminado correctamente' });
}

export default httpTrigger;

