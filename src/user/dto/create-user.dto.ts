import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  password: string; 
}
