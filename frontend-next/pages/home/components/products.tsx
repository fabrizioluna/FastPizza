import { Notification } from '@/components/notification';
import { getPriceWithDiscount } from '@/utils/getPrice/getPrice';
import { localStorageHandler } from '@/utils/localStorage/localStorageHandler';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Product } from '../adapters/product.adapter';

export const Products = ({ products }: { products: any }) => {
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
      {/* <ProductsCategories /> */}
      <h4>Nuestros productos más vendidos</h4>
      <main>
        {products.map((product: Product, index: number) => (
          <section key={index} onClick={() => addProduct(product)}>
            <figure>
              <img
                src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/products_assents/${product.image}`}
                alt={product.title}
              />
              <div className='products__hover'>
                <span>
                  <FontAwesomeIcon icon={faShop} />
                </span>
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
