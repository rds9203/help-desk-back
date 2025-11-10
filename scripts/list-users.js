const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function run() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, firstName: true, lastName: true, createdAt: true }
    });
    console.table(users);
  } catch (error) {
    console.error("Error listando usuarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

run();
