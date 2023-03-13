import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {  UseGuards } from '@nestjs/common';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
    return this.userService.create(createUserDto);  
    } catch (error) {
      return error;
    }
    
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    try {
    return this.userService.findAll();  
    } catch (error) {
      return error;
    }
    
  }

  @Get(':id')
  findOne(@Param('name') name: string) {
    try {
    return this.userService.findOne(name);  
    } catch (error) {
      return error;
    }
    
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
    return this.userService.update(+id, updateUserDto);  
    } catch (error) {
      return error;
    }
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
    return this.userService.remove(+id);  
    } catch (error) {
      return error;
    }
    
  }

  @Post('authenticate')
  authenticate(@Body() createUserDto: CreateUserDto){
    try {
      this.userService.authenticate();
    } catch (error) {
      
    }
  }
}
