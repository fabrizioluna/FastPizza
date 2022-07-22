import { DashboardPrivateRoute } from "@/config/dashboard.private.routes";
import { GetServerSideProps } from "next";
import { getAllCategories } from "pages/all-products/services/allproducts.service";
import { Categories } from "pages/all-products/types/allproducts.type";
import { DashboardLayout } from "../components/dashboard.layout";
import { DashboardProducts } from "./dashboard.products";


const Dashboard_Products = ({ categories }: { categories: Categories[] }) => {
  return (
      <DashboardLayout>
          <DashboardProducts categories={categories} />
      </DashboardLayout>
  )
}

// Dashboard Private Page and Rol Guard
Dashboard_Products.AuthDashboard = DashboardPrivateRoute;

export default Dashboard_Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllCategories();

  return {
    props: {
      categories: data,
    },
  };
};
