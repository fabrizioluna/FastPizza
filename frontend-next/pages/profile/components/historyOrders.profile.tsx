import { Order } from 'pages/dashboard/adapters/order.adapter';

export const HistoryOrders = ({ orders }: { orders: Order[] }) => {
  return (
    <div>
      {orders.map((order: Order) => (
        <div className='profileOrders'>
          <section>
            <p>{order.envoice}</p>
            <h2>{`${order.creationDay} ${order.creationMonth} del ${order.creationYear}`}</h2>
          </section>
          <p>Entregando para: {order.buyer}</p>
          <p>Dirección: {order.addressClient}</p>
          <p>Total: ${order.totalAmount}</p>
          <p>Estado actual: {order.status ? 'Entregado' : 'Entregandose'}</p>
        </div>
      ))}
    </div>
  );
};
