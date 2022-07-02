import { PageHead } from "@/components/pageHead/pageHead.component";
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

export default Dashboard_Discounts;
