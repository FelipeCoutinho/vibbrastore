import { Module } from '@nestjs/common';
import { InvateService } from './invate.service';
import { InvateController } from './invate.controller';

@Module({
  controllers: [InvateController],
  providers: [InvateService]
})
export class InvateModule {}
