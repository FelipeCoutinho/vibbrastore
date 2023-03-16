/*
  Warnings:

  - Added the required column `message` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `messages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trade_for` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urgency` to the `offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "offer" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" JSONB NOT NULL,
ADD COLUMN     "photos" TEXT[],
ADD COLUMN     "trade_for" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "urgency" INTEGER NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
