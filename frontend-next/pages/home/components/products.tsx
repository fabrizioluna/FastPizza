import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Products_Pizzas } from '../../../resources';
import { ProductsCategories } from './products-categories';

export const Products = () => {
  const getPriceWithDiscount = (price: number, discount: number) => {
    const getResult = (discount / 100) * price;
    return price - getResult;
  };

  return (
    <div className='products'>
      <ProductsCategories />
      <main>
        {Products_Pizzas.map((product, index) => (
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
