import { PageHead } from "@/components/pageHead/pageHead.component";
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

export default Dashboard_Inventory;