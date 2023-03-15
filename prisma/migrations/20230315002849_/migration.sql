/*
  Warnings:

  - Added the required column `description` to the `negotiation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `negotiation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trade_for` to the `negotiation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `negotiation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `negotiation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "negotiation" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" JSONB NOT NULL,
ADD COLUMN     "trade_for" TEXT NOT NULL,
ADD COLUMN     "type" INTEGER NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
