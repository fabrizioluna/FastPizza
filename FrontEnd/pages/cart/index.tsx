import { Layout } from '../../components/layout';
import { Notification } from '../../components/notification';

const Cart = () => {
  return (
    <Layout>
      <main className='cart'>
        <article>
          <section>
            <button>x</button>
            <img
              src='https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg'
              alt='image'
            />
            <p>Pizza Italiana</p>
            <p>$250</p>
            <p>1</p>
          </section>
          <section>
            <button>x</button>
            <img
              src='https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg'
              alt='image'
            />
            <p>Pizza Italiana</p>
            <p>$250</p>
            <p>1</p>
          </section>
          <section>
            <button>x</button>
            <img
              src='https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg'
              alt='image'
            />
            <p>Pizza Italiana</p>
            <p>$250</p>
            <p>1</p>
          </section>
        </article>
        <aside>
          <h2>Resumen de tu orden</h2>
          <section>
            <p>Orden</p>
            <span>$405 MXN</span>
          </section>
          <section>
            <p>Entrega</p>
            <span>$50 MXN</span>
          </section>
          <section>
            <p>Total</p>
            <span>$455 MXN</span>
          </section>
          <section>
            <p>Dirección</p>
            <span>Av Degollado, Cuernavaca, Morelos.</span>
          </section>
          <input type='text' value='Aplica tu descuento' />
          <button>Aplicar</button>
          <footer>
            <button>Realizar pago</button>
            <button>Cambiar lugar de entrega</button>
          </footer>
        </aside>
      </main>
      <Notification>
        <p>Este elemento se agrego a tu carrito de compras.</p>
      </Notification>
    </Layout>
  );
};

export default Cart;
