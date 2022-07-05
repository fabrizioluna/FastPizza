import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const DeliveryStageOne = ({
  deliverys,
  sendDeliverys,
}: {
  deliverys: Order[];
  sendDeliverys: (client: string, status: boolean, orderStatus: boolean) => any;
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
          <button onClick={() => sendDeliverys(delivery._id, true, false)}>Tomar entrega</button>
        </footer>
      </article>)}
    </Fragment>
  );
};
