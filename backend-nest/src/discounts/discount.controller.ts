import {
  Body,
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { DiscountService } from './discount.services';
import { DiscountDoc } from './schema/discount.schema';

@Controller('/discount')
export class DiscountController {
  constructor(private discountServices: DiscountService) {}

  @Post('/create')
  createDiscount(@Body() discount: DiscountDoc) {
    return this.discountServices.create(discount);
  }

  @Get('/getall')
  getAllDiscounts() {
    return this.discountServices.getAll();
  }

  @Get('/get')
  getDiscount(@Query('id') discountId: ObjectId) {
    return this.discountServices.get(discountId);
  }

  @Get('/getbyname')
  getDiscountByName(@Query('name') getByName: string) {
    return this.discountServices.getByName(getByName);
  }

  @Put('/update')
  updateDiscount(@Query('id') discountId, @Body() discountObject) {
    return this.discountServices.update(discountId, discountObject);
  }

  @Delete('/delete')
  deleteDiscount(@Query('id') discountId) {
    return this.discountServices.delete(discountId);
  }
}
