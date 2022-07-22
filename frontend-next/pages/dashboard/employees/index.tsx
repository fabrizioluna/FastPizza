import { DashboardPrivateRoute } from '@/config/dashboard.private.routes';
import { DashboardEmployees } from './dashboard.employees';

const Dashboard_Employees = () => {
  return <DashboardEmployees />;
};

// Dashboard Private Page and Rol Guard
Dashboard_Employees.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Employees;
