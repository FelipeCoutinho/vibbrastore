import { Module } from '@nestjs/common';
import { NegotiationService } from './negotiation.service';
import { NegotiationController } from './negotiation.controller';
import { NegotiationRepository } from './negotiation.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NegotiationController],
  providers: [
    NegotiationService,
    NegotiationRepository,
    PrismaService
  ]
})
export class NegotiationModule {}
