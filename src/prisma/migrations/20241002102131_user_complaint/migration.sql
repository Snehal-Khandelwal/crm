-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Consumer', 'Employee');

-- CreateTable
CREATE TABLE "user" (
    "consumerNo" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "mobileNo" INTEGER NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Consumer',
    "cpf" INTEGER,
    "section" TEXT NOT NULL,
    "subdivision" TEXT NOT NULL,
    "division" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("consumerNo")
);

-- CreateTable
CREATE TABLE "complaint" (
    "complaintId" SERIAL NOT NULL,
    "complaint" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "complaint_pkey" PRIMARY KEY ("complaintId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_consumerNo_key" ON "user"("consumerNo");

-- CreateIndex
CREATE UNIQUE INDEX "user_mobileNo_key" ON "user"("mobileNo");
