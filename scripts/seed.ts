import { PrismaClient } from '../generated/prisma/index.js';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Crear roles con permisos
  const existingRoles = await prisma.role.findMany();
  
  let superAdminRole = existingRoles.find(r => r.name === 'superadmin');
  if (!superAdminRole) {
    superAdminRole = await prisma.role.create({
      data: {
        name: 'superadmin',
        description: 'Super Administrador con todos los privilegios',
        permissions: JSON.stringify(['*']) // Todos los permisos
      }
    });
  }

  let adminRole = existingRoles.find(r => r.name === 'admin');
  if (!adminRole) {
    adminRole = await prisma.role.create({
      data: {
        name: 'admin',
        description: 'Administrador del sistema',
        permissions: JSON.stringify(['users.create', 'users.read', 'users.update', 'credits.read', 'credits.update', 'tickets.read', 'tickets.update', 'reservations.read', 'vacations.read', 'vacations.update'])
      }
    });
  }

  let technologyRole = existingRoles.find(r => r.name === 'technology');
  if (!technologyRole) {
    technologyRole = await prisma.role.create({
      data: {
        name: 'technology',
        description: 'Soporte Tecnológico',
        permissions: JSON.stringify(['tickets.read', 'tickets.update', 'tickets.create', 'reservations.read', 'reservations.create'])
      }
    });
  }

  let userRole = existingRoles.find(r => r.name === 'user');
  if (!userRole) {
    userRole = await prisma.role.create({
      data: {
        name: 'user',
        description: 'Usuario regular',
        permissions: JSON.stringify(['credits.read', 'tickets.create', 'reservations.read', 'reservations.create', 'vacations.read', 'vacations.create'])
      }
    });
  }

  console.log('✅ Roles creados');

  // Hash de contraseña por defecto
  const defaultPassword = await bcrypt.hash('123', 10);

  // Crear superadmin principal
  const superAdmin = await prisma.user.upsert({
    where: { email: 'superadmin@sectorial.co' },
    update: {},
    create: {
      firstName: 'Super',
      lastName: 'Administrador',
      email: 'superadmin@sectorial.co',
      password: defaultPassword,
      documentNumber: '1000000001',
      birthDate: new Date('1980-01-01'),
      position: 'Super Administrador',
      startDate: new Date('2020-01-01'),
      salary: 10000000,
      hasDebt: false,
      contractType: 'indefinido',
      roleId: superAdminRole.id,
      isActive: true,
      emailVerified: true,
      pendingActivation: false,
      pendingApproval: false
    }
  });

  console.log('✅ Super Administrador creado:', superAdmin.email);

  // Crear superadmin adicional
  const richardAdmin = await prisma.user.upsert({
    where: { email: 'richy9.13@gmail.com' },
    update: {},
    create: {
      firstName: 'Richard',
      lastName: 'Administrador',
      email: 'richy9.13@gmail.com',
      password: defaultPassword,
      documentNumber: '1000000002',
      birthDate: new Date('1990-01-01'),
      position: 'Super Administrador',
      startDate: new Date('2024-01-01'),
      salary: 10000000,
      hasDebt: false,
      contractType: 'indefinido',
      roleId: superAdminRole.id,
      mustChangePassword: true
    }
  });

  console.log('✅ Super Administrador Richard creado:', richardAdmin.email);

  // Crear usuarios de ejemplo
  const users = [
    // Usuario con deuda
    {
      firstName: 'Pedro',
      lastName: 'García',
      email: 'pedro.garcia@sectorial.co',
      password: defaultPassword,
      documentNumber: '12345678',
      birthDate: new Date('1990-05-15'),
      position: 'Desarrollador',
      startDate: new Date('2024-01-15'),
      salary: 3500000,
      hasDebt: true,
      debtAmount: 5000000, // Debe 5 millones
      paidAmount: 1500000, // Ha pagado 1.5 millones
      installmentAmount: 250000, // Cuota de 250 mil
      interestRate: 2.5, // Interés del 2.5%
      contractType: 'indefinido',
      roleId: userRole.id,
      mustChangePassword: true
    },
    // Usuario sin deuda
    {
      firstName: 'María',
      lastName: 'López',
      email: 'maria.lopez@sectorial.co',
      password: defaultPassword,
      documentNumber: '87654321',
      birthDate: new Date('1988-12-03'),
      position: 'Diseñadora',
      startDate: new Date('2022-06-15'),
      salary: 4200000,
      hasDebt: false,
      contractType: 'fijo',
      roleId: userRole.id,
      mustChangePassword: true
    },
    // Admin con deuda
    {
      firstName: 'Carlos',
      lastName: 'Martínez',
      email: 'carlos.martinez@sectorial.co',
      password: defaultPassword,
      documentNumber: '11223344',
      birthDate: new Date('1985-08-20'),
      position: 'Gerente',
      startDate: new Date('2022-01-15'),
      salary: 6000000,
      hasDebt: true,
      debtAmount: 8000000, // Debe 8 millones
      paidAmount: 2000000, // Ha pagado 2 millones
      installmentAmount: 400000, // Cuota de 400 mil
      interestRate: 3.0, // Interés del 3%
      contractType: 'indefinido',
      roleId: adminRole.id,
      mustChangePassword: true
    },
    // Soporte técnico
    {
      firstName: 'Luis',
      lastName: 'Rodríguez',
      email: 'luis.rodriguez@sectorial.co',
      password: defaultPassword,
      documentNumber: '44332211',
      birthDate: new Date('1975-07-14'),
      position: 'Soporte Técnico',
      startDate: new Date('2021-03-01'),
      salary: 4500000,
      hasDebt: false,
      contractType: 'indefinido',
      roleId: technologyRole.id,
      mustChangePassword: true
    },
    // Usuario con deuda pequeña
    {
      firstName: 'Laura',
      lastName: 'González',
      email: 'laura.gonzalez@sectorial.co',
      password: defaultPassword,
      documentNumber: '22334455',
      birthDate: new Date('1995-02-20'),
      position: 'Desarrolladora Jr',
      startDate: new Date('2024-10-01'),
      salary: 2800000,
      hasDebt: true,
      debtAmount: 2000000, // Debe 2 millones
      paidAmount: 500000, // Ha pagado 500 mil
      installmentAmount: 150000, // Cuota de 150 mil
      interestRate: 2.0, // Interés del 2%
      contractType: 'practicas',
      roleId: userRole.id,
      mustChangePassword: true
    }
  ];

  for (const userData of users) {
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: userData
    });
  }

  console.log('✅ Usuarios creados');

  // Crear tasas de interés
  const interestRates = [
    {
      name: 'Tasa Personal',
      rate: 12.5
    },
    {
      name: 'Tasa Vehículo',
      rate: 15.0
    }
  ];

  for (const rateData of interestRates) {
    await prisma.interestRate.create({
      data: rateData
    });
  }

  console.log('✅ Tasas de interés creadas');

  // Secciones de recursos y vacaciones eliminadas - no existen en el esquema actual

  // Sección de tickets eliminada - no existe en el esquema actual

  // Crear notificaciones
  const allUsers = await prisma.user.findMany();
  const notifications = [
    {
      userId: allUsers[0]?.id,
      title: 'Solicitud de crédito pendiente',
      message: 'Tienes una solicitud de crédito pendiente de aprobación',
      type: 'warning'
    },
    {
      userId: allUsers[1]?.id,
      title: 'Crédito aprobado',
      message: 'Tu solicitud de crédito ha sido aprobada',
      type: 'success'
    },
    {
      userId: allUsers[4]?.id,
      title: 'Nuevo ticket asignado',
      message: 'Se te ha asignado un nuevo ticket de soporte',
      type: 'info'
    }
  ].filter(n => n.userId); // Filtrar notificaciones con userId válido

  for (const notificationData of notifications) {
    await prisma.notification.create({
      data: notificationData
    });
  }

  console.log('✅ Notificaciones creadas');

  console.log('🎉 Seed completado exitosamente!');
  console.log('📧 Super Admin: superadmin@sectorial.co');
  console.log('🔑 Contraseña por defecto: 123');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });