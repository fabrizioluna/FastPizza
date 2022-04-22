export const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <figure>
          <img alt='Home' src={'/images/LogoFastPizza.png'} />
        </figure>
        <li>Inicio</li>
        <li>Menu</li>
        <li>¿Deseas unirte?</li>
        <li>Pedidos a domicilio</li>
        <div>
          <li>Tel +52 777 240 45 64</li>
          <li>Av. Vicente Guerrero Col. Cuernavaca Centro</li>
        </div>
        <li><button>Inicia sesión</button></li>
      </ul>
    </div>
  );
};
