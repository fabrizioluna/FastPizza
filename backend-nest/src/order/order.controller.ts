import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { OrderDtoCreate, OrderDtoDelete, OrderDtoGet, OrderDtoUpdate } from './dto/order.dto';
import { OrderServices } from './order.services';

@Controller('/order')
export class OrderController {
  constructor(private orderServices: OrderServices) {}

  @Post('/create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: OrderDtoCreate) {
    console.log(body)
    return this.orderServices.createOrder(body);
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
