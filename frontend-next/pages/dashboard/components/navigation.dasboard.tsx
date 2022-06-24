import { AppStore } from '@/redux/store';
import { authSessionCookieStorage } from '@/utils/sessionStorage/localSessionStorage';
import {
  faBriefcase,
  faBurger,
  faChartLine,
  faCopy,
  faKitchenSet,
  faTags,
  faTruck,
  faWallet,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';

export const NavigationDashboard = () => {
  const employee = useSelector((store: AppStore) => store.employee);
  return (
    <div className='dashboardNav'>
      <h1>Dashboard FastPizza</h1>
      <Link href='/dashboard/stadistics'>
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
      <Link href='/dashboard/logs'>
        <li>
          <div>
            <FontAwesomeIcon icon={faCopy} />
            <p>Registros</p>
          </div>
        </li>
      </Link>
      <footer>
        {!!employee && <p>{employee.name} {employee.lastname}</p>}
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
