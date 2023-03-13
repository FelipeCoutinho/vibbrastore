import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';

@UseGuards(LocalAuthGuard)
@Controller()
export class AppController {
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}