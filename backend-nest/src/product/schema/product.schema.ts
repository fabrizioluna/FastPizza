import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDoc = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  product_name: string;
  
  @Prop({ required: true })
  product_image: string;

  @Prop({ required: true })
  product_description: string;
  
  @Prop({ required: true })
  product_price: number;

  @Prop({ required: true })
  product_discount: number;

  @Prop({ required: true })
  product_createdAt: Date;
  
  @Prop({ required: true })
  product_category: string;
  
}

export const ProductSchema = SchemaFactory.createForClass(Product);