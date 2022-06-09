import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatisticsDoc = Statistics & Document;

@Schema()
export class Statistics {
  @Prop()
  statistics_totalOrders: number;
  
  @Prop()
  statistics_totalAmount: number;
  
  @Prop()
  statistics_totalEarned: number;

  @Prop()
  statistics_collectionDay: number;

  @Prop()
  statistics_collectionYear: number;
  
  @Prop()
  statistics_collectionMonth: string;
  
  @Prop()
  statistics_completeDate: string;
  
  @Prop()
  statistics_lastUpdate: number;

  @Prop()
  statistics_soldProducts: [{ product_id: string; totalSells: number }];

}

export const StatisticsSchema = SchemaFactory.createForClass(Statistics);
