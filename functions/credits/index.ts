import { AzureFunction, Context, HttpRequest } from '@azure/functions';
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
        await getCredits(context, req);
        break;
      case 'POST':
        await createCredit(context, req);
        break;
      case 'PUT':
        await updateCredit(context, req);
        break;
      case 'DELETE':
        await deleteCredit(context, req);
        break;
      default:
        context.res = createResponse(405, { error: 'Método no permitido' });
    }
  } catch (error) {
    context.log.error('Error en credits endpoint:', error);
    context.res = createResponse(500, { error: 'Error interno del servidor' });
  }
};

async function getCredits(context: Context, req: HttpRequest): Promise<void> {
  const { id, userId } = req.query;
  
  // Datos mock para testing
  const mockCredits = [
    {
      id: 1,
      creditType: 'Préstamo Personal',
      loanAmount: 15000,
      outstandingAmount: 12000,
      installmentAmount: 1500,
      totalInstallments: 12,
      pendingInstallments: 8,
      startDate: '2024-01-01',
      endDate: '2024-12-01',
      status: 'ACTIVO',
      userId: 1,
      user: {
        id: 1,
        firstName: 'user2',
        lastName: 'Usuario',
        email: 'user2@helpdesk.com',
        role: { id: 2, name: 'user', description: 'Usuario regular' }
      },
      interestRate: {
        id: 1,
        name: 'Empleado 1-2 años',
        rate: 12.0
      }
    },
    {
      id: 2,
      creditType: 'Línea de Crédito Empresarial',
      loanAmount: 50000,
      outstandingAmount: 35000,
      installmentAmount: 5000,
      totalInstallments: 12,
      pendingInstallments: 7,
      startDate: '2024-02-01',
      endDate: '2025-01-01',
      status: 'ACTIVO',
      userId: 1,
      user: {
        id: 1,
        firstName: 'user2',
        lastName: 'Usuario',
        email: 'user2@helpdesk.com',
        role: { id: 2, name: 'user', description: 'Usuario regular' }
      },
      interestRate: {
        id: 1,
        name: 'Empleado 1-2 años',
        rate: 12.0
      }
    }
  ];

  if (id) {
    // Obtener crédito específico
    const credit = mockCredits.find(c => c.id === parseInt(id as string));
    
    if (!credit) {
      context.res = createResponse(404, { error: 'Crédito no encontrado' });
      return;
    }
    
    context.res = createResponse(200, credit);
  } else if (userId) {
    // Obtener créditos de un usuario específico
    const credits = mockCredits.filter(c => c.userId === parseInt(userId as string));
    context.res = createResponse(200, credits);
  } else {
    // Obtener todos los créditos
    context.res = createResponse(200, mockCredits);
  }
}

async function createCredit(context: Context, req: HttpRequest): Promise<void> {
  const { 
    userId, 
    creditType, 
    loanAmount, 
    totalMonths 
  } = req.body;
  
  if (!userId || !creditType || !loanAmount || !totalMonths) {
    context.res = createResponse(400, { error: 'Faltan campos requeridos' });
    return;
  }
  
  // Simular creación de crédito
  const newCredit = {
    id: Math.floor(Math.random() * 1000),
    creditType,
    loanAmount: parseFloat(loanAmount),
    outstandingAmount: parseFloat(loanAmount),
    installmentAmount: parseFloat(loanAmount) / parseInt(totalMonths),
    totalInstallments: parseInt(totalMonths),
    pendingInstallments: parseInt(totalMonths),
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + parseInt(totalMonths) * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'ACTIVO',
    userId: parseInt(userId),
    user: {
      id: parseInt(userId),
      firstName: 'user2',
      lastName: 'Usuario',
      email: 'user2@helpdesk.com',
      role: { id: 2, name: 'user', description: 'Usuario regular' }
    },
    interestRate: {
      id: 1,
      name: 'Empleado 1-2 años',
      rate: 12.0
    }
  };
  
  context.res = createResponse(201, newCredit);
}

async function updateCredit(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  const updateData = req.body;
  
  if (!id) {
    context.res = createResponse(400, { error: 'ID de crédito requerido' });
    return;
  }
  
  // Simular actualización
  const updatedCredit = {
    id: parseInt(id),
    ...updateData,
    user: {
      id: 1,
      firstName: 'user2',
      lastName: 'Usuario',
      email: 'user2@helpdesk.com',
      role: { id: 2, name: 'user', description: 'Usuario regular' }
    },
    interestRate: {
      id: 1,
      name: 'Empleado 1-2 años',
      rate: 12.0
    }
  };
  
  context.res = createResponse(200, updatedCredit);
}

async function deleteCredit(context: Context, req: HttpRequest): Promise<void> {
  const { id } = req.params;
  
  if (!id) {
    context.res = createResponse(400, { error: 'ID de crédito requerido' });
    return;
  }
  
  context.res = createResponse(200, { message: 'Crédito eliminado correctamente' });
}

export default httpTrigger;