import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from 'src/log/logs.service';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { Statistics, StatisticsSchema } from 'src/statistics/schema/statistics.schema';
// import { StatisticsService } from 'src/statistics/statistics.service';
import { OrderController } from './order.controller';
import { OrderLog } from './order.log';
import { OrderServices } from './order.service';
import { Order, OrderSchema } from './schema/order.schema';
import { OrderSocket } from './sockets/orders.socket';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
    MongooseModule.forFeature([{ name: Statistics.name, schema: StatisticsSchema }]),
  ],
  exports: [OrderServices],
  controllers: [OrderController],
  providers: [OrderServices, OrderSocket, LogsService, OrderLog],
})
export class OrderModule {}
