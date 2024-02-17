import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePetDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  img: string;
  @IsNumber()
  lng: number;
  @IsNumber()
  lat: number;
}
