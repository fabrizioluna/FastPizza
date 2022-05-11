import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import { CustomResponse } from 'src/utils/responses/custom-success/success.response';
import { ProductCreateDto, ProductGet } from './dto/product.dto';
import { Product, ProductDoc } from './schema/product.schema';

@Injectable()
export class ProductServices {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDoc>,
  ) {}

  async createProduct(product: ProductCreateDto): Promise<CustomResponse> {
    try {
      const newProduct: ProductCreateDto = await this.productModel.create({
        product_name: product.product_name,
        product_description: product.product_description,
        product_price: product.product_price,
        product_discount: product.product_discount,
        product_category: product.product_category,
        product_createdAt: new Date(),
        product_image: product.product_image
      });

      return CustomResponse.success(
        'This product has been create.',
        newProduct,
      );
    } catch (err) {
      throw new CustomException('Something was wrong', err);
    }
  }

  async getAll(querys) {
    return querys.hasOwnProperty('category')
      ? await this.productModel
          .find({ product_category: querys.category })
          .limit(querys.hasOwnProperty('limit') ? querys.limit : 0)
      : await this.productModel
          .find()
          .limit(querys.hasOwnProperty('limit') ? querys.limit : 0);
  }

  get(param: ProductGet): Promise<CustomResponse | CustomException> {
    return this.productModel
      .findById(param.id)
      .then((product) => CustomResponse.success('Product information', product))
      .catch((err) => new CustomException('Something has been wrong', err));
  }

  update(id: ObjectId, props: ProductDoc) {
    return this.productModel
      .findByIdAndUpdate(id, props, { new: true })
      .then((user) =>
        CustomResponse.success('This product has been update.', user),
      )
      .catch((err) => new CustomException('Something has been wrong', err));
  }

  delete(id: ObjectId) {
    return this.productModel
      .findByIdAndDelete(id)
      .then(() => CustomResponse.success('This product has been delete', null))
      .catch((err) => new CustomException('Something has been wrong', err));
  }
}
