export const Header = () => {
  return (
    <div className='header__component'>
      <article>
        <h1>¡Haz tu pedido a domicilio!</h1>
        <p>Haz tus pedidos a domicilio y obtén un 50% de descuento.</p>
      </article>
      <figure>
        <img
          alt='Home'
          src={'/images/home_image.png'}
        />
      </figure>
    </div>
  );
};
