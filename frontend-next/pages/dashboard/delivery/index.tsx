import { useCallService } from '@/hooks/useCallService';
import { orderAdapter } from '../adapters/order.adapter';
import { DashboardLayout } from '../components/dashboard.layout';
import { getAllOrdersByDelivery } from '../services/orders.service';
import { DashboardDelivery } from './components/dashboard.delivery';
import { StadisticsDelivery } from './components/stadistics.delivery';

const Dashboard_Delivery = () => {
  const { call }: any = useCallService(getAllOrdersByDelivery, orderAdapter);
  return (
    <DashboardLayout>
      <StadisticsDelivery />
      {call !== null && <DashboardDelivery delivery_data={call} /> }
    </DashboardLayout>
  );
};

export default Dashboard_Delivery;
