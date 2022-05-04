import { Order } from './order.model';
import { orderTypes } from './order.types';
import { invoiceCodeGenerator } from './order.utils';

export const orderDao = {
  create: (payload: orderTypes) => {
    return new Promise<orderTypes>(async (resolve, reject) => {
      const order = new Order(payload);
      order.order_envoice = invoiceCodeGenerator();
      order.order_status = true;
      order.order_creationDay = new Date();
      return await order
        .save()
        .then((doc: orderTypes) => resolve(doc))
        .catch((err: string) => reject(err));
    });
  },
  get: (id: string) =>
    Order.findById(id)
      .then((order: orderTypes) => order)
      .catch((err: string) => err),
};
