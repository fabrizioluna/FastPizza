import { PageHead } from "@/components/pageHead/pageHead.component";
import { DashboardPrivateRoute } from "@/config/dashboard.private.routes";
import { DashboardLayout } from "../components/dashboard.layout";
import { DashboardInvetory } from "./components/dashboard.inventory";

const Dashboard_Inventory = () => {
  return (
      <DashboardLayout>
        <PageHead titlePage='Panel de Empleado: Inventario' />
          <DashboardInvetory />
      </DashboardLayout>
  )
}

// Dashboard Private Page and Rol Guard
Dashboard_Inventory.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Inventory;