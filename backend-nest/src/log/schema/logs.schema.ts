import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogsDoc = Logs & Document;

@Schema()
export class Logs {
  @Prop()
  log_action: string;

  @Prop()
  log_description: string;

  @Prop()
  log_table: string;

  @Prop()
  log_controller: string;

  @Prop()
  log_timestamps: Date;

  @Prop()
  log_data: string;
}

export const LogsSchema = SchemaFactory.createForClass(Logs);
