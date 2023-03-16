import { LocationDto } from "src/commum/enum/location.dto";

export class CreateNegotiationDto {
  type: negotiation_type_enum;
  value:number;
  description:string;
  trade_for:string;
  location: LocationDto;
  urgency: negotiation_urgency_enum;
  photos: string [];
}
