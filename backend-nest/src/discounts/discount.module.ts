import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { LogsService } from 'src/log/logs.service';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { AddCronDiscount } from './cron/discount.cron';
import { DiscountController } from './discount.controller';
import { DiscountLog } from './discount.log';
import { DiscountService } from './discount.service';
import { Discount, DiscountSchema } from './schema/discount.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Discount.name, schema: DiscountSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
    ScheduleModule.forRoot(),
  ],
  controllers: [DiscountController],
  providers: [DiscountService, AddCronDiscount, LogsService, DiscountLog],
})
export class DiscountModule {}
