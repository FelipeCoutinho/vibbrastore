/*
  Warnings:

  - Added the required column `location` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "location" JSONB NOT NULL,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
