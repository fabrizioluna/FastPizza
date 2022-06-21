import { useCallService } from '@/hooks/useCallService';
import { orderAdapter } from '../adapters/order.adapter';
import { getAllOrders } from '../services/orders.service';
import { DashboardOrders } from './dashboard.order';

const Dashboard_Orders = () => {
  const { call }: any = useCallService(getAllOrders, orderAdapter);
  return <>{call !== null && <DashboardOrders order_data={call} />}</>;
};

export default Dashboard_Orders;
