import { PartialType } from '@nestjs/mapped-types';
import { CreateInvateDto } from './create-invate.dto';

export class UpdateInvateDto extends PartialType(CreateInvateDto) {}
