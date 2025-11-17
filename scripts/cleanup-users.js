const { PrismaClient } = require('../generated/prisma');

async function main() {
  const prisma = new PrismaClient();

  try {
    console.log('🧹 Iniciando limpieza de usuarios...');

    // Lista de emails de usuarios que queremos mantener
    const usersToKeep = [
      'superadmin@sectorial.co',
      'richy9.13@gmail.com',
      'pedro.garcia@sectorial.co'
    ];

    // Obtener todos los usuarios
    const allUsers = await prisma.user.findMany({
      select: { id: true, email: true, firstName: true, lastName: true }
    });

    console.log(`📊 Total de usuarios encontrados: ${allUsers.length}`);

    // Filtrar usuarios a eliminar
    const usersToDelete = allUsers.filter(user => !usersToKeep.includes(user.email));

    if (usersToDelete.length === 0) {
      console.log('✅ No hay usuarios para eliminar. La base de datos ya está limpia.');
      return;
    }

    console.log(`🗑️  Usuarios a eliminar: ${usersToDelete.length}`);
    usersToDelete.forEach(user => {
      console.log(`   - ${user.firstName} ${user.lastName} (${user.email})`);
    });

    // Eliminar usuarios (esto también eliminará registros relacionados por cascada si está configurado)
    // Primero eliminamos notificaciones relacionadas
    for (const user of usersToDelete) {
      await prisma.notification.deleteMany({
        where: { userId: user.id }
      });
    }

    // Eliminar historial de pagos relacionado
    for (const user of usersToDelete) {
      await prisma.paymentHistory.deleteMany({
        where: { userId: user.id }
      });
    }

    // Eliminar créditos relacionados
    for (const user of usersToDelete) {
      await prisma.credit.deleteMany({
        where: { userId: user.id }
      });
    }

    // Finalmente eliminar los usuarios
    const deleteResult = await prisma.user.deleteMany({
      where: {
        email: {
          notIn: usersToKeep
        }
      }
    });

    console.log(`✅ ${deleteResult.count} usuario(s) eliminado(s) exitosamente.`);

    // Verificar usuarios restantes
    const remainingUsers = await prisma.user.findMany({
      select: { email: true, firstName: true, lastName: true }
    });

    console.log(`\n📋 Usuarios restantes (${remainingUsers.length}):`);
    remainingUsers.forEach(user => {
      console.log(`   ✅ ${user.firstName} ${user.lastName} (${user.email})`);
    });

    console.log('\n🎉 Limpieza completada exitosamente!');
  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();


