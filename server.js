const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('./generated/prisma');

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret
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
  } catch (error) {
    console.warn('⚠️ No se pudieron parsear los permisos, usando arreglo vacío', error);
    return [];
  }
};

const calculateMonthsBetween = (startDate, endDate) => {
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

const calculateMaxCreditForUser = (user) => {
  const salary = Number(user?.salary ?? 0);
  if (!salary || Number.isNaN(salary)) {
    return 0;
  }

  // Cualquier persona puede prestar el doble de lo que gana
  return salary * 2;
};

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de acceso requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user;
    next();
  });
};

// Middleware de autorización
const authorize = (permissions) => {
  return (req, res, next) => {
    const userPermissions = req.user.permissions || [];
    
    if (userPermissions.includes('*') || permissions.some(p => userPermissions.includes(p))) {
      next();
    } else {
      res.status(403).json({ error: 'Permisos insuficientes' });
    }
  };
};

// Función para crear log de auditoría
const createAuditLog = async (userId, action, tableName, recordId, oldValues, newValues, req) => {
  try {
    await prisma.auditLog.create({
      data: {
        userId,
        action,
        tableName,
        recordId,
        oldValues: oldValues ? JSON.stringify(oldValues) : null,
        newValues: newValues ? JSON.stringify(newValues) : null,
        ipAddress: req.ip,
        userAgent: req.get('User-Agent')
      }
    });
  } catch (error) {
    console.error('Error creando log de auditoría:', error);
  }
};

