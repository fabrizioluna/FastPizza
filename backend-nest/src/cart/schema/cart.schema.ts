import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CartDoc = Cart & Document;

@Schema()
export class Cart {
  @Prop({
    required: true,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  })
  cart_user: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }] })
  cart_products: string;

  @Prop()
  cart_createdAt: Date;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
