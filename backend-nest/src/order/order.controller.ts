import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import {
  OrderDtoCreate,
  OrderDtoDelete,
  OrderDtoGet,
  OrderDtoUpdate,
} from './dto/order.dto';
import { OrderServices } from './order.service';

@Controller('/order')
export class OrderController {
  constructor(private orderServices: OrderServices) {}

  @Post('/create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() body: OrderDtoCreate) {
    return this.orderServices.createOrder(body);
  }

  @Put('/update')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Query('id') id: ObjectId, @Body() body: OrderDtoUpdate) {
    return this.orderServices.updateOrder(id, body);
  }

  @Get('/getorderbybuyer')
  getOrdersByBuyer(@Query('id') buyerId: ObjectId) {
    return this.orderServices.getOrderByUser(buyerId);
  }

  @Get('/getall')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  get(@Query() querys: OrderDtoGet) {
    return this.orderServices.getAll(querys);
  }

  @Get('/getallordersbystatus')
  getAllOrdersNotComplete() {
    return this.orderServices.getAllOrdersByStatus();
  }

  @Get('/getallbydelivery')
  getAllDelivery() {
    return this.orderServices.getAllByStatusDelivery();
  }

  @Get('/get')
  async getOrder(@Query('id') id: ObjectId) {
    return this.orderServices.getOrder(id);
  }

  @Get('/getstadistics')
  async getStadistis(
    @Query('day') day: number,
    @Query('month') month: string,
    @Query('year') year: number,
  ) {
    return this.orderServices.getStadistics(day, month, year);
  }

  @Delete('/delete')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  delete(@Query() query: OrderDtoDelete) {
    return this.orderServices.deleteOrder(query);
  }

  @Get('/get_products_sold')
  // @UsePipes(new ValidationPipe({ whitelist: true }))
  getProductsSold(
    @Query('day') day: string,
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    return this.orderServices.getProductsSold(
      parseInt(day),
      month,
      parseInt(year),
    );
  }
}
