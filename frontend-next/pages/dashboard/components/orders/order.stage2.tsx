import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const OrderStageTwo = ({
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
            {/* <p>{order.}</p> */}
            <span>{order.creationDay.toString()}</span>
          </header>
          <footer>
            <button>Ver detalles</button>
          </footer>
        </article>
      ))}
    </Fragment>
  );
};
