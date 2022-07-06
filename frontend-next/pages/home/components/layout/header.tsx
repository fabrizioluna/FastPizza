import { Button } from '../../../../components/button';

export const Header = () => {
  return (
    <div className='header__component'>
      <article>
        <h1>¡Haz tu pedido a domicilio!</h1>
        <p>Haz tu primer pedido a domicilio y recibe un descuento del 40%.</p>
        <Button config={{ type: false, color: 'primary', link: '/auth/singup' }}>
          Registrate gratis
        </Button>
      </article>
      <figure>
        <img alt='Home' src={'/images/home_image.png'} />
      </figure>
    </div>
  );
};
