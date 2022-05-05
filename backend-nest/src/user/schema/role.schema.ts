import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDoc = Role & Document;

@Schema()
export class Role {
  @Prop()
  role_id: number;

  @Prop()
  role_name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);