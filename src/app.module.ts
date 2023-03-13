import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { PrismaModule } from './prisma/prisma.module';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import { NegotiationModule } from './negotiation/negotiation.module';
import { OfferModule } from './offer/offer.module';
import { InvateModule } from './invate/invate.module';
import { MessagesModule } from './messages/messages.module';
import { ShippingModule } from './shipping/shipping.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt/jwt.strategy';
@Module({
  imports: [
    ConfigModule.forRoot(), 
    UserModule, 
    PrismaModule, 
    PaymentModule, 
    NegotiationModule, 
    OfferModule, 
    InvateModule, 
    MessagesModule, 
    ShippingModule, 
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AuthService,
    UserService,
    JwtService,
    JwtStrategy
  ],
})


export class AppModule {}
