import { PageHead } from '@/components/pageHead/pageHead.component';
import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { DashboardLayout } from '../components/dashboard.layout';
import { DashboardFinance } from './components/dashboard.stadistics';

const Dashboard_Stadistics = () => {
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Estadisticas' />
      <DashboardFinance />
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Stadistics.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Stadistics;
