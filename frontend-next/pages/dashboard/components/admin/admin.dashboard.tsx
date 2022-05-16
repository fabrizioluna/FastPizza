import { useCallService } from '@/hooks/useCallService';
import { Order, orderAdapter } from 'pages/dashboard/adapters/order.adapter';
import { getAllOrders } from 'pages/dashboard/services/orders.service';
import { DashboardLayout } from '../dashboard.layout';
import { DashboardOrders } from '../orders/dashboard.order';

export const AdminDashboard = () => {
  const { call }: any = useCallService(getAllOrders, orderAdapter);
  return (
    <DashboardLayout>
      {call !== null && <DashboardOrders order_data={call} />}
    </DashboardLayout>
  );
};
