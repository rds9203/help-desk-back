const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

async function main() {
  const email = process.argv[2];
  const newPassword = process.argv[3] || '123';

  if (!email) {
    console.error('Uso: node scripts/reset-password.js <email> [nuevaContraseña]');
    process.exit(1);
  }

  const prisma = new PrismaClient();

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const user = await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        mustChangePassword: true,
        pendingApproval: false,
        pendingActivation: false,
        isActive: true
      }
    });

    console.log(`✅ Contraseña actualizada para ${user.email}. Nueva contraseña: ${newPassword}`);
  } catch (error) {
    if (error.code === 'P2025') {
      console.error(`❌ No se encontró un usuario con el email ${email}`);
    } else {
      console.error('❌ Error actualizando contraseña:', error);
    }
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();






