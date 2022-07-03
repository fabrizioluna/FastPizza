import Link from "next/link";

export const Footer = () => {
  return (
    <div className='homeFooter'>
      <figure>
        <img alt='Home' src={'/images/LogoFastPizza.png'} />
      </figure>
      <div>
        <Link href='/home'>
          <li>Inicio</li>
        </Link>
        <Link href='/all-products'>
          <li>Nuestros productos</li>
        </Link>
        <Link href='/cart'>
          <li>Carrito de compras</li>
        </Link>
      </div>
      <section>
        <p>Sitio web desarrollado por Fabrizio Luna.</p>
      </section>
    </div>
  );
};
