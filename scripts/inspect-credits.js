const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error('Usage: node scripts/inspect-credits.js <email>');
    process.exit(1);
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      credits: {
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!user) {
    console.error(`User not found: ${email}`);
    process.exit(1);
  }

  console.log(JSON.stringify({
    id: user.id,
    email: user.email,
    salary: user.salary,
    hasDebt: user.hasDebt,
    debtAmount: user.debtAmount,
    credits: user.credits
  }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

