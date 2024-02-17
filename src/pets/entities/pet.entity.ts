import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pet {
  @Prop({ type: String })
  name: string;
  @Prop({ type: String })
  img: string;
  @Prop({ type: Number })
  lng: number;
  @Prop({ type: Number })
  lat: number;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
