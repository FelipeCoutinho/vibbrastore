import { IsNotEmpty } from "class-validator";
import { LocationDto } from "src/commum/enum/location.dto";
export class CreateOfferDto {
  @IsNotEmpty()
  type: offer_type_enum;
  @IsNotEmpty()
  value: number;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  trade_for: string;
  @IsNotEmpty()
  location: LocationDto;
  @IsNotEmpty()
  urgency:JSON;
  @IsNotEmpty()
  photos: string [];
}

