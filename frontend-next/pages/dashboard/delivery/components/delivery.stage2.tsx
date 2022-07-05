import { Order } from 'pages/dashboard/adapters/order.adapter';
import { Fragment, useState } from 'react';
import { ModalDelivery } from './dashboard.modal';

export const initialPropsOrder = {
  _id: '',
  addressClient: '',
  buyer: '',
  creationDay: 0,
  creationMonth: '',
  creationYear: 0,
  discountApplied: 0,
  discountCode: 0,
  envoice: '',
  products: [],
  status: false,
  statusDelivery: false,
  statusKitchen: false,
  statusKitchenFinished: false,
  totalAmount: 0,
};

export const DeliveryStageTwo = ({
  deliverys,
  sendDeliverys,
}: {
  deliverys: Order[];
  sendDeliverys: (client: string, status: boolean, statusOrder: boolean) => any;
}) => {
  const [orderSelect, setOrderSelect] = useState<Order>(initialPropsOrder);

  return (
    <Fragment>
      {orderSelect.envoice.length >= 1 && (
        <ModalDelivery
          orderSelect={orderSelect}
          setOrderSelect={setOrderSelect}
          sendDeliverys={sendDeliverys}
        />
      )}
      {deliverys.map((delivery: Order, index: number) => (
        <article key={index}>
          <header>
            <span>{delivery.envoice}</span>
            <p>{delivery.buyer}</p>
          </header>
          <div>
            <p>{delivery.addressClient}</p>
          </div>
          <footer>
            <button onClick={() => setOrderSelect(delivery)}>
              Ver detalles
            </button>
          </footer>
        </article>
      ))}
    </Fragment>
  );
};
