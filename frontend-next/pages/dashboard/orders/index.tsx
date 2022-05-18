import { useCallService } from '@/hooks/useCallService';
import { orderAdapter } from '../adapters/order.adapter';
import { DashboardLayout } from '../components/dashboard.layout';
import { getAllOrders } from '../services/orders.service';
import { DashboardOrders } from './components/dashboard.order';

const Dashboard_Orders = () => {
  const { call }: any = useCallService(getAllOrders, orderAdapter);
  return (
    <DashboardLayout>
      {call !== null && <DashboardOrders order_data={call} />}
    </DashboardLayout>
  );
};

export default Dashboard_Orders;
