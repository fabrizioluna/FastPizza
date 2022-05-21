import { DashboardLayout } from "../components/dashboard.layout";
import { DashboardStadistics } from "./components/dashboard.finance";

const Dashboard_Finance = () => {
  return (
    <DashboardLayout>
      <DashboardStadistics />
    </DashboardLayout>
  )
}

export default Dashboard_Finance;