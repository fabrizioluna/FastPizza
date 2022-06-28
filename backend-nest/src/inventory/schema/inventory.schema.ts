import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDoc = Inventory & Document;

@Schema()
export class Inventory {
  @Prop()
  inventory_uniqueNum: string;

  @Prop()
  inventory_name: string;
  
  @Prop()
  inventory_provider: string;
  
  @Prop()
  inventory_pieces: number;

}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
