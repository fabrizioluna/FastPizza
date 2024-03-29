import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { useEffect, useState } from 'react';
import { OrderDetails } from './components/order.details';
import { OrderStageOne } from './components/order.stage1';
import { OrderStageTwo } from './components/order.stage2';
import { io } from 'socket.io-client';
import { DashboardContainer } from '../components/dashboard.container';

export const DashboardOrders = ({ order_data }: { order_data: Order[] }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<Order>();

  const socket = io(`${process.env.NEXT_PUBLIC_URL}`, {
    transports: ['websocket', 'polling'],
  });

  socket.on('orderChangeKitchen', async (ordersUpdated) => {
    const Orders = ordersUpdated.map((order: any) => orderAdapter(order));
    return setOrders(Orders);
  });

  const sendOrdersSocket = (orderId: string, newStatus: boolean) => {
    socket.emit('orderChangeKitchen', {
      _id: orderId,
      order_statusKitchen: newStatus,
    });
  };

  const sendOrderComplete = (orderId: string, newStatus: boolean) => {
    socket.emit('orderChangeKitchen', {
      _id: orderId,
      order_statusKitchenFinished: newStatus,
    });
  };

  const filterOrdersByStatus = (status: boolean) =>
    orders.filter((order) => order.statusKitchen == status);

  useEffect(() => {
    order_data.length > 0 && setOrders(order_data);
  }, []);

  return (
    <main className='dashboardContainers'>
      <DashboardContainer title='Ordenes pendientes'>
        {orders.length > 0 && (
          <OrderStageOne
            orders={filterOrdersByStatus(false)}
            sendOrders={sendOrdersSocket}
          />
        )}
      </DashboardContainer>
      <DashboardContainer title='Ordenes en proceso'>
        {orders.length > 0 && (
          <OrderStageTwo
            orders={filterOrdersByStatus(true)}
            sendOrders={sendOrdersSocket}
            sendDetails={setOrderDetails}
          />
        )}
      </DashboardContainer>
      <DashboardContainer title='Detalle de la orden'>
        <OrderDetails
          details={orderDetails as unknown as Order}
          resetDetails={setOrderDetails}
          sendCompleteOrder={sendOrderComplete}
        />
      </DashboardContainer>
    </main>
  );
};
