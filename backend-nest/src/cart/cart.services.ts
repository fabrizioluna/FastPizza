import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import {
  CustomResponse,
  ResponseHttp,
} from 'src/utils/responses/custom-success/success.response';
import { Cart, CartDoc } from './schema/cart.schema';

@Injectable()
export class CartServices {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDoc>) {}

  async createCart(props: CartDoc): Promise<ResponseHttp> {
    try {
      const newCart = await this.cartModel.create({
        cart_user: props.cart_user,
        cart_products: props.cart_products,
        cart_createdAt: new Date(),
      });
      return CustomResponse.success('This cart has been create', newCart);
    } catch (err) {
      throw new CustomException('Something has been wrong', err);
    }
  }

  clearCart(id: ObjectId): Promise<ResponseHttp> {
    return this.cartModel
      .findByIdAndUpdate(id, { cart_products: [] }, { new: true })
      .then(() => CustomResponse.success('This cart has been clean', null))
      .catch(
        (err) =>
          new CustomException(
            'Something has been wrong',
            err,
          ) as unknown as ResponseHttp,
      );
  }

  getCart(id: ObjectId): Promise<ResponseHttp> {
    return this.cartModel
      .findById(id)
      .then((cart) => CustomResponse.success('Cart of this user', cart))
      .catch(
        (err) =>
          new CustomException(
            'Something has been wrong',
            err,
          ) as unknown as ResponseHttp,
      );
  }

  async updateCart(id: ObjectId, props: Array<string>): Promise<ResponseHttp> {
    try {
        console.log(id, props)
      const cart = await this.cartModel.findById(id);
      props.map(
        (product) => (cart.cart_products = [...cart.cart_products, product]),
      );
      await cart.save();

      return CustomResponse.success('The cart items has been modified', cart);
    } catch (err) {
      throw new CustomException('Something has been wrong', err);
    }
  }
}
