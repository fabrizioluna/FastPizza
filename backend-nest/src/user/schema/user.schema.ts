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
  user_adress: string;

  @Prop()
  user_hasInitialDiscount: boolean;

  @Prop()
  user_verifiedEmail: string;

  @Prop()
  user_imageProfile: string;

//   @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'roles' } })
//   user_role: string;

//   @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'cart' } })
//   user_cart: string;

  @Prop()
  user_createdAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);