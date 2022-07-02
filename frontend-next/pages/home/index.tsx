import { PageHead } from '@/components/pageHead/pageHead.component';
import { GetServerSideProps } from 'next';
import { productAdapter } from './adapters/product.adapter';
import { Delivery } from './components/delivery';
import { HomeLayout } from './components/layout';
import { Products } from './components/products';
import { getProducts } from './services/product.service';

const Home = ({ products }: { products: any }) => {  
  return (
    <HomeLayout>
      <PageHead titlePage='Página de Inicio' />
      <Delivery />
      <Products products={products} />
    </HomeLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts();

  const productsAdapted = products.map((product: any) => productAdapter(product));

  return {
    props: {
      products: productsAdapted,
    },
  };
};
