import { PageHead } from '@/components/pageHead/pageHead.component';
import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { useCallService } from '@/hooks/useCallService';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { orderAdapter } from '../adapters/order.adapter';
import { DashboardLayout } from '../components/dashboard.layout';
import { getAllOrdersByDelivery } from '../services/orders.service';
import { DashboardDelivery } from './components/dashboard.delivery';

const Dashboard_Delivery = () => {
  const { call }: any = useCallService(getAllOrdersByDelivery, orderAdapter);
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Entregas' />
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <main>
          <span>Entregas pendientes</span>
          <p>Lista de todas las entregas por realizar.</p>
        </main>
      </header>
      {call !== null && <DashboardDelivery delivery_data={call} />}
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Delivery.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Delivery;
