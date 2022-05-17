import { Notification } from '@/components/notification';
import { getPriceWithDiscount } from '@/utils/getPrice/getPrice';
import { localStorageHandler } from '@/utils/localStorage/localStorageHandler';
import { Product } from 'pages/home/adapters/product.adapter';
import { useState } from 'react';

interface ShowProductsProps {
  currentProducts: Product[];
}

export const ShowProducts = ({ currentProducts }: ShowProductsProps) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const addProduct = (product: any) => {
    localStorageHandler.set('cartShop', product);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3500);
  };
  return (
    <div className='products'>
      {showMessage && (
        <Notification>
          <p>Este producto se agrego a tu carrito de compras.</p>
        </Notification>
      )}
      <main>
        {currentProducts.length > 0 &&
          currentProducts.map((product: Product, index: number) => (
            <section key={index} onClick={() => addProduct(product)}>
              <figure>
                <img src={product.image} />
                <div className='products__hover'>
                  <span>{/* <FontAwesomeIcon icon={faShop} /> */}</span>
                </div>
              </figure>
              <article>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span>
                  ${getPriceWithDiscount(product.price, product.discount)} MXN -%
                  {product.discount} de descuento
                </span>
              </article>
            </section>
          ))}
      </main>
    </div>
  );
};
