import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { FormatResponse } from 'src/decorators/FormatResponse/format-response.decorator';
import { OrderDtoCreate, OrderDtoDelete, OrderDtoGet, OrderDtoUpdate } from './dto/order.dto';
import { OrderServices } from './order.services';
import { OrderDoc } from './schema/order.schema';

@Controller('/order')
export class OrderController {
  constructor(private orderServices: OrderServices) {}

  @Post('/create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Query('id') id: ObjectId, @Body() body: OrderDtoCreate) {
    return this.orderServices.createOrder(id, body);
  }

  @Put('/update')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Query('id') id: ObjectId, @Body() body: OrderDtoUpdate) {
    return this.orderServices.updateOrder(id, body);
  }

  @Get('/getall')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  get(@Query() querys: OrderDtoGet) {
    return this.orderServices.getAll(querys);
  }

  @HttpCode(200)
  @Get('/get')
  async getOrder(@Query('id') id: ObjectId) {
    return this.orderServices.getOrder(id);
  }

  @Delete('/delete')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  delete(@Query() query: OrderDtoDelete) {
    return this.orderServices.deleteOrder(query);
  }
}
