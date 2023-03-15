import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { NegotiationService } from './negotiation.service';
import { CreateNegotiationDto } from './dto/create-negotiation.dto';
import { UpdateNegotiationDto } from './dto/update-negotiation.dto';

@Controller('deals')
export class NegotiationController {
  constructor(private readonly negotiationService: NegotiationService) {}

  @Post()
  create(@Body() createNegotiationDto: CreateNegotiationDto) {
    try {
      return this.negotiationService.create(createNegotiationDto);
      
    } catch (error) {
      return {error:error};
    }
  }

  @Get()
  findAll() {
    try {
      return this.negotiationService.findAll();
      
    } catch (error) {
      return {error:error};
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    try {
      return this.negotiationService.findOne(id);
      
    } catch (error) {
      return {error:error};
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateNegotiationDto: UpdateNegotiationDto) {
    try {
      return this.negotiationService.update(id, updateNegotiationDto);
      
    } catch (error) {
      return {error:error};
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    try {
      return this.negotiationService.remove(id);
      
    } catch (error) {
      return {error:error};
    }
  }
}
