import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ProductCreateDto, ProductGet } from './dto/product.dto';
import { ProductLog } from './product.log';
import { Product, ProductDoc } from './schema/product.schema';

@Injectable()
export class ProductServices {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDoc>,
    private productLog: ProductLog,
  ) {}

  createProduct(productObject: ProductCreateDto) {
    const Product = { ...productObject, product_createdAt: new Date() };

    this.productLog.triggerLog(
      'INSERT',
      `Se creo una producto con el nombre ${Product.product_name}`,
      Product,
    );

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

  async update(productId: ObjectId, productObject: ProductDoc) {
    const Product = await this.productModel.findByIdAndUpdate(productId, productObject, {
      new: true,
    });

    this.productLog.triggerLog(
      'UPDATE',
      `Se actualizo el producto ${Product.product_name}`,
      Product,
    );

    return Product;
  }

  async delete(productId: ObjectId) {
    const Product = await this.productModel.findByIdAndDelete(productId);

    this.productLog.triggerLog(
      'DELETE',
      `Se se elimino el producto ${Product.product_name}`,
      Product,
    );

    return Product;
  }
}