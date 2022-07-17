import { PageHead } from "@/components/pageHead/pageHead.component";
import { DashboardPrivateRoute } from "@/config/dashboard.private.routes";
import { DashboardLayout } from "../components/dashboard.layout";
import { DashboardDiscounts } from "./dashboard.discounts";


const Dashboard_Discounts = () => {
  return (
    <DashboardLayout>
      <PageHead titlePage='Panel de Empleado: Descuentos' />
      <DashboardDiscounts />
    </DashboardLayout>
  );
};

// Dashboard Private Page and Rol Guard
Dashboard_Discounts.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Discounts;
