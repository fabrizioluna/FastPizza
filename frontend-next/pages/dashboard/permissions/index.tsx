import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { DashboardLayout } from '../components/dashboard.layout';
import { DashboardPermissions } from './dashboard.permissions';

const Dashboard_Permissions = () => {
  return (
    <DashboardLayout>
      <DashboardPermissions />
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Permissions.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Permissions;
