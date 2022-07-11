import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ProductCreateDto, ProductGet } from './dto/product.dto';
import { ProductServices } from './product.service';
import { ProductDoc } from './schema/product.schema';

@Controller('/product')
export class ProductController {
  constructor(private productServices: ProductServices) {}

  @Post('/create')
  create(@Body() body: ProductCreateDto) {
    return this.productServices.createProduct(body);
  }

  @Get('/getall')
  getAll(@Query() querys: ProductDoc) {
    return this.productServices.getAll(querys);
  }

  @Get('/get/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  get(@Param() params: ProductGet) {
    return this.productServices.get(params);
  }

  @Put('/update')
  updateUser(@Query('id') id: ObjectId, @Body() body: ProductDoc) {
    return this.productServices.update(id, body);
  }

  @Delete('/delete')
  deleteUser(@Query('id') id: ObjectId) {
    return this.productServices.delete(id);
  }
}
