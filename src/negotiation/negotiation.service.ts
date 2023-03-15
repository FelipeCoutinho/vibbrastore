import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNegotiationDto } from './dto/create-negotiation.dto';
import { UpdateNegotiationDto } from './dto/update-negotiation.dto';
import { NegotiationRepository } from './negotiation.repository'; 
@Injectable()
export class NegotiationService {
  constructor(private readonly negotiationRepository : NegotiationRepository ) { }

  create(createNegotiationDto: CreateNegotiationDto) {
    try {
      return 'This action adds a new negotiation';
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  findAll() {
    try {
      return this.negotiationRepository.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  findOne(id: number) {
    try {
      return `This action returns a #${id} negotiation`;
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  update(id: number, updateNegotiationDto: UpdateNegotiationDto) {
    try {
      return `This action updates a #${id} negotiation`;
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }

  remove(id: number) {
    try {
      return `This action removes a #${id} negotiation`;
      
    } catch (error) {
      throw new InternalServerErrorException(error.stack);
    }
  }
}
