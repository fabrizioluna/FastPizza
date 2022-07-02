import { PageHead } from '@/components/pageHead/pageHead.component';
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

export default Dashboard_Logs;
