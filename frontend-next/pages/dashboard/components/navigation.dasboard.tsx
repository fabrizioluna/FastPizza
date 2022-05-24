import Link from 'next/link';

export const NavigationDashboard = () => {
  return (
    <div className='dashboardNav'>
      {/* <h1>Dashboard FastPizza</h1> */}
      <Link href='/dashboard/stadistics'>
        <li>Estadisticas</li>
      </Link>
      <Link href='/dashboard/finance'>
        <li>Finanzas</li>
      </Link>
      <Link href='/dashboard/inventory'>
        <li>Inventario</li>
      </Link>
      <Link href='/dashboard/orders'>
        <li>Ordenes</li>
      </Link>
      <Link href='/dashboard/delivery'>
        <li>Entregas</li>
      </Link>
      <Link href='/dashboard/employees'>
        <li>Gestion de Empleados</li>
      </Link>
      <Link href='/dashboard/products'>
        <li>Gestion de Productos</li>
      </Link>
      <Link href='/dashboard/discounts'>
        <li>Gestion de Descuentos</li>
      </Link>
      <Link href='/dashboard/logs'>
        <li>Registros generales</li>
      </Link>
      <footer>
        <li>EI7690 | Fabrizio Luna</li>
        <li>Salir</li>
      </footer>
    </div>
  );
};
