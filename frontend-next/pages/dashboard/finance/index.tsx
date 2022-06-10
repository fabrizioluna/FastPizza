import { GetServerSideProps } from "next";
import { DashboardLayout } from "../components/dashboard.layout";
import { financeAdapter } from "./adapters/finance.adapter";
import { DashboardStadistics } from "./components/dashboard.finance";
import { getAllFinance } from "./service/finance.service";
import { Finance } from "./types/finance.types";

const Dashboard_Finance = ({ financeObject }: { financeObject: Finance }) => {
  return (
    <DashboardLayout>
      <DashboardStadistics financeObject={financeObject} />
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllFinance();
  const financeAdapted = financeAdapter(data);

  return {
    props: {
      financeObject: financeAdapted,
    },
  };
};

export default Dashboard_Finance;