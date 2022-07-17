import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDoc = User & Document;

@Schema()
export class User {
  @Prop()
  user_name: string;

  @Prop()
  user_email: string;

  @Prop()
  user_password: string;

  @Prop()
  user_address: string;

  @Prop()
  user_hasInitialDiscount: boolean;

  @Prop()
  user_verifiedEmail: string;

  @Prop()
  user_imageProfile: string;

  // @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'role' } })
  // user_role: string;

  @Prop()
  user_createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);