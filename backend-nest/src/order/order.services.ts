import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
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

  createOrder(orderObject: OrderDtoCreate) {
    console.log('En el servicio',orderObject)
    const Order = {
      ...orderObject,
      order_envoice: makeInvoice(),
      order_creationDay: new Date(),
      order_products: orderObject.order_products,
      order_status: false,
    };
    return this.orderModel.create(Order);
  }

  updateOrder(clientId: ObjectId, orderObject: OrderDtoUpdate) {
    return this.orderModel.findByIdAndUpdate(clientId, orderObject, {
      new: true,
    });
  }

  deleteOrder(orderId: OrderDtoDelete) {
    return this.orderModel.findByIdAndDelete(orderId.id);
  }

  getOrder(orderId: ObjectId) {
    return this.orderModel.findById(orderId).populate('order_products');
  }

  getAll(orderQuery: OrderDtoGet) {
    return this.orderModel
      .find()
      .limit(orderQuery.hasOwnProperty('limit') ? orderQuery.limit : 0)
      .sort({
        order_creationDay:
          orderQuery.type.toLocaleLowerCase() === 'asc' ? 1 : -1,
      })
      .populate('order_products');
  }
}
