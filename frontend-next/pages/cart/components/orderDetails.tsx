import { Product } from 'pages/home/adapters/product.adapter';
import { useEffect, useState } from 'react';
import { ListProductsProps } from './listProducts';

interface Amounts {
  productsAmount: number;
  deliveryPay: number;
  totalAmount: number;
}

export const OrderDetails = ({ status, products }: ListProductsProps) => {
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
        <button>Realizar pago</button>
        <button>Cambiar lugar de entrega</button>
      </footer>
    </aside>
  );
};
