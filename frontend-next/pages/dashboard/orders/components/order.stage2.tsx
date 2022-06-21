import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const OrderStageTwo = ({
  orders,
  sendOrders,
  sendDetails,
}: {
  orders: Order[];
  sendOrders: (client: string, status: boolean) => any;
  sendDetails: (set: Order) => void;
}) => {
  return (
    <div className='dashboardOrder'>
      {orders.map((order, index: number) => (
        <article key={index}>
          <header>
            <main>
              Total orden
              <p>${order.totalAmount}</p>
            </main>
            <section>
              <span>{order.envoice}</span>
            <p>{order.buyer}</p>
            </section>
          </header>
          <footer>
            <button onClick={() => sendDetails(order)}>Ver detalles</button>
          </footer>
        </article>
      ))}
    </div>
  );
};
