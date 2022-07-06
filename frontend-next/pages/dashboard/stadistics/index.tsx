import { PageHead } from '@/components/pageHead/pageHead.component';
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

export default Dashboard_Stadistics;
