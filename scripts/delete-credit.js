const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const creditId = parseInt(process.argv[2], 10);

  if (Number.isNaN(creditId)) {
    console.error('Usage: node scripts/delete-credit.js <creditId>');
    process.exit(1);
  }

  const credit = await prisma.credit.findUnique({
    where: { id: creditId },
    include: { user: true }
  });

  if (!credit) {
    console.error(`Credit not found: ${creditId}`);
    process.exit(1);
  }

  await prisma.credit.delete({ where: { id: creditId } });
  console.log(`Deleted credit ${creditId} for user ${credit.user?.email ?? credit.userId}`);

  if (credit.user) {
    const remainingCredits = await prisma.credit.findMany({
      where: {
        userId: credit.userId,
        status: { in: ['ACTIVO', 'PENDIENTE_APROBACION'] }
      }
    });

    const totalOutstanding = remainingCredits.reduce((total, item) => {
      const outstanding = item.outstandingAmount ?? item.loanAmount ?? 0;
      return total + outstanding;
    }, 0);

    await prisma.user.update({
      where: { id: credit.userId },
      data: {
        hasDebt: totalOutstanding > 0,
        debtAmount: totalOutstanding
      }
    });

    console.log(`Updated user ${credit.user.email}: outstanding = ${totalOutstanding}`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());







