import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';

export type OrderDoc = Order & Document;

@Schema()
export class Order {
  @Prop()
  order_envoice: string;

  @Prop()
  order_status: boolean;

  @Prop()
  order_creationDay: Date;

  @Prop()
  order_deliveryDay: Date;

  @Prop()
  order_timeFinish: Date;

  @Prop()
  order_discountCode: number;

  @Prop()
  order_discountApplied: number;

  @Prop({ required: true })
  order_addressClient: string;
  
  @Prop({ required: true })
  order_totalAmount: number;

  //   @Prop()
  //   order_methodPay: string;

  @Prop({
    // required: true,
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  })
  order_buyer: string;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'employee' },
  })
  order_employeeDelivery: ObjectId;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'employee' },
  })
  order_employeeCreation: ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  order_products: Array<mongoose.Types.ObjectId>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
