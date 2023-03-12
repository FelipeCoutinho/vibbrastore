import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvateService } from './invate.service';
import { CreateInvateDto } from './dto/create-invate.dto';
import { UpdateInvateDto } from './dto/update-invate.dto';

@Controller('invate')
export class InvateController {
  constructor(private readonly invateService: InvateService) {}

  @Post()
  create(@Body() createInvateDto: CreateInvateDto) {
    return this.invateService.create(createInvateDto);
  }

  @Get()
  findAll() {
    return this.invateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvateDto: UpdateInvateDto) {
    return this.invateService.update(+id, updateInvateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invateService.remove(+id);
  }
}
