import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment, useEffect } from 'react';

export const OrderStageOne = ({
  orders,
  sendOrders,
}: {
  orders: Order[];
  sendOrders: (client: string, status: boolean) => any;
}) => {
  return (
    <Fragment>
      {orders.map((order, index: number) => (
        <article key={index}>
          <header>
            <span>
              <strong>{order.envoice}</strong>
            </span>
            <main>
              <p>${order.totalAmount}</p>
            </main>
            {/* TODO: Agregar el nombre del cliente */}
          </header>
          <footer>
            <button
              onClick={() => sendOrders(order._id, true)}
            >
              Tomar orden
            </button>
          </footer>
        </article>
      ))}
    </Fragment>
  );
};
