import {
  faBurger,
  faLocationPin,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Delivery = () => {
  return (
    <div className='delivery'>
      <section>
        <figure>
          <FontAwesomeIcon icon={faLocationPin} />
        </figure>
        <header>
          <h1>Haz tu pedido</h1>
        </header>
        <article>
          Realiza tu pedido en nuestro sitio web desde cualquier parte de la
          República Mexicana.
        </article>
      </section>
      <section>
        <figure>
          <FontAwesomeIcon icon={faTruck} />
        </figure>
        <header>
          <h1>Recibe en tu casa</h1>
        </header>
        <article>
          Nosotros nos compremetemos en llevar tu pedido hasta la puerta de tu
          casa en tiempo y forma.
        </article>
      </section>
      <section>
        <figure>
          <FontAwesomeIcon icon={faBurger} />
        </figure>
        <header>
          <h1>¡Disfruta!</h1>
        </header>
        <article>
          Todos nuestros productos hasta la puerta de tu casa con un solo clic.
        </article>
      </section>
    </div>
  );
};
