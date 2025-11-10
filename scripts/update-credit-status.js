const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function main() {
  const creditId = parseInt(process.argv[2], 10);
  const status = process.argv[3];

  if (Number.isNaN(creditId) || !status) {
    console.error('Usage: node scripts/update-credit-status.js <creditId> <status>');
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

  const updatedCredit = await prisma.credit.update({
    where: { id: creditId },
    data: {
      status,
      outstandingAmount: status === 'RECHAZADO' ? 0 : credit.outstandingAmount
    }
  });

  console.log(`Credit ${creditId} updated to status ${status}`);

  if (credit.user) {
    const remainingCredits = await prisma.credit.findMany({
      where: {
        userId: credit.userId,
        status: {
          in: ['ACTIVO', 'PENDIENTE_APROBACION']
        }
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