const recalcUserDebt = async (userId, client = prisma) => {
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

// === AUTENTICACIÓN ===

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }

    console.log(`🔍 Intentando login para: ${email}`);

    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    });

    if (!user) {
      console.log(`❌ Usuario no encontrado: ${email}`);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    console.log(`👤 Usuario encontrado: ${user.email}, isActive: ${user.isActive}, pendingApproval: ${user.pendingApproval}, pendingActivation: ${user.pendingActivation}`);

    if (!user.isActive) {
      console.log(`❌ Usuario inactivo: ${email}`);
      return res.status(401).json({ error: 'Tu cuenta está inactiva. Contacta al administrador.' });
    }

    if (!user.password) {
      console.log(`❌ Usuario sin contraseña: ${email}`);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log(`❌ Contraseña inválida para: ${email}`);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    if (user.pendingApproval) {
      console.log(`❌ Usuario pendiente de aprobación: ${email}`);
      return res.status(403).json({ error: 'Tu cuenta está pendiente de aprobación' });
    }

    const permissions = parsePermissions(user.role.permissions);

    // Crear token JWT
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email, 
        role: user.role.name,
        permissions
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Crear log de auditoría
    await createAuditLog(user.id, 'login', null, null, null, null, req);

    res.json({
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
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener usuario autenticado
app.get('/api/auth/me', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { role: true }
    });

    if (!user || !user.isActive) {
      return res.status(401).json({ error: 'Usuario no encontrado o inactivo' });
    }

    const permissions = parsePermissions(user.role.permissions);

    res.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        documentNumber: user.documentNumber,
        birthDate: user.birthDate,
        position: user.position,
        role: user.role.name,
        permissions,
        salary: user.salary,
        hasDebt: user.hasDebt,
        debtAmount: user.debtAmount,
        paidAmount: user.paidAmount,
        installmentAmount: user.installmentAmount,
        interestRate: user.interestRate,
        startDate: user.startDate,
        contractType: user.contractType,
        mustChangePassword: user.mustChangePassword,
        pendingActivation: user.pendingActivation,
        isActive: user.isActive
      }
    });
  } catch (error) {
    console.error('Error obteniendo usuario autenticado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === USUARIOS ===

// Obtener usuarios (solo admin y superadmin)
app.get('/api/users', authenticateToken, authorize(['users.read']), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { role: true },
      orderBy: { createdAt: 'desc' }
    });

    const usersWithoutPassword = users.map(user => ({
      ...user,
      password: undefined
    }));

    res.json(usersWithoutPassword);
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear usuario (solo admin y superadmin)
app.post('/api/users', authenticateToken, authorize(['users.create']), async (req, res) => {
  try {
    const { firstName, lastName, email, password, position, startDate, salary, roleId } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'Campos requeridos: firstName, lastName, email, password' });
    }

    // Validar dominio de email
    if (!email.endsWith('@sectorial.co')) {
      return res.status(400).json({ error: 'Solo se permiten emails del dominio @sectorial.co' });
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const pendingApproval = req.user.role !== 'superadmin'; // Solo superadmin puede crear usuarios sin aprobación

    const user = await prisma.user.create({
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
        approvedBy: !pendingApproval ? req.user.id : null,
        approvedAt: !pendingApproval ? new Date() : null
      },
      include: { role: true }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'create', 'users', user.id, null, user, req);

    const { password: _, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error('Error creando usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener crédito máximo de un usuario
app.get('/api/users/:id/max-credit', authenticateToken, async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    
    // Solo puede ver su propio crédito máximo, a menos que sea admin
    if (userId !== req.user.id && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para ver el crédito máximo de otro usuario' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        credits: {
          where: {
            status: {
              in: ['ACTIVO', 'PENDIENTE_APROBACION']
            }
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const maxCredit = calculateMaxCreditForUser(user);
    const existingExposure = user.credits.reduce((total, credit) => {
      const outstanding = credit.outstandingAmount ?? credit.loanAmount ?? 0;
      return total + outstanding;
    }, 0);
    const availableAmount = Math.max(0, maxCredit - existingExposure);

    const monthsWorked = user.startDate ? calculateMonthsBetween(user.startDate, new Date()) : 0;

    res.json({
      userId: user.id,
      userName: `${user.firstName} ${user.lastName}`,
      salary: user.salary,
      monthsWorked,
      maxCredit,
      existingExposure,
      availableAmount,
      hasDebt: user.hasDebt
    });
  } catch (error) {
    console.error('Error obteniendo crédito máximo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Aprobar usuario (solo admin y superadmin)
app.put('/api/users/:id/approve', authenticateToken, authorize(['users.update']), async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        pendingApproval: false,
        approvedBy: req.user.id,
        approvedAt: new Date()
      },
      include: { role: true }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'update', 'users', userId, user, updatedUser, req);

    const { password: _, ...userWithoutPassword } = updatedUser;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error aprobando usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === TICKETS ===

// Obtener tickets
app.get('/api/tickets', authenticateToken, async (req, res) => {
  try {
    let whereClause = {};

    // Si no es admin, technology o superadmin, solo ver sus propios tickets
    if (!['admin', 'technology', 'superadmin'].includes(req.user.role)) {
      whereClause = {
        OR: [
          { createdById: req.user.id },
          { assignedTo: req.user.id }
        ]
      };
    }

    const tickets = await prisma.ticket.findMany({
      where: whereClause,
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        assignedUser: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        comments: {
          include: {
            user: {
              select: { id: true, firstName: true, lastName: true }
            }
          },
          orderBy: { createdAt: 'desc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(tickets);
  } catch (error) {
    console.error('Error obteniendo tickets:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear ticket
app.post('/api/tickets', authenticateToken, async (req, res) => {
  try {
    const { title, description, priority, category } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Título y descripción son requeridos' });
    }

    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        priority: priority || 'medium',
        category: category || 'other',
        createdById: req.user.id
      },
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'create', 'tickets', ticket.id, null, ticket, req);

    res.status(201).json(ticket);
  } catch (error) {
    console.error('Error creando ticket:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Actualizar ticket (solo technology, admin, superadmin)
app.put('/api/tickets/:id', authenticateToken, authorize(['tickets.update']), async (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    const { status, priority, assignedTo } = req.body;

    const oldTicket = await prisma.ticket.findUnique({
      where: { id: ticketId }
    });

    if (!oldTicket) {
      return res.status(404).json({ error: 'Ticket no encontrado' });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (assignedTo) updateData.assignedTo = assignedTo;
    if (status === 'resolved') updateData.resolvedAt = new Date();

    const updatedTicket = await prisma.ticket.update({
      where: { id: ticketId },
      data: updateData,
      include: {
        createdBy: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        assignedUser: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'update', 'tickets', ticketId, oldTicket, updatedTicket, req);

    res.json(updatedTicket);
  } catch (error) {
    console.error('Error actualizando ticket:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Agregar comentario a ticket
app.post('/api/tickets/:id/comments', authenticateToken, async (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    const { comment } = req.body;

    if (!comment) {
      return res.status(400).json({ error: 'Comentario es requerido' });
    }

    const ticketComment = await prisma.ticketComment.create({
      data: {
        ticketId,
        userId: req.user.id,
        comment
      },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true }
        }
      }
    });

    res.status(201).json(ticketComment);
  } catch (error) {
    console.error('Error agregando comentario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === RESERVAS ===

// Obtener recursos
app.get('/api/resources', authenticateToken, async (req, res) => {
  try {
    const resources = await prisma.resource.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });

    res.json(resources);
  } catch (error) {
    console.error('Error obteniendo recursos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener reservas
app.get('/api/reservations', authenticateToken, async (req, res) => {
  try {
    let whereClause = {};

    // Si no es admin o superadmin, solo ver sus propias reservas
    if (!['admin', 'superadmin'].includes(req.user.role)) {
      whereClause = { userId: req.user.id };
    }

    const reservations = await prisma.reservation.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        resource: true
      },
      orderBy: { startDate: 'desc' }
    });

    res.json(reservations);
  } catch (error) {
    console.error('Error obteniendo reservas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear reserva
app.post('/api/reservations', authenticateToken, async (req, res) => {
  try {
    const { resourceId, startDate, endDate, title, description } = req.body;

    if (!resourceId || !startDate || !endDate || !title) {
      return res.status(400).json({ error: 'Campos requeridos: resourceId, startDate, endDate, title' });
    }

    // Verificar disponibilidad
    const conflictingReservation = await prisma.reservation.findFirst({
      where: {
        resourceId: parseInt(resourceId),
        status: 'confirmed',
        OR: [
          {
            AND: [
              { startDate: { lte: new Date(startDate) } },
              { endDate: { gte: new Date(startDate) } }
            ]
          },
          {
            AND: [
              { startDate: { lte: new Date(endDate) } },
              { endDate: { gte: new Date(endDate) } }
            ]
          }
        ]
      }
    });

    if (conflictingReservation) {
      return res.status(400).json({ error: 'El recurso no está disponible en ese horario' });
    }

    const reservation = await prisma.reservation.create({
      data: {
        userId: req.user.id,
        resourceId: parseInt(resourceId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        title,
        description
      },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        resource: true
      }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'create', 'reservations', reservation.id, null, reservation, req);

    res.status(201).json(reservation);
  } catch (error) {
    console.error('Error creando reserva:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === VACACIONES ===

// Obtener días de vacaciones del usuario actual
app.get('/api/vacations/days', authenticateToken, async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    
    const vacationDays = await prisma.vacationDay.findFirst({
      where: {
        userId: req.user.id,
        year: currentYear
      }
    });

    if (!vacationDays) {
      // Crear registro si no existe
      const newVacationDays = await prisma.vacationDay.create({
        data: {
          userId: req.user.id,
          year: currentYear,
          totalDays: 22,
          usedDays: 0
        }
      });
      res.json(newVacationDays);
    } else {
      res.json(vacationDays);
    }
  } catch (error) {
    console.error('Error obteniendo días de vacaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener todas las vacaciones (solo admin y superadmin)
app.get('/api/vacations', authenticateToken, authorize(['vacations.read']), async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    
    const vacationDays = await prisma.vacationDay.findMany({
      where: { year: currentYear },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true, position: true }
        }
      },
      orderBy: { user: { firstName: 'asc' } }
    });

    res.json(vacationDays);
  } catch (error) {
    console.error('Error obteniendo vacaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear solicitud de vacaciones
app.post('/api/vacations/request', authenticateToken, async (req, res) => {
  try {
    const { startDate, endDate, reason } = req.body;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Fecha de inicio y fin son requeridas' });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    // Verificar días disponibles
    const currentYear = new Date().getFullYear();
    const vacationDays = await prisma.vacationDay.findFirst({
      where: {
        userId: req.user.id,
        year: currentYear
      }
    });

    if (!vacationDays) {
      return res.status(400).json({ error: 'No se encontraron días de vacaciones para este año' });
    }

    if (vacationDays.usedDays + days > vacationDays.totalDays) {
      return res.status(400).json({ 
        error: `No tienes suficientes días de vacaciones. Disponibles: ${vacationDays.totalDays - vacationDays.usedDays}` 
      });
    }

    const vacationRequest = await prisma.vacationRequest.create({
      data: {
        userId: req.user.id,
        vacationDayId: vacationDays.id,
        startDate: start,
        endDate: end,
        days,
        reason
      }
    });

    // Crear log de auditoría
    await createAuditLog(req.user.id, 'create', 'vacation_requests', vacationRequest.id, null, vacationRequest, req);

    res.status(201).json(vacationRequest);
  } catch (error) {
    console.error('Error creando solicitud de vacaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === CRÉDITOS (mantener funcionalidad existente) ===

// === CRÉDITOS ===

// Obtener créditos
app.get('/api/credits', authenticateToken, async (req, res) => {
  try {
    let whereClause = {};

    // Si no es admin o superadmin, solo ver sus propios créditos
    if (!['admin', 'superadmin'].includes(req.user.role)) {
      whereClause = { userId: req.user.id };
    }

    const credits = await prisma.credit.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        interestRate: true,
        payments: {
          orderBy: { installmentNumber: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(credits);
  } catch (error) {
    console.error('Error obteniendo créditos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Crear crédito
app.post('/api/credits', authenticateToken, async (req, res) => {
  try {
    const { loanAmount, installments, creditType, interestRateId, userId } = req.body;

    if (!loanAmount || !installments) {
      return res.status(400).json({ error: 'Monto y número de cuotas son requeridos' });
    }

    const numericAmount = parseFloat(loanAmount);
    const numericInstallments = parseInt(installments);

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({ error: 'El monto del crédito debe ser un número mayor a 0' });
    }

    if (Number.isNaN(numericInstallments) || numericInstallments <= 0 || numericInstallments > 36) {
      return res.status(400).json({ error: 'La cantidad de cuotas debe ser un número entre 1 y 36 meses' });
    }

    const targetUserId = userId ? parseInt(userId) : req.user.id;
    if (Number.isNaN(targetUserId)) {
      return res.status(400).json({ error: 'El usuario indicado no es válido' });
    }

    const isCreatingForAnotherUser = targetUserId !== req.user.id;
    if (isCreatingForAnotherUser && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para crear créditos a otros usuarios' });
    }

    const user = await prisma.user.findUnique({
      where: { id: targetUserId },
      include: {
        credits: {
          where: {
            status: {
              in: ['ACTIVO', 'PENDIENTE_APROBACION']
            }
          }
        }
      }
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const existingExposure = user.credits.reduce((total, credit) => {
      const outstanding = credit.outstandingAmount ?? credit.loanAmount ?? 0;
      return total + outstanding;
    }, 0);

    const maxCredit = calculateMaxCreditForUser(user);
    const availableAmount = Math.max(0, maxCredit - existingExposure);

    // Consolidación de deudas:
    // El nuevo crédito tomará TODA la deuda actual y el nuevo solicitado,
    // pero NO podrá exceder el 2x salario (maxCredit).
    // El desembolso efectivo será (nuevoCredito - deudaActual), que no puede ser negativo.
    const consolidatedLoanAmount = Math.min(maxCredit, existingExposure + numericAmount);
    const disbursedAmount = Math.max(0, consolidatedLoanAmount - existingExposure);
    const finalLoanAmount = consolidatedLoanAmount; // Monto total del nuevo crédito

    if (finalLoanAmount <= 0) {
      return res.status(400).json({
        error: 'El usuario no tiene cupo disponible para solicitar nuevos créditos',
        maxCredit,
        usedAmount: existingExposure,
        availableAmount: 0
      });
    }

    // Calcular fechas
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + numericInstallments);

    // Calcular monto de cuota y monto pendiente con el NUEVO monto consolidado
    const installmentAmount = finalLoanAmount / numericInstallments;
    const outstandingAmount = finalLoanAmount;

    // Obtener tasa de interés por defecto si no se especifica
    let finalInterestRateId = interestRateId;
    if (!finalInterestRateId) {
      const defaultRate = await prisma.interestRate.findFirst({
        where: { isActive: true }
      });
      finalInterestRateId = defaultRate ? defaultRate.id : 1;
    }

    // Crear el nuevo crédito consolidado (NO cerrar aún los anteriores).
    // El cierre de créditos previos ocurrirá en la aprobación del nuevo crédito.
    const credit = await prisma.credit.create({
      data: {
        userId: targetUserId,
        loanAmount: finalLoanAmount,
        installments: numericInstallments,
        installmentAmount: installmentAmount,
        outstandingAmount: outstandingAmount,
        startDate,
        endDate,
        interestRateId: finalInterestRateId,
        status: 'PENDIENTE_APROBACION'
      },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        interestRate: true
      }
    });

    await prisma.user.update({
      where: { id: targetUserId },
      data: {
        hasDebt: true,
        // Mientras se aprueba, la deuda total es la suma de deudas actuales + nuevo crédito
        debtAmount: existingExposure + outstandingAmount
      }
    });

    // Crear log de auditoría
    await createAuditLog(
      req.user.id,
      'create',
      'credits',
      credit.id,
      null,
      credit,
      req
    );

    res.status(201).json({
      ...credit,
      disbursedAmount: Number(disbursedAmount.toFixed(2)),
      consolidatedPreviousDebt: existingExposure,
      maxCredit,
      availableAmountBefore: availableAmount
    });
  } catch (error) {
    console.error('Error creando crédito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Actualizar crédito
app.put('/api/credits/:id', authenticateToken, async (req, res) => {
  try {
    const creditId = parseInt(req.params.id);
    const { loanAmount, installments, status, creditType } = req.body;

    // Obtener crédito actual
    const currentCredit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: { user: true }
    });

    if (!currentCredit) {
      return res.status(404).json({ error: 'Crédito no encontrado' });
    }

    // Solo el dueño o admin puede modificar
    if (currentCredit.userId !== req.user.id && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para modificar este crédito' });
    }

    const updateData = {};
    if (loanAmount !== undefined) updateData.loanAmount = parseFloat(loanAmount);
    if (installments !== undefined) {
      updateData.installments = parseInt(installments);
      // Recalcular monto de cuota
      updateData.installmentAmount = updateData.loanAmount / updateData.installments;
      // Recalcular fecha fin
      const startDate = currentCredit.startDate;
      const endDate = new Date(startDate);
      endDate.setMonth(endDate.getMonth() + updateData.installments);
      updateData.endDate = endDate;
    }
    if (status !== undefined) updateData.status = status;

    const updatedCredit = await prisma.credit.update({
      where: { id: creditId },
      data: updateData,
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        interestRate: true,
        payments: {
          orderBy: { installmentNumber: 'asc' }
        }
      }
    });

    // Crear log de auditoría
    await createAuditLog(
      req.user.id,
      'update',
      'credits',
      creditId,
      currentCredit,
      updatedCredit,
      req
    );

    res.json(updatedCredit);
  } catch (error) {
    console.error('Error actualizando crédito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Aprobar crédito (solo admin)
app.put('/api/credits/:id/approve', authenticateToken, async (req, res) => {
  try {
    if (!['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para aprobar créditos' });
    }

    const creditId = parseInt(req.params.id);
    const credit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: {
        user: {
          include: {
            credits: {
              where: {
                status: {
                  in: ['ACTIVO', 'PENDIENTE_APROBACION']
                }
              }
            }
          }
        }
      }
    });

    if (!credit) {
      return res.status(404).json({ error: 'Crédito no encontrado' });
    }

    if (!credit.user) {
      return res.status(400).json({ error: 'El crédito no tiene usuario asociado' });
    }

    const otherCredits = credit.user.credits.filter(item => item.id !== creditId);
    const existingExposure = otherCredits.reduce((total, item) => {
      const outstanding = item.outstandingAmount ?? item.loanAmount ?? 0;
      return total + outstanding;
    }, 0);

    const creditExposure = credit.outstandingAmount ?? credit.loanAmount ?? 0;
    // Al aprobar: cerrar créditos anteriores y activar el nuevo en una transacción atómica
    const updatedCredit = await prisma.$transaction(async (tx) => {
      // Cerrar otros créditos (ACTIVO/PENDIENTE_APROBACION) y marcar todas sus cuotas como pagadas
      if (otherCredits.length > 0) {
        await Promise.all(
          otherCredits.map(async (c) => {
            await tx.credit.update({
              where: { id: c.id },
              data: {
                status: 'PAGADO',
                outstandingAmount: 0,
                // Marcar todas las cuotas como pagadas en el contador
                paidInstallments: c.installments
              }
            });
            // Opcional: marcar todos los registros de pago pendientes como pagados (si existieran)
            await tx.paymentHistory.updateMany({
              where: { creditId: c.id, status: { not: 'PAGADO' } },
              data: { status: 'PAGADO' }
            });
          })
        );
      }
      // Activar el crédito aprobado
      const activated = await tx.credit.update({
        where: { id: creditId },
        data: { status: 'ACTIVO' },
        include: {
          user: {
            select: { id: true, firstName: true, lastName: true, email: true }
          },
          interestRate: true
        }
      });
      // Actualizar deuda del usuario = solo el nuevo crédito
      await tx.user.update({
        where: { id: credit.userId },
        data: {
          hasDebt: creditExposure > 0,
          debtAmount: creditExposure
        }
      });
      return activated;
    });

    // Crear log de auditoría
    await createAuditLog(
      req.user.id,
      'approve',
      'credits',
      creditId,
      credit,
      updatedCredit,
      req
    );

    res.json(updatedCredit);
  } catch (error) {
    console.error('Error aprobando crédito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Rechazar o cancelar crédito
app.put('/api/credits/:id/reject', authenticateToken, async (req, res) => {
  try {
    const creditId = parseInt(req.params.id);
    const credit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: {
        user: true
      }
    });

    if (!credit) {
      return res.status(404).json({ error: 'Crédito no encontrado' });
    }

    // Solo el dueño o admin puede rechazar/cancelar
    if (credit.userId !== req.user.id && !['admin', 'superadmin'].includes(req.user.role)) {
      return res.status(403).json({ error: 'No tienes permisos para rechazar este crédito' });
    }

    const updatedCredit = await prisma.credit.update({
      where: { id: creditId },
      data: { status: 'RECHAZADO' },
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        },
        interestRate: true
      }
    });

    if (credit.user) {
      await recalcUserDebt(credit.userId);
    }

    // Crear log de auditoría
    await createAuditLog(
      req.user.id,
      'reject',
      'credits',
      creditId,
      credit,
      updatedCredit,
      req
    );

    res.json(updatedCredit);
  } catch (error) {
    console.error('Error rechazando crédito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/api/credits/:id/pay', authenticateToken, async (req, res) => {
  try {
    const creditId = parseInt(req.params.id);
    const { installmentNumbers } = req.body;

    if (!Array.isArray(installmentNumbers) || installmentNumbers.length === 0) {
      return res.status(400).json({ error: 'Debes indicar las cuotas a pagar' });
    }

    const uniqueInstallments = Array.from(new Set(installmentNumbers.map(Number))).sort((a, b) => a - b);

    const credit = await prisma.credit.findUnique({
      where: { id: creditId },
      include: {
        user: true,
        interestRate: true,
        payments: {
          orderBy: { installmentNumber: 'asc' }
        }
      }
    });

    if (!credit) {
      return res.status(404).json({ error: 'Crédito no encontrado' });
    }

    if (credit.status !== 'ACTIVO') {
      return res.status(400).json({ error: 'Solo se pueden registrar pagos sobre créditos activos' });
    }

    const isAdmin = ['admin', 'superadmin'].includes(req.user.role);
    if (credit.userId !== req.user.id && !isAdmin) {
      return res.status(403).json({ error: 'No tienes permisos para registrar pagos en este crédito' });
    }

    const nextInstallment = credit.paidInstallments + 1;
    uniqueInstallments.forEach((installment, index) => {
      if (installment !== nextInstallment + index) {
        throw new Error(`Las cuotas a pagar deben ser consecutivas. Próxima cuota esperada: ${nextInstallment + index}`);
      }
    });

    const monthlyRate = 0.013; // 1.3% mensual
    let outstanding = Number(credit.outstandingAmount);

    const paymentsToCreate = uniqueInstallments.map(installmentNumber => {
      const interestAmount = +(outstanding * monthlyRate).toFixed(2);
      let principalAmount = credit.installmentAmount - interestAmount;
      if (principalAmount < 0) principalAmount = 0;
      if (principalAmount > outstanding) principalAmount = outstanding;
      const amount = +(principalAmount + interestAmount).toFixed(2);
      outstanding = Math.max(0, +(outstanding - principalAmount).toFixed(2));

      return {
        installmentNumber,
        amount,
        interestAmount,
        principalAmount,
        remainingBalance: outstanding,
        paymentDate: new Date(),
        status: 'PAGADO'
      };
    });

    const creditBeforeUpdate = credit;

    const updatedCredit = await prisma.$transaction(async (tx) => {
      for (const payment of paymentsToCreate) {
        await tx.paymentHistory.create({
          data: {
            creditId,
            userId: credit.userId,
            installmentNumber: payment.installmentNumber,
            amount: payment.amount,
            interestAmount: payment.interestAmount,
            principalAmount: payment.principalAmount,
            remainingBalance: payment.remainingBalance,
            paymentDate: payment.paymentDate,
            status: payment.status
          }
        });
      }

      const remainingBalance = paymentsToCreate.length
        ? paymentsToCreate[paymentsToCreate.length - 1].remainingBalance
        : credit.outstandingAmount;

      const newPaidInstallments = credit.paidInstallments + paymentsToCreate.length;

      const creditUpdate = await tx.credit.update({
        where: { id: creditId },
        data: {
          outstandingAmount: remainingBalance,
          paidInstallments: newPaidInstallments,
          status: remainingBalance <= 0 ? 'PAGADO' : 'ACTIVO'
        },
        include: {
          user: true,
          interestRate: true,
          payments: {
            orderBy: { installmentNumber: 'asc' }
          }
        }
      });

      await recalcUserDebt(credit.userId, tx);

      return creditUpdate;
    });

    await createAuditLog(req.user.id, 'pay', 'credits', creditId, creditBeforeUpdate, updatedCredit, req);

    res.json(updatedCredit);
  } catch (error) {
    console.error('Error registrando pago de crédito:', error);
    const message = error.message || 'Error interno del servidor';
    res.status(400).json({ error: message });
  }
});

// === NOTIFICACIONES ===

// Obtener notificaciones del usuario
app.get('/api/notifications', authenticateToken, async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });

    res.json(notifications);
  } catch (error) {
    console.error('Error obteniendo notificaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Marcar notificación como leída
app.put('/api/notifications/:id/read', authenticateToken, async (req, res) => {
  try {
    const notificationId = parseInt(req.params.id);

    const notification = await prisma.notification.update({
      where: { 
        id: notificationId,
        userId: req.user.id // Asegurar que solo puede marcar sus propias notificaciones
      },
      data: { isRead: true }
    });

    res.json(notification);
  } catch (error) {
    console.error('Error marcando notificación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener contador de notificaciones no leídas
app.get('/api/notifications/unread-count', authenticateToken, async (req, res) => {
  try {
    const count = await prisma.notification.count({
      where: { 
        userId: req.user.id,
        isRead: false
      }
    });

    res.json({ count });
  } catch (error) {
    console.error('Error obteniendo contador de notificaciones:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === ROLES ===

// Obtener roles
app.get('/api/roles', authenticateToken, authorize(['users.read']), async (req, res) => {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { name: 'asc' }
    });

    res.json(roles);
  } catch (error) {
    console.error('Error obteniendo roles:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// === LOGS DE AUDITORÍA ===

// Obtener logs de auditoría (solo superadmin)
app.get('/api/audit-logs', authenticateToken, authorize(['*']), async (req, res) => {
  try {
    const { page = 1, limit = 50, tableName, action } = req.query;
    
    const whereClause = {};
    if (tableName) whereClause.tableName = tableName;
    if (action) whereClause.action = action;

    const logs = await prisma.auditLog.findMany({
      where: whereClause,
      include: {
        user: {
          select: { id: true, firstName: true, lastName: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' },
      skip: (parseInt(page) - 1) * parseInt(limit),
      take: parseInt(limit)
    });

    const total = await prisma.auditLog.count({ where: whereClause });

    res.json({
      logs,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Error obteniendo logs de auditoría:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
  console.log(`📊 API disponible en http://localhost:${port}/api`);
});

module.exports = app;

