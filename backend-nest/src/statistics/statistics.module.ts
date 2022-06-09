import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { OrderLog } from 'src/order/order.log';
import { LogsService } from 'src/log/logs.service';
import { OrderServices } from 'src/order/order.service';
import { Order, OrderSchema } from 'src/order/schema/order.schema';
import { StatisticsCron } from './cron/statistics.cron';
import { Statistics, StatisticsSchema } from './schema/statistics.schema';
import { StatisticsService } from './statistics.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Statistics.name, schema: StatisticsSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
  ],
  exports: [StatisticsService],
  providers: [StatisticsService, StatisticsCron, LogsService, OrderServices, OrderLog],
})
export class StatisticsModule {}
