import { useLogin } from 'hooks/useLogin';
import Link from 'next/link';

export const Navigation = () => {
  const [loading, userData] = useLogin();
  return (
    <div className='navigation'>
      <ul>
        <figure>
          <img alt='Home' src={'/images/LogoFastPizza.png'} />
        </figure>
        <Link href='/home'>
          <li>Inicio</li>
        </Link>
        <Link href='/all-products'>
          <li>Menu</li>
        </Link>
        <li>¿Deseas unirte?</li>
        <Link href='/cart'>
          <li>Pedidos a domicilio</li>
        </Link>
        <Link href='/dashboard/employee'>
          <li>Panel de Empleado</li>
        </Link>
        <div>
          <li>Tel +52 777 240 45 64</li>
          <li>Av. Vicente Guerrero Col. Cuernavaca Centro</li>
        </div>
        {loading && <p>Aqui esta cargando...</p>}
        {!loading && userData.status ? (
          <p>{userData.data?.name}</p>
        ) : (
          <Link href='/auth/singin'>
            <li>
              <button>Inicia sesión</button>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};
