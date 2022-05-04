import { Delivery } from './components/delivery';
import { HomeLayout } from './components/layout';
import { Products } from './components/products';

const Home = () => {
  return (
    <HomeLayout>
      <Delivery />
      <Products />
    </HomeLayout>
  );
};

export default Home;
