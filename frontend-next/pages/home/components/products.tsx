import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallService } from 'hooks/useCallService';
import { productAdapter } from '../adapters/product.adapter';
import { getProducts } from '../services/product.service';
import { ProductsCategories } from './products-categories';

export const Products = ({ products }: { products: any }) => {

  const { call } = useCallService(getProducts, productAdapter)

  const getPriceWithDiscount = (price: number, discount: number) => {
    const getResult = (discount / 100) * price;
    return price - getResult;
  };

  console.log('Esto es con el custom hook', call)

  return (
    <div className='products'>
      <ProductsCategories />
      <main>
        {products.map((product: any, index: number) => (
          <section key={index}>
            <figure>
              <img src={product.image} />
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
