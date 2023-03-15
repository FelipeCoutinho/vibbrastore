import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";
export class CreateLocationDto {
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  lat : number; 
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  lng : number; 
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  address : string; 
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  city : string;
  
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  state: string;
  
  @ApiProperty({
    required: true
  })
  @IsNotEmpty()
  zip_code: number;
}