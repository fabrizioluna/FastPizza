import { PageHead } from '@/components/pageHead/pageHead.component';
import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { DashboardLayout } from '../components/dashboard.layout';
import { DashboardLogs } from './dashboard.logs';


const Dashboard_Logs = () => {
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Registros' />
      <DashboardLogs />
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Logs.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Logs;
