import { Order, OrderProduct } from 'pages/dashboard/adapters/order.adapter';
import { Fragment } from 'react';

export const OrderDetails = ({ details }: { details: Order }) => {
  console.log(details);
  return (
    <Fragment>
      {details !== undefined ? (
        <section>
          <main>
            <header>
              <p>{details.envoice}</p>
              <p>Cliente {details.buyer}</p>
              <p>{details.addressClient}</p>
            </header>
            <article>
              {details.products.map((product: OrderProduct, index: number) => (
                <section key={index}>
                  <figure>
                    <img src={product.image} alt={product.name} />
                  </figure>
                  <p>{product.name}</p>
                </section>
              ))}
            </article>
          </main>
          <footer>
            <button>Terminar orden</button>
            {/* <button>Cancelar orden</button> */}
          </footer>
        </section>
      ) : (
        <p>No se ha seleccionado ningún producto.</p>
      )}
    </Fragment>
  );
};
