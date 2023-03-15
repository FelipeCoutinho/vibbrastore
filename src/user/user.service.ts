import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  
  private readonly users = [
    {
      "login": "john",
      "password": "changeme"
  },
    {
      login: 'maria',
      password: 'guess',
    },
  ];
  
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(username) {
    return this.users.find(user => user.login === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  
  authenticate() {
    return 'yes';
  }
}
