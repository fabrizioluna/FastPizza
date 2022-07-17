import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Categories, CategoriesDoc } from './schema/categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name) private categoriesModel: Model<CategoriesDoc>,
  ) {}

  create(categoryObject: CategoriesDoc) {
    return this.categoriesModel.create({
      category_name: categoryObject,
      category_status: true,
    });
  }

  update(category: ObjectId, categoryObject: CategoriesDoc) {
    return this.categoriesModel.findByIdAndUpdate(
      category,
      {
        category_name: categoryObject,
        category_status: true,
      },
      { new: true },
    );
  }

  getAll() {
    return this.categoriesModel.find();
  }

  delete(category: ObjectId) {
    return this.categoriesModel.findByIdAndDelete(category);
  }
}
