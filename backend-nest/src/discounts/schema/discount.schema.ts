import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiscountDoc = Discount & Document;

@Schema()
export class Discount {
  @Prop()
  discount_status: boolean;

  @Prop()
  discount_specialKey: string;
  
  @Prop()
  discount_percentage: number;

  @Prop()
  discount_limitToApply: number;

  @Prop()
  discount_priceFloor: number;

  @Prop()
  discount_expiresIn: string;

}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
