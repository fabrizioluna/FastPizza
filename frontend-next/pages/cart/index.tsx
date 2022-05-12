import { localStorageHandler } from '@/utils/localStorage/localStorageHandler';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layout';
import { ListProducts } from './components/listProducts';
import { OrderDetails } from './components/orderDetails';

const Cart = () => {
  const [cart, setCart] = useState<{ status: number; data: any }>({
    status: 404,
    data: null,
  });

  useEffect(() => {
    const getCart = () => {
      const cartItems = localStorageHandler.get('cartShop');
      setCart(cartItems);
    };
    getCart();
  }, []);

  return (
    <Layout>
      <ListProducts status={cart.status} products={cart.data} />
    </Layout>
  );
};

export default Cart;
