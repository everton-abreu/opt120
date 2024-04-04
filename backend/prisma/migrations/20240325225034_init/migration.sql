/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `username`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL DEFAULT '12345678';
