import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports:[
    JwtModule,
    UserModule,
    PassportModule,
  ],
  controllers:[
    AuthController
  ],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
