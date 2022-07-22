import { localStorageHandler } from '@/utils/localStorage/localStorageHandler';
import { Product } from 'pages/home/adapters/product.adapter';
import { useEffect, useState } from 'react';
import { OrderDetails } from './orderDetails';

export interface ListProductsProps {
  status: number;
  products: Product[];
}

export const ListProducts = ({ status, products }: ListProductsProps) => {
  const [productValues, setProductsValues] = useState(products);

  useEffect(() => {
    status === 200 && setProductsValues(products);
  }, [products]);

  return (
    <main className='cart'>
      <article>
        {status === 200 && productValues !== null ? (
          productValues.map((product: Product, index: number) => (
            <section key={index}>
              <button
                onClick={() => {
                  const newList = productValues.filter(
                    (element: Product, indexFilter: number) =>
                      indexFilter !== index
                  );
                  setProductsValues(newList);
                  localStorageHandler.deleteRow('cartShop', index);
                }}
              >
                x
              </button>
              <img
                src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/products_assents/${product.image}`}
                alt={product.title}
              />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <p>1</p>
            </section>
          ))
        ) : (
          <div>
            <p>Cargando informacion...</p>
          </div>
        )}
        {status === 404 && (
          <div>
            <p>No tienes ningun productos agregados para mostrar.</p>
          </div>
        )}
      </article>
      {status === 200 && productValues !== null && (
        <OrderDetails status={status} products={productValues} />
      )}
    </main>
  );
};
