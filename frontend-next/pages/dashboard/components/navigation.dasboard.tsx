import { AppStore } from '@/redux/store';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import Router from 'next/router';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { ButtonWrapper } from './resources/buttonWrapper';
import { NavigationWrapper } from './resources/navigationWrapper';

export const NavigationDashboard = () => {
  const employee = useSelector((store: AppStore) => store.employee);

  return (
    <div className='dashboardNav'>
      <h1>Dashboard FastPizza</h1>
      {NavigationWrapper.map((wrapper: any) => (
        <Fragment>
          {employee.role[wrapper.accessKey] === true && (
            <ButtonWrapper
              icon={wrapper.icon}
              path={wrapper.path}
              title={wrapper.title}
            />
          )}
        </Fragment>
      ))}
      <footer>
        {!!employee && (
          <p>
            {employee.name} {employee.lastname}
          </p>
        )}
        <p
          onClick={() => {
            authSessionCookieStorage()?.destroy();
            Router.push('/dashboard/auth');
          }}
        >
          Salir
        </p>
      </footer>
    </div>
  );
};

{
  /* <Link href='/dashboard/stadistics'>
        <li>
          <div>
            <FontAwesomeIcon icon={faChartLine} />
            <p>Estadisticas</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/finance'>
        <li>
          <div>
            <FontAwesomeIcon icon={faWallet} />
            <p>FInanzas</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/inventory'>
        <li>
          <div>
            <FontAwesomeIcon icon={faWarehouse} />
            <p>Inventario</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/orders'>
        <li>
          <div>
            <FontAwesomeIcon icon={faKitchenSet} />
            <p>Ordenes</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/delivery'>
        <li>
          <div>
            <FontAwesomeIcon icon={faTruck} />
            <p>Entregas</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/employees'>
        <li>
          <div>
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Empleados</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/products'>
        <li>
          <div>
            <FontAwesomeIcon icon={faBurger} />
            <p>Productos</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/discounts'>
        <li>
          <div>
            <FontAwesomeIcon icon={faTags} />
            <p>Descuentos</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/permissions'>
        <li>
          <div>
            <FontAwesomeIcon icon={faShield} />
            <p>Privilegios</p>
          </div>
        </li>
      </Link>
      <Link href='/dashboard/logs'>
        <li>
          <div>
            <FontAwesomeIcon icon={faCopy} />
            <p>Registros</p>
          </div>
        </li>
      </Link> */
}
