
import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
    
    ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async login(user: any) {
    try {
      const payload = { username: user.username, sub: user.userId };
      const result = this.jwtService.sign(payload,{
        secret: jwtConstants.secret,
        expiresIn: '50s',
      });
      return {
        access_token:  result
      };
      
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}