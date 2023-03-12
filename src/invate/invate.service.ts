import { Injectable } from '@nestjs/common';
import { CreateInvateDto } from './dto/create-invate.dto';
import { UpdateInvateDto } from './dto/update-invate.dto';

@Injectable()
export class InvateService {
  create(createInvateDto: CreateInvateDto) {
    return 'This action adds a new invate';
  }

  findAll() {
    return `This action returns all invate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invate`;
  }

  update(id: number, updateInvateDto: UpdateInvateDto) {
    return `This action updates a #${id} invate`;
  }

  remove(id: number) {
    return `This action removes a #${id} invate`;
  }
}
