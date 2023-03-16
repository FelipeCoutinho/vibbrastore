import { IsNotEmpty } from 'class-validator';

export class LocationDto {
  @IsNotEmpty()
  lat:number;
  @IsNotEmpty()
  lng:number;
  @IsNotEmpty()
  address:string;
  @IsNotEmpty()
  city:string;
  @IsNotEmpty()
  state:string;
  @IsNotEmpty()
  zip_code:number;
}


