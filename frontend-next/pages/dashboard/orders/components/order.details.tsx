import { Order, OrderProduct } from 'pages/dashboard/adapters/order.adapter';

export const OrderDetails = ({
  details,
  resetDetails,
  sendCompleteOrder,
}: {
  details: Order;
  resetDetails: (set: any) => void;
  sendCompleteOrder: (idOrder: string, statusKitchenFinished: boolean) => any;
}) => {
  return (
    <div className='dashboardOrder-details'>
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
            <button
              onClick={() => {
                sendCompleteOrder(details._id, true);
                resetDetails(undefined);
              }}
            >
              Terminar orden
            </button>
            {/* <button>Cancelar orden</button> */}
          </footer>
        </section>
      ) : (
        <p>No se ha seleccionado ningún producto.</p>
      )}
    </div>
  );
};
