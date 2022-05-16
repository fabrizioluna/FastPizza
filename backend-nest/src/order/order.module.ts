import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order.controller';
import { OrderServices } from './order.services';
import { Order, OrderSchema } from './schema/order.schema';
import { OrderSocket } from './sockets/orders.socket';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  exports: [OrderServices],
  controllers: [OrderController],
  providers: [OrderServices, OrderSocket],
})
export class OrderModule {}
