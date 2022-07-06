import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import { useLogin } from 'hooks/useLogin';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';

export const Navigation = () => {
  const [loading, userData] = useLogin();
  const [showSelectOptions, setSelectOptions] = useState<boolean>(false);
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
          <li>Nuestros productos</li>
        </Link>
        <Link href='/cart'>
          <li>Carrito de compras</li>
        </Link>
        <div>
          <li>Tel +52 777 240 45 64</li>
          <li>Av. Vicente Guerrero Col. Cuernavaca Centro</li>
          {loading && <p>Aqui esta cargando...</p>}
          {!loading && userData.status ? (
            <>
              <p
                onMouseOver={() => setSelectOptions(true)}
                style={{ marginTop: '1rem' }}
              >
                {userData.data?.name}
              </p>
              {showSelectOptions && (
                <div
                  onMouseLeave={() => setSelectOptions(false)}
                  className='userMenu'
                >
                  <li
                    onClick={() => {
                      return Router.push('/profile');
                    }}
                  >
                    Editar perfil
                  </li>
                  <li
                    onClick={() => {
                      return Router.push('/profile');
                    }}
                  >
                    Ver ordenes
                  </li>
                  <li
                    onClick={() => {
                      authCookieStorage()?.clear();
                      return Router.push('/home');
                    }}
                  >
                    Salir
                  </li>
                </div>
              )}
            </>
          ) : (
            <Link href='/auth/singin'>
              <li>
                <button>Inicia sesión</button>
              </li>
            </Link>
          )}
        </div>
      </ul>
    </div>
  );
};
