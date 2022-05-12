import Link from "next/link";

export const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <figure>
          <img alt='Home' src={'/images/LogoFastPizza.png'} />
        </figure>
        <Link href='/home'><li>Inicio</li></Link>
        <Link href='/all-products'><li>Menu</li></Link>
        <li>¿Deseas unirte?</li>
        <Link href='/cart'><li>Pedidos a domicilio</li></Link>
        <div>
          <li>Tel +52 777 240 45 64</li>
          <li>Av. Vicente Guerrero Col. Cuernavaca Centro</li>
        </div>
        <li><button>Inicia sesión</button></li>
      </ul>
    </div>
  );
};
