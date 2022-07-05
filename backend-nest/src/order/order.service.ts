import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  OrderDtoCreate,
  OrderDtoDelete,
  OrderDtoGet,
  OrderDtoUpdate,
} from './dto/order.dto';
import { OrderLog } from './order.log';
import { Order, OrderDoc } from './schema/order.schema';
import { defaultMonths, defaultYears } from './utils/defaultPropsStadistics';
import { formatMonth, formatTime } from './utils/formatdate.utils';
import { makeInvoice } from './utils/makeEnvoice';

@Injectable()
export class OrderServices {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDoc>,
    private orderLog: OrderLog,
  ) {}

  createOrder(orderObject: OrderDtoCreate) {
    const getDate = new Date();
    const Order = {
      ...orderObject,
      order_envoice: makeInvoice(),
      order_creationDay: getDate.getDate(),
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
    this.orderLog.triggerLog(
      'INSERT',
      `Se creo una nueva order con el folio ${Order.order_envoice}`,
      Order,
    );
    return this.orderModel.create(Order);
  }

  async updateOrder(clientId: ObjectId, orderObject: OrderDtoUpdate) {
    const Order = await this.orderModel.findByIdAndUpdate(
      clientId,
      orderObject,
      {
        new: true,
      },
    );

    this.orderLog.triggerLog(
      'UPDATE',
      `Se actualizo la orden con el folio ${Order.order_envoice}`,
      Order,
    );

    return Order;
  }

  async deleteOrder(orderId: OrderDtoDelete) {
    const Order = await this.orderModel.findByIdAndDelete(orderId.id);

    this.orderLog.triggerLog(
      'DELETE',
      `Se elimino la order con el folio ${Order.order_envoice}`,
      Order,
    );

    return Order;
  }

  getOrder(orderId: ObjectId) {
    return this.orderModel
      .findById(orderId)
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }

  getOrderByUser(buyerId: ObjectId) {
    return this.orderModel
      .find()
      .where('order_buyer')
      .equals(buyerId)
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
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
      .where('order_status')
      .equals(false)
      .populate({ path: 'order_products' })
      .populate({ path: 'order_buyer', select: 'user_name' });
  }

  getProductsSold(day: number, month: string, year: number) {
    return this.orderModel.aggregate([
      {
        $match: {
          order_creationDay: day,
          order_creationMonth: month,
          order_creationYear: year,
        },
      },
      {
        $lookup: {
          from: 'products',
          localField: 'order_products',
          foreignField: '_id',
          as: 'order_products',
        },
      },
      {
        $group: {
          _id: '$order_products',
        },
      },
      {
        $project: {
          _id: 0,
          children: {
            $concatArrays: ['$_id'],
          },
        },
      },
      {
        $unwind: '$children',
      },
      {
        $group: {
          _id: '$children.product_name',
          totalSells: {
            $sum: 1,
          },
          products: {
            $push: {
              product: '$_id',
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          product_id: '$_id',
          totalSells: '$totalSells',
        },
      },
    ]);
  }
}
