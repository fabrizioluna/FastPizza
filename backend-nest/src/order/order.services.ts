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
import { defaultMonths, defaultYears } from './utils/defaultPropsStadistics';
import { formatMonth, formatTime } from './utils/formatdate.utils';
import { makeInvoice } from './utils/makeEnvoice';

@Injectable()
export class OrderServices {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDoc>) {}

  createOrder(orderObject: OrderDtoCreate) {
    const getDate = new Date();
    const Order = {
      ...orderObject,
      order_envoice: makeInvoice(),
      order_creationDay: getDate.getDay(),
      order_creationMonth: formatMonth(),
      order_creationYear: getDate.getFullYear(),
      order_creationTime: formatTime(),
      order_creationDayNow: Date.now(),
      order_products: orderObject.order_products,
      order_status: false,
      order_statusDelivery: false,
      order_statusKitchen: false,
      order_statusKitchenFinished: false,
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
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }

  getAllOrdersByStatus() {
    return this.orderModel
      .find()
      .where('order_statusKitchenFinished')
      .equals(false)
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }

  getStadistics(day: number = 0, month: string = 'empty', year: number = 0) {
    return this.orderModel
      .find()
      .where('order_statusKitchenFinished')
      .equals(true)
      .where('order_creationDay')
      .equals(day > 0 && day)
      .where('order_creationMonth')
      .equals(month !== 'empty' ? month : defaultMonths)
      .where('order_creationYear')
      .equals(year > 0 ? year : defaultYears())
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }

  getAllByStatusDelivery() {
    return this.orderModel
      .find()
      .where('order_statusKitchenFinished')
      .equals(true)
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }
}
