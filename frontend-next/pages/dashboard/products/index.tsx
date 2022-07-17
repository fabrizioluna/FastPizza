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

export default Dashboard_Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllCategories();

  return {
    props: {
      categories: data,
    },
  };
};
