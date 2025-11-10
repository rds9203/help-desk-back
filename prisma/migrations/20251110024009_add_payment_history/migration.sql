-- AlterTable
ALTER TABLE `credit` ADD COLUMN `paidInstallments` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `PaymentHistory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creditId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `installmentNumber` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `interestAmount` DOUBLE NOT NULL,
    `principalAmount` DOUBLE NOT NULL,
    `remainingBalance` DOUBLE NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'PENDIENTE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PaymentHistory` ADD CONSTRAINT `PaymentHistory_creditId_fkey` FOREIGN KEY (`creditId`) REFERENCES `Credit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentHistory` ADD CONSTRAINT `PaymentHistory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
