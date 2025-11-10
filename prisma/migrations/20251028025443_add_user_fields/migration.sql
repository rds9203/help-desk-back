-- AlterTable
ALTER TABLE `user` ADD COLUMN `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `pendingActivation` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `pendingApproval` BOOLEAN NOT NULL DEFAULT false;
