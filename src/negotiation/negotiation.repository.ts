import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNegotiationDto } from './dto/create-negotiation.dto';
import { UpdateNegotiationDto } from './dto/update-negotiation.dto';

@Injectable()
export class NegotiationRepository {
  constructor(private readonly prismaService : PrismaService ) { }

  async create(createNegotiationDto: CreateNegotiationDto) {
    try {
      return 'This action adds a new negotiation';
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  async findAll() {
    try {
      return this.prismaService.negotiation.findMany();
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  async findOne(id: number) {
    try {
      return `This action returns a #${id} negotiation`;
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  async update(id: number, updateNegotiationDto: UpdateNegotiationDto) {
    try {
      return `This action updates a #${id} negotiation`;
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  async remove(id: number) {
    try {
      return `This action removes a #${id} negotiation`;
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }
}
