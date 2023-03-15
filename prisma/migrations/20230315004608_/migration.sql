/*
  Warnings:

  - Added the required column `urgency` to the `negotiation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "negotiation" ADD COLUMN     "photos" JSONB[],
ADD COLUMN     "urgency" TEXT NOT NULL;
