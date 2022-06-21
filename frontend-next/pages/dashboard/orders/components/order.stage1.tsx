import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const OrderStageOne = ({
  orders,
  sendOrders,
}: {
  orders: Order[];
  sendOrders: (client: string, status: boolean) => any;
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
              <span>
                <strong>{order.envoice}</strong>
              </span>
              <p>{order.buyer}</p>
            </section>
          </header>
          <footer>
            <button onClick={() => sendOrders(order._id, true)}>
              Tomar orden ⇒
            </button>
          </footer>
        </article>
      ))}
    </div>
  );
};
