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
  order_statusDelivery: boolean;
  
  @Prop()
  order_statusKitchen: boolean;
  
  @Prop()
  order_statusKitchenFinished: boolean;

  @Prop()
  order_creationDay: string;

  @Prop()
  order_creationDayNow: number;

  @Prop()
  order_deliveryDay: string;

  @Prop()
  order_timeFinish: string;

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
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  })
  order_buyer: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  })
  order_employeeDelivery: mongoose.Types.ObjectId;

  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  })
  order_employeeCreation: mongoose.Types.ObjectId;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  order_products: Array<mongoose.Types.ObjectId>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
