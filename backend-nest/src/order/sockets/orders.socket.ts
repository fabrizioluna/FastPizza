import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OrderServices } from '../order.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OrderSocket {
  constructor(private orderServices: OrderServices) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('orderChangeKitchen')
  async updateOrders(client, data) {
    await this.orderServices.updateOrder(data._id, data);
    data.hasOwnProperty('order_statusKitchenFinished')
      ? this.sendOrderToDelivery()
      : this.sendAllOrders();
  }

  async sendAllOrders() {
    const getOrdersUpdated = await this.orderServices.getAllOrdersByStatus();
    this.server.emit('orderChangeKitchen', getOrdersUpdated);
  }

  async sendOrderToDelivery() {
    const getDeliverys = await this.orderServices.getAllByStatusDelivery();
    const getOrders = await this.orderServices.getAllOrdersByStatus();
    this.server.emit('orderChangeDelivery', getDeliverys);
    this.server.emit('orderChangeKitchen', getOrders);
  }

  @SubscribeMessage('orderChangeDelivery')
  async updateOrderDelivery(client, data) {
    await this.orderServices.updateOrder(data._id, data);
    const getOrdersUpdated = await this.orderServices.getAllByStatusDelivery();
    this.server.emit('orderChangeDelivery', getOrdersUpdated);
  }

  @SubscribeMessage('sendOrder')
  async sendOrder() {
    const getOrders = await this.orderServices.getAllOrdersByStatus();
    this.server.emit('orderChangeKitchen', getOrders);
  }
}
