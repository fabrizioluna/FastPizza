import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ProductCreateDto, ProductGet } from './dto/product.dto';
import { Product, ProductDoc } from './schema/product.schema';

@Injectable()
export class ProductServices {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDoc>,
  ) {}

  createProduct(productObject: ProductCreateDto) {
    const Product = { ...productObject, product_createdAt: new Date() };
    return this.productModel.create(Product);
  }

  async getAll(productQuerys) {
    return productQuerys.hasOwnProperty('category')
      ? await this.productModel
          .find({ product_category: productQuerys.category })
          .limit(
            productQuerys.hasOwnProperty('limit') ? productQuerys.limit : 0,
          )
      : await this.productModel
          .find()
          .limit(
            productQuerys.hasOwnProperty('limit') ? productQuerys.limit : 0,
          );
  }

  get(productId: ProductGet) {
    return this.productModel.findById(productId.id);
  }

  update(productId: ObjectId, productObject: ProductDoc) {
    return this.productModel.findByIdAndUpdate(productId, productObject, {
      new: true,
    });
  }

  delete(productId: ObjectId) {
    return this.productModel.findByIdAndDelete(productId);
  }
}
