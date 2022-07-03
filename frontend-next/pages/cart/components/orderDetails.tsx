import { CustomMessage } from '@/components/message/message.component';
import { AppStore } from '@/redux/store';
import {
  authCookieStorage,
  localStorageHandler,
} from '@/utils/localStorage/localStorageHandler';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import Router from 'next/router';
import { Product } from 'pages/home/adapters/product.adapter';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { OrderTypes, sendOrder } from '../services/order.service';
import { ApplyDiscount } from './applyDiscount';
import { ChangeAddress } from './changeAddress.cart';
import { ListProductsProps } from './listProducts';

export interface Amounts {
  productsAmount: number;
  deliveryPay: number;
  totalAmount: number;
}

export const OrderDetails = ({ status, products }: ListProductsProps) => {
  const user = useSelector((store: AppStore) => store.user);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [changeAddress, setChangeAddress] = useState<{
    change: boolean;
    newAddress: string;
  }>({
    change: false,
    newAddress: '',
  });
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

  const socket = io('http://localhost:4000', {
    transports: ['websocket', 'polling'],
  });

  const processOrder = async () => {
    setShowSpinner(true);

    if (user.address.length < 0) {
      setShowSpinner(false);
      return Router.push('/auth/singin');
    }

    const cookie = await authCookieStorage()?.get();
    let orderProducts: string[] = [];
    products.map((product: Product) => orderProducts.push(product._id));
    const orderObject: OrderTypes = {
      order_totalAmount: values.totalAmount,
      order_discountCode: 0,
      order_discountApplied: 0,
      order_addressClient: changeAddress.change
        ? changeAddress.newAddress
        : user.address,
      order_products: orderProducts,
      order_buyer: cookie?.data.id,
      order_status: false,
    };

    const { data, statusCode } = await sendOrder(orderObject);
    socket.emit('sendOrder');
    localStorageHandler.clear('cartShop');

    if (statusCode === STATUS_CODE.SUCCESS) {
      return Router.push(`/order-status/${data._id}`);
    }
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
      {user.address.length >= 1 ? (
        <Fragment>
          <section>
            <p>Dirección</p>
            <span>
              {changeAddress.newAddress.length >= 1
                ? changeAddress.newAddress
                : user.address}
            </span>
          </section>
          <ApplyDiscount
            orderAmount={values.totalAmount}
            changeTotalAmount={setValues}
            initialOrderPrice={values}
          />
          {changeAddress.change && (
            <ChangeAddress setChangeAddress={setChangeAddress} />
          )}
          <footer>
            {showSpinner ? (
              <button>
                <div className='spinner'></div>
              </button>
            ) : (
              <button onClick={() => processOrder()}>Realizar pago</button>
            )}
            <button
              onClick={() => setChangeAddress({ change: true, newAddress: '' })}
            >
              Cambiar lugar de entrega
            </button>
          </footer>
        </Fragment>
      ) : (
        <Fragment>
          <CustomMessage
            type='INFO'
            message='Antes de poder procesar tu orden, por favor inicia sesión o registrate para proceder.'
          />
        </Fragment>
      )}
    </aside>
  );
};
