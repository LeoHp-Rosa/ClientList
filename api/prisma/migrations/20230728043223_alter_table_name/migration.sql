/*
  Warnings:

  - You are about to drop the column `clienteId` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_clienteId_fkey";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "clienteId",
ADD COLUMN     "clientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
