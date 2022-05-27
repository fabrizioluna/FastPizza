import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { AddCronDiscount } from './cron/discount.cron';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.services';
import { Discount, DiscountSchema } from './schema/discount.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Discount.name, schema: DiscountSchema }]),
    ScheduleModule.forRoot(),
  ],
  controllers: [DiscountController],
  providers: [DiscountService, AddCronDiscount],
})
export class DiscountModule {}
