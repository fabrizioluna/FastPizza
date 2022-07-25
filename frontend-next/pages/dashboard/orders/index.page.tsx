import { PageHead } from '@/components/pageHead/pageHead.component';
import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { useCallService } from '@/hooks/useCallService';
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderAdapter } from '../adapters/order.adapter';
import { DashboardLayout } from '../components/dashboard.layout';
import { getAllOrders } from '../services/orders.service';
import { DashboardOrders } from './dashboard.order';

const Dashboard_Orders = () => {
  const { call }: any = useCallService(getAllOrders, orderAdapter);
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Ordenes' />
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faKitchenSet} />
        </div>
        <main>
          <span>Ordenes entrantes</span>
          <p>Lista de todas las ordenes para gestionar.</p>
        </main>
      </header>
      {call !== null && <DashboardOrders order_data={call} />}
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Orders.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Orders;
