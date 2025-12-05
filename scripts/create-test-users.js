const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

async function main() {
  const prisma = new PrismaClient();
  console.log('👷 Creando usuarios de prueba...');

  try {
    // Buscar rol 'user'
    const userRole = await prisma.role.findFirst({
      where: { name: 'user' }
    });

    if (!userRole) {
      console.error('❌ No se encontró el rol "user". Crea los roles primero (seed).');
      process.exit(1);
    }

    const defaultPassword = await bcrypt.hash('123', 10);
    const today = new Date();

    const candidates = [
      {
        firstName: 'Alex',
        lastName: 'Prueba',
        email: `test.alex.${Date.now()}@sectorial.co`,
        documentNumber: String(1000000000 + Math.floor(Math.random() * 900000000)),
        position: 'Analista',
        startDate: new Date(today.getFullYear(), today.getMonth() - 6, today.getDate()),
        salary: 2800000,
      },
      {
        firstName: 'Brenda',
        lastName: 'Demo',
        email: `test.brenda.${Date.now()}@sectorial.co`,
        documentNumber: String(1000000000 + Math.floor(Math.random() * 900000000)),
        position: 'Coordinadora',
        startDate: new Date(today.getFullYear(), today.getMonth() - 12, today.getDate()),
        salary: 3500000,
      },
      {
        firstName: 'Carlos',
        lastName: 'Ejemplo',
        email: `test.carlos.${Date.now()}@sectorial.co`,
        documentNumber: String(1000000000 + Math.floor(Math.random() * 900000000)),
        position: 'Soporte',
        startDate: new Date(today.getFullYear(), today.getMonth() - 24, today.getDate()),
        salary: 2200000,
      },
    ];

    const results = [];

    for (const c of candidates) {
      const user = await prisma.user.create({
        data: {
          firstName: c.firstName,
          lastName: c.lastName,
          email: c.email,
          password: defaultPassword,
          documentNumber: c.documentNumber,
          birthDate: new Date('1990-01-01'),
          position: c.position,
          startDate: c.startDate,
          salary: c.salary,
          hasDebt: false,
          contractType: 'indefinido',
          roleId: userRole.id,
          isActive: true,
          emailVerified: true,
          pendingActivation: false,
          pendingApproval: false,
          mustChangePassword: true
        }
      });
      results.push(user);
      console.log(`✅ Usuario creado: ${user.firstName} ${user.lastName} <${user.email}> (contraseña: 123)`);
    }

    console.log('\n🎉 Listo. Usuarios de prueba creados:');
    results.forEach(u => console.log(` - ${u.firstName} ${u.lastName} (${u.email})`));
  } catch (error) {
    console.error('❌ Error creando usuarios de prueba:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();





