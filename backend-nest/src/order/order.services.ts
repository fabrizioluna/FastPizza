import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import { CustomResponse } from 'src/utils/responses/custom-success/success.response';
import {
  OrderDtoCreate,
  OrderDtoDelete,
  OrderDtoGet,
  OrderDtoUpdate,
} from './dto/order.dto';
import { Order, OrderDoc } from './schema/order.schema';
import { makeInvoice } from './utils/makeEnvoice';

@Injectable()
export class OrderServices {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDoc>) {}

  async createOrder(id: ObjectId, props: OrderDtoCreate) {
    try {
      let newOrder = await this.orderModel.create({
        order_envoice: makeInvoice(),
        order_status: false,
        order_creationDay: new Date(),
        order_discountCode: props.order_discountCode,
        order_discountApplied: props.order_discountApplied,
        order_addressClient: props.order_addressClient,
        order_buyer: id,
        order_products: props.order_products,
      });

      return CustomResponse.success(
        'This order has been create',
        await newOrder.populate('order_products'),
      );
    } catch (err) {
      throw new CustomException('Something has been wrong', err);
    }
  }

  updateOrder(id: ObjectId, props: OrderDtoUpdate) {
    return this.orderModel
      .findByIdAndUpdate(id, props, { new: true })
      .then((order) =>
        CustomResponse.success('The order has been modified', order),
      )
      .catch((err) => new CustomException('Something has been wrong', err));
  }

  deleteOrder(query: OrderDtoDelete) {
    return this.orderModel.findByIdAndDelete(query.id);
  }

  getOrder(id: ObjectId) {
    return this.orderModel.findById(id).populate('order_products');
  }

  async getAll(querys: OrderDtoGet) {
    return await this.orderModel
      .find()
      .limit(querys.hasOwnProperty('limit') ? querys.limit : 0)
      .sort({
        order_creationDay: querys.type.toLocaleLowerCase() === 'asc' ? 1 : -1,
      })
      .populate('order_products');
  }
}
