import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const DeliveryStageTwo = ({
    deliverys,
    sendDeliverys,
  }: {
    deliverys: Order[];
    sendDeliverys: (client: string, status: boolean) => any;
  }) => {
  return (
    <Fragment>
      {deliverys.map((delivery: Order, index: number) => <article key={index}>
        <header>
          <span>{delivery.envoice}</span>
          <p>{delivery.buyer}</p>
        </header>
        <div>
          <p>{delivery.addressClient}</p>
        </div>
        <footer>
          <button>Ver detalles</button>
        </footer>
      </article>)}
    </Fragment>
  );
};
