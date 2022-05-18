import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { DeliveryStageOne } from './delivery.stage1';
import { DeliveryStageTwo } from './delivery.stage2';

export const DashboardDelivery = ({
  delivery_data,
}: {
  delivery_data: Order[];
}) => {
  const [deliverys, setDeliverys] = useState<Order[]>([]);
  const [orderDetails, setOrderDetails] = useState<Order>();

  const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling'],
  });

  socket.on('orderChangeDelivery', async (ordersUpdated) => {
    const Deliverys = ordersUpdated.map((delivery: any) =>
      orderAdapter(delivery)
    );
    return setDeliverys(Deliverys);
  });

  const sendDeliverySocket = (orderId: string, newStatus: boolean) => {
    socket.emit('orderChangeDelivery', {
      _id: orderId,
      order_statusDelivery: newStatus,
    });
  };

  const filterDeliverysByStatus = (status: boolean) =>
    deliverys.filter((delivery: Order) => delivery.statusDelivery == status);

  useEffect(() => {
    delivery_data.length > 0 && setDeliverys(delivery_data);
  }, []);

  return (
    <main className='dashboardDeliverySections'>
      <section>
        <h2>Entregas pendientes</h2>
        {deliverys.length > 0 && (
          <DeliveryStageOne
            deliverys={filterDeliverysByStatus(false)}
            sendDeliverys={sendDeliverySocket}
          />
        )}
      </section>
      <div>
        <h2>Proceso de entregas</h2>
        <article>
          <FontAwesomeIcon icon={faTruck} />
        </article>
      </div>
      <section>
        <h2>Entregas en curso</h2>
        {deliverys.length > 0 && (
          <DeliveryStageTwo
            deliverys={filterDeliverysByStatus(true)}
            sendDeliverys={sendDeliverySocket}
          />
        )}
      </section>
    </main>
  );
};
