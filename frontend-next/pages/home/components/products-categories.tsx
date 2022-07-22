import { GetServerSideProps } from 'next';
import { getAllCategories } from 'pages/all-products/services/allproducts.service';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { Fragment } from 'react';

export const ProductsCategories = ({
  categories,
}: {
  categories: Categories[];
}) => {
  return (
    <header>
      {categories.map((category) => (
        <Fragment>
          <li>{category.category_name}</li>
        </Fragment>
      ))}
    </header>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllCategories();

  return {
    props: {
      categories: data,
    },
  };
};
