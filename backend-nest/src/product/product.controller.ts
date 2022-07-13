import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { diskStorage } from 'multer';
import { ProductCreateDto, ProductGet } from './dto/product.dto';
import { ProductServices } from './product.service';
import { ProductDoc } from './schema/product.schema';
import { changeFilename } from './utils/changeFilename.utils';

@Controller('/product')
export class ProductController {
  constructor(private productServices: ProductServices) {}

  @Post('/create')
  @UseInterceptors(
    FileInterceptor('product_image', {
      storage: diskStorage({
        destination: './uploads',
        filename: changeFilename,
      }),
    }),
  )
  create(
    @Body() body: ProductCreateDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.productServices.createProduct(body, image.filename);
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
