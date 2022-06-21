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
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTruck} />
        </div>
        <main>
          <span>Finanzas globales</span>
          <p>Lista de todas tus finanzas globales.</p>
        </main>
      </header>
      {call !== null && <DashboardDelivery delivery_data={call} /> }
    </DashboardLayout>
  );
};

export default Dashboard_Delivery;
