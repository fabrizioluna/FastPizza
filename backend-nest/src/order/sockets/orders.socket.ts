import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OrderServices } from '../order.services';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OrderSocket {
  constructor(private orderServices: OrderServices) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('ordersUpdate')
  async updateOrders(client, data) {
    console.log('La data que recibe el backend', data);
    await this.orderServices.updateOrder(data._id, {
      order_status: data.order_status,
    } as any);
    const getOrdersUpdated = await this.orderServices.getAll({ type: 'asc' });
    this.server.emit('ordersUpdate', getOrdersUpdated);
  }
}
