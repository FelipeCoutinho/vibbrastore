import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[UserModule],
  providers: [
    AuthService,
    UserService,
    LocalStrategy
  ]
})
export class AuthModule {}
