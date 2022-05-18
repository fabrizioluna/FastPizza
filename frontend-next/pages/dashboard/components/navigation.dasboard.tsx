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
      <footer>
        <li>EI7690 | Fabrizio Luna</li>
        <li>Salir</li>
      </footer>
    </div>
  );
};
