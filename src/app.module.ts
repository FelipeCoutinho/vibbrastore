import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FranchiseRepository } from './franchises.repository';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import { NegotiationModule } from './negotiation/negotiation.module';
import { OfferModule } from './offer/offer.module';
import { InvateModule } from './invate/invate.module';
import { MessagesModule } from './messages/messages.module';
import { ShippingModule } from './shipping/shipping.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, PaymentModule, UserModule, NegotiationModule, OfferModule, InvateModule, MessagesModule, ShippingModule],
  controllers: [AppController],
  providers: [AppService, FranchiseRepository],
})
export class AppModule {}
