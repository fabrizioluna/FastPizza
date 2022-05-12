import { Layout } from '@/components/layout';
import { GetServerSideProps } from 'next';
import { Product, productAdapter } from 'pages/home/adapters/product.adapter';
import { getAllProducts } from './services/allproducts.service';
import { applyProduct } from './utils/filterProducts';

const AllProducts = ({ products }: { products: Product[] }) => {
  return (
    <Layout>
      <button
        onClick={() => {
          const result = applyProduct.getByCategory(products, 'Pizzas')
          const result2 = applyProduct.getByLimitPrice(result, 50);

          console.log('Results: ', result, result2)
        }}
      >
        Find By Category and Price
      </button>
    </Layout>
  );
};

export default AllProducts;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts();

  const productsAdapted = products.map((product: any) =>
    productAdapter(product)
  );

  return {
    props: {
      products: productsAdapted,
    },
  };
};
