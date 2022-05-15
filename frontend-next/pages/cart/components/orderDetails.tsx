import { AppStore } from '@/redux/store';
import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import Router from 'next/router';
import { Product } from 'pages/home/adapters/product.adapter';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderTypes, sendOrder } from '../services/order.service';
import { ListProductsProps } from './listProducts';

interface Amounts {
  productsAmount: number;
  deliveryPay: number;
  totalAmount: number;
}

export const OrderDetails = ({ status, products }: ListProductsProps) => {
  const user = useSelector((store: AppStore) => store.user);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [values, setValues] = useState<Amounts>({
    productsAmount: 0,
    deliveryPay: 50,
    totalAmount: 0,
  });

  useEffect(() => {
    const generateTotalAmount = (products: Product[]) => {
      let productsAmount: number = 0;
      products.map(
        (element: Product) =>
          (productsAmount = productsAmount = productsAmount + element.price)
      );
      setValues({
        productsAmount,
        deliveryPay: 50,
        totalAmount: productsAmount + 50,
      });
    };

    status !== 404 && generateTotalAmount(products);
  }, [products]);

  const processOrder = async () => {
    setShowSpinner(true);

    if(user.address.length < 0) {
      setShowSpinner(false);
      return Router.push('/auth/singin')
    }

    const cookie = await authCookieStorage()?.get();
    let orderProducts: string[] = [];
    products.map((product: Product) => orderProducts.push(product._id));
    const orderObject: OrderTypes = {
      order_totalAmount: values.totalAmount,
      order_discountCode: 0,
      order_discountApplied: 0,
      order_addressClient: user.address,
      order_products: orderProducts,
      order_buyer: cookie?.data.id,
      order_status: false
    };

    await sendOrder(orderObject);
    // if(Order.statusCode === STATUS_CODE.BAD_REQUEST)  
  };

  return (
    <aside>
      <h2>Resumen de tu orden</h2>
      <section>
        <p>Orden</p>
        <span>${values.productsAmount} MXN</span>
      </section>
      <section>
        <p>Entrega</p>
        <span>${values.deliveryPay} MXN</span>
      </section>
      <section>
        <p>Total</p>
        <span>${values.totalAmount} MXN</span>
      </section>
      <section>
        <p>Dirección</p>
        <span>Av Degollado, Cuernavaca, Morelos.</span>
      </section>
      {/* TODO: Este formulario da error, cambiarlo por mi custom form */}
      <input type='text' value='Aplica tu descuento' />
      <button>Aplicar</button>
      <footer>
        {showSpinner ? (
          <button>
            <div className='spinner'></div>
          </button>
        ) : (
          // <p>Procesando pago</p>
          <button onClick={() => processOrder()}>Realizar pago</button>
        )}
        <button>Cambiar lugar de entrega</button>
      </footer>
    </aside>
  );
};
