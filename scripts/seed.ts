import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Crear roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      description: 'Administrador del sistema'
    }
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
      description: 'Usuario regular'
    }
  });

  console.log('✅ Roles creados');

  // Crear tasas de interés
  const interestRates = [
    {
      name: 'Nuevo empleado (0-6 meses)',
      minMonths: 0,
      maxMonths: 6,
      rate: 18.0
    },
    {
      name: 'Empleado 6-12 meses',
      minMonths: 6,
      maxMonths: 12,
      rate: 15.0
    },
    {
      name: 'Empleado 1-2 años',
      minMonths: 12,
      maxMonths: 24,
      rate: 12.0
    },
    {
      name: 'Empleado 2-5 años',
      minMonths: 24,
      maxMonths: 60,
      rate: 10.0
    },
    {
      name: 'Empleado veterano (5+ años)',
      minMonths: 60,
      maxMonths: null,
      rate: 8.0
    }
  ];

  for (const rate of interestRates) {
    await prisma.interestRate.upsert({
      where: { name: rate.name },
      update: {},
      create: rate
    });
  }

  console.log('✅ Tasas de interés creadas');

  // Crear usuarios de prueba
  const users = [
    {
      firstName: 'Admin',
      lastName: 'Sistema',
      email: 'admin@helpdesk.com',
      password: 'admin123', // En producción, hashear
      birthDate: new Date('1985-01-15'),
      position: 'Administrador',
      startDate: new Date('2020-01-01'),
      roleId: adminRole.id
    },
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      email: 'juan.perez@helpdesk.com',
      password: 'user123',
      birthDate: new Date('1990-05-20'),
      position: 'Desarrollador',
      startDate: new Date('2023-03-01'),
      roleId: userRole.id
    },
    {
      firstName: 'María',
      lastName: 'García',
      email: 'maria.garcia@helpdesk.com',
      password: 'user123',
      birthDate: new Date('1988-08-10'),
      position: 'Diseñadora',
      startDate: new Date('2022-06-15'),
      roleId: userRole.id
    },
    {
      firstName: 'Carlos',
      lastName: 'Rodríguez',
      email: 'carlos.rodriguez@helpdesk.com',
      password: 'user123',
      birthDate: new Date('1982-12-03'),
      position: 'Gerente',
      startDate: new Date('2020-01-15'),
      roleId: userRole.id
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

  // Obtener usuarios creados para crear créditos
  const createdUsers = await prisma.user.findMany({
    include: { role: true }
  });

  const adminUser = createdUsers.find(u => u.role.name === 'admin');
  const regularUsers = createdUsers.filter(u => u.role.name === 'user');

  // Crear algunos créditos de prueba
  if (regularUsers.length > 0) {
    const user1 = regularUsers[0];
    const user2 = regularUsers[1] || regularUsers[0];

    // Calcular meses en empresa para cada usuario
    const user1Months = Math.floor(
      (Date.now() - user1.startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    const user2Months = Math.floor(
      (Date.now() - user2.startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );

    // Obtener tasas de interés apropiadas
    const user1Rate = await prisma.interestRate.findFirst({
      where: {
        minMonths: { lte: user1Months },
        OR: [
          { maxMonths: { gte: user1Months } },
          { maxMonths: null }
        ]
      }
    });

    const user2Rate = await prisma.interestRate.findFirst({
      where: {
        minMonths: { lte: user2Months },
        OR: [
          { maxMonths: { gte: user2Months } },
          { maxMonths: null }
        ]
      }
    });

    if (user1Rate) {
      await prisma.credit.create({
        data: {
          userId: user1.id,
          creditType: 'Préstamo Personal',
          loanAmount: 15000,
          outstandingAmount: 12000,
          installmentAmount: 1500,
          totalInstallments: 12,
          pendingInstallments: 8,
          startDate: new Date('2024-01-01'),
          endDate: new Date('2024-12-01'),
          status: 'ACTIVO',
          interestRateId: user1Rate.id
        }
      });
    }

    if (user2Rate) {
      await prisma.credit.create({
        data: {
          userId: user2.id,
          creditType: 'Línea de Crédito Empresarial',
          loanAmount: 50000,
          outstandingAmount: 35000,
          installmentAmount: 5000,
          totalInstallments: 12,
          pendingInstallments: 7,
          startDate: new Date('2024-02-01'),
          endDate: new Date('2025-01-01'),
          status: 'ACTIVO',
          interestRateId: user2Rate.id
        }
      });
    }

    console.log('✅ Créditos de prueba creados');
  }

  console.log('🎉 Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

