import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriesDoc = Categories & Document;

@Schema()
export class Categories {
  @Prop()
  category_status: boolean;

  @Prop()
  category_name: string;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
