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
        <article>Haz tu pedido en nuestro página web.</article>
      </section>
      <section>
        <figure>
          <FontAwesomeIcon icon={faTruck} />
        </figure>
        <article>
          Nosotros nos encargamos de llevarlo hasta tu domicilio.
        </article>
      </section>
      <section>
        <figure>
          <FontAwesomeIcon icon={faBurger} />
        </figure>
        <article>¡Disfruta!</article>
      </section>
    </div>
  );
};
