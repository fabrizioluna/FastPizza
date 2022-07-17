import {
  faBriefcase,
  faBurger,
  faChartLine,
  faCopy,
  faKitchenSet,
  faShield,
  faTags,
  faTruck,
  faWallet,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavigationWrapper = [
  {
    path: 'stadistics',
    title: 'Estadisticas',
    icon: <FontAwesomeIcon icon={faChartLine} />,
    accessKey: 'permissionsStatustics',
  },
  {
    path: 'finance',
    title: 'FInanzas',
    icon: <FontAwesomeIcon icon={faWallet} />,
    accessKey: 'permissionsFinance',
  },
  {
    path: 'inventory',
    title: 'Inventario',
    icon: <FontAwesomeIcon icon={faWarehouse} />,
    accessKey: 'permissionsInventory',
  },
  {
    path: 'orders',
    title: 'Ordenes',
    icon: <FontAwesomeIcon icon={faKitchenSet} />,
    accessKey: 'permissionsOrders',
  },
  {
    path: 'delivery',
    title: 'Entregas',
    icon: <FontAwesomeIcon icon={faTruck} />,
    accessKey: 'permissionsDelivery',
  },
  {
    path: 'employees',
    title: 'Empleados',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    accessKey: 'permissionsInventory',
  },
  {
    path: 'employees',
    title: 'Empleados',
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    accessKey: 'permissionsEmployees',
  },
  {
    path: 'products',
    title: 'Productos',
    icon: <FontAwesomeIcon icon={faBurger} />,
    accessKey: 'permissionsProducts',
  },
  {
    path: 'discounts',
    title: 'Descuentos',
    icon: <FontAwesomeIcon icon={faTags} />,
    accessKey: 'permissionsDiscounts',
  },
  {
    path: 'permissions',
    title: 'Privilegios',
    icon: <FontAwesomeIcon icon={faShield} />,
    accessKey: 'permissionsRoles',
  },
  {
    path: 'logs',
    title: 'Registros',
    icon: <FontAwesomeIcon icon={faCopy} />,
    accessKey: 'permissionsLogs',
  },
];
