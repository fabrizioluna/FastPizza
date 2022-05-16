import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderServices } from 'src/order/order.services';
import { Order, OrderSchema } from 'src/order/schema/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    OrderServices,
  ],
  providers: [OrderServices, OrderSocketModule],
})
export class OrderSocketModule {}
