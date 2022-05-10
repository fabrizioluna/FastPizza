import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CartServices } from './cart.services';
import { CartDoc } from './schema/cart.schema';

@Controller('/cart')
export class CartController {
  constructor(private cartServices: CartServices) {}

  @Post('/create')
  create(@Body() body: CartDoc) {
    return this.cartServices.createCart(body);
  }

  @Get('/get')
  get(@Query('id') id: ObjectId) {
      return this.cartServices.getCart(id);
  }

  @Put('/update')
  update(@Query('id') id: ObjectId, @Body('cart_products') body: Array<string>) {
      return this.cartServices.updateCart(id, body);
  }

  @Put('/clear')
  clear(@Query('id') id: ObjectId){
      return this.cartServices.clearCart(id);
  }

}
