import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { Fragment, useEffect, useState } from 'react';
import { OrderDetails } from './order.details';
import { OrderStageOne } from './order.stage1';
import { OrderStageTwo } from './order.stage2';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';

export const DashboardOrders = ({ order_data }: { order_data: Order[] }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<Order>();

  const socket = io('http://localhost:4000', {
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
    <Fragment>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faKitchenSet} />
        </div>
        <main>
          <span>Ordenes entrantes</span>
          <p>Lista de todas las ordenes para gestionar.</p>
        </main>
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
          {/* <footer>
            <header>
              <span>{filterOrdersByStatus(false).length}</span>
            </header>
            <div>
              <h4>Ordenes totales</h4>
              <p>Ordenes totales pendientes</p>
            </div>
          </footer> */}
        </section>
        <section>
          <h2>Ordenes en proceso</h2>
          {orders.length > 0 && (
            <OrderStageTwo
              orders={filterOrdersByStatus(true)}
              sendOrders={sendOrdersSocket}
              sendDetails={setOrderDetails}
            />
          )}
          {/* <footer>
            <header>
              <span>{filterOrdersByStatus(true).length}</span>
            </header>
            <div>
              <h4>Ordenes totales</h4>
              <p>Ordenes totales en proceso</p>
            </div>
          </footer> */}
        </section>
        <aside>
          <h3>Detalle de la orden</h3>
          <OrderDetails
            details={orderDetails as unknown as Order}
            resetDetails={setOrderDetails}
            sendCompleteOrder={sendOrderComplete}
          />
        </aside>
      </div>
    </Fragment>
  );
};
