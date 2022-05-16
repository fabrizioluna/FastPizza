import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { Fragment, useEffect, useState } from 'react';
import { OrderDetails } from './order.details';
import { OrderStageOne } from './order.stage1';
import { OrderStageTwo } from './order.stage2';
import { io } from 'socket.io-client';

export const DashboardOrders = ({ order_data }: { order_data: Order[] }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling'],
  });

  socket.on('ordersUpdate', async (ordersUpdated) => {
    const Orders = ordersUpdated.map((order: any) => orderAdapter(order));
    return setOrders(Orders);
  });

  const sendOrdersSocket = (orderId: string, newStatus: boolean) => {
    socket.emit('ordersUpdate', {
      _id: orderId,
      order_status: newStatus,
    });
  };

  const filterOrdersByStatus = (status: boolean) =>
    orders.filter((order) => order.status == status);

  useEffect(() => {
    order_data.length > 0 && setOrders(order_data);
  }, []);

  return (
    <Fragment>
      <header>
        <span>Lista de las ordenes en tiempo real.</span>
      </header>
      <div className='dashboardOrderCook'>
        <section>
          <h2>Ordenes pendientes</h2>
          {orders.length > 0 && (
            <OrderStageOne
              orders={filterOrdersByStatus(false)}
              sendOrders={sendOrdersSocket}
            />
          )}
        </section>
        <section>
          <h3>Ordenes en proceso</h3>
          {orders.length > 0 && (
            <OrderStageTwo
              orders={filterOrdersByStatus(true)}
              sendOrders={sendOrdersSocket}
            />
          )}
        </section>
        <aside>
          <h3>Detalle de la orden</h3>
          <OrderDetails />
        </aside>
      </div>
    </Fragment>
  );
};
