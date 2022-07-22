import { PageHead } from '@/components/pageHead/pageHead.component';
import {
  faCalendarCheck,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Order, OrderProduct } from 'pages/dashboard/adapters/order.adapter';
import { useMemo } from 'react';
import { ProgressStatusOrder } from './progressBar.orderStatus';

export const OrderDetailClient = ({ orderObject }: { orderObject: Order }) => {
    
  const porcentageBar = useMemo(() => {
    let porcentage: any = { porcentage: 0 };
    const { statusDelivery, statusKitchen, statusKitchenFinished, status } =
      orderObject;
    if (!statusDelivery && !statusKitchen && !statusKitchenFinished && !status)
      return (porcentage = { porcentage: 0 });
    else if (
      !statusDelivery &&
      statusKitchen &&
      !statusKitchenFinished &&
      !status
    )
      return (porcentage = { porcentage: 35 });
    else if (
      !statusDelivery ||
      statusDelivery &&
      statusKitchen &&
      statusKitchenFinished &&
      !status
    )
      return (porcentage = { porcentage: 65 });
    else if (
      statusDelivery &&
      statusKitchen &&
      statusKitchenFinished &&
      status
    )
      return (porcentage = { porcentage: 100 });

    return (porcentage = { porcentage: 0 });
  }, []);

  return (
    <div className='showOrderClient'>
      <PageHead titlePage={`Estado de orden ${orderObject.envoice}`} />
      <header>
        <h1>¡Tu orden está siendo atendida!</h1>
        <p>Tu orden está en proceso...</p>
      </header>
      <article>
        <ProgressStatusOrder porcentage={porcentageBar.porcentage} />
      </article>
      <footer>
        <section>
          <h2>Detalles de entrega</h2>
          <h4>Número de orden {orderObject.envoice}</h4>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Orden realizada 25 Julio
            del 2022.
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarCheck} />{' '}
            {orderObject.addressClient}
          </p>
        </section>
        <section>
          <h2>Detalle de la orden</h2>
          {orderObject.products.map((product: OrderProduct, index: number) => (
            <div key={index}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <section>
                <p>{product.name}</p>
                <span>Cantidad 1</span>
              </section>
            </div>
          ))}
        </section>
      </footer>
    </div>
  );
};
