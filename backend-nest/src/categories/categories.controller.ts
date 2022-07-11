import { Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CategoriesService } from './categories.service';
import { CategoriesDoc } from './schema/categories.schema';

@Controller('/categories')
export class CategoriesController {
  constructor(private categoriesServices: CategoriesService) {}

  @Post('/create')
  create(@Query('name') categoryObject: CategoriesDoc) {
    return this.categoriesServices.create(categoryObject);
  }

  @Post('/update')
  update(
    @Query('id') category: ObjectId,
    @Query('name') categoryObject: CategoriesDoc,
  ) {
    return this.categoriesServices.update(category, categoryObject);
  }

  @Get('/getall')
  getAll() {
    return this.categoriesServices.getAll();
  }

  @Delete('/delete')
  delete(@Query('id') category: ObjectId) {
    return this.categoriesServices.delete(category);
  }
}
