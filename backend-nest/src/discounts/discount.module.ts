import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.services';
import { Discount, DiscountSchema } from './schema/discount.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Discount.name, schema: DiscountSchema }]),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
