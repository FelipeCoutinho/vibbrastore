-- CreateTable
CREATE TABLE "user" (
    "userID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "negotiation" (
    "negotiationId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "negotiation_pkey" PRIMARY KEY ("negotiationId")
);

-- CreateTable
CREATE TABLE "offer" (
    "offerId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "offer_pkey" PRIMARY KEY ("offerId")
);

-- CreateTable
CREATE TABLE "payment" (
    "paymentId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateTable
CREATE TABLE "invate" (
    "invateId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invate_pkey" PRIMARY KEY ("invateId")
);

-- CreateTable
CREATE TABLE "messages" (
    "messageId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("messageId")
);

-- CreateTable
CREATE TABLE "shipping" (
    "shippingId" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "shipping_pkey" PRIMARY KEY ("shippingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
