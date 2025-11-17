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

  // Crear superadmin adicional - Richard
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
      isActive: true,
      emailVerified: true,
      pendingActivation: false,
      pendingApproval: false
    }
  });

  console.log('✅ Super Administrador Richard creado:', richardAdmin.email);

  // Crear usuario Pedro García con deuda
  const pedroGarcia = await prisma.user.upsert({
    where: { email: 'pedro.garcia@sectorial.co' },
    update: {},
    create: {
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
      isActive: true,
      emailVerified: true,
      pendingActivation: false,
      pendingApproval: false,
      mustChangePassword: true
    }
  });

  console.log('✅ Usuario Pedro García creado:', pedroGarcia.email);

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

  // Crear notificaciones solo para los usuarios existentes
  try {
    await prisma.notification.create({
      data: {
        userId: pedroGarcia.id,
        title: 'Solicitud de crédito pendiente',
        message: 'Tienes una solicitud de crédito pendiente de aprobación',
        type: 'warning'
      }
    });
    console.log('✅ Notificaciones creadas');
  } catch (error) {
    // Ignorar si ya existe o hay algún error
    console.log('ℹ️ Notificaciones ya existen o hubo un error al crearlas');
  }

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