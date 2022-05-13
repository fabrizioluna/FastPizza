import { getPriceWithDiscount } from '@/utils/getPrice/getPrice';
import { Product } from 'pages/home/adapters/product.adapter';

interface ShowProductsProps {
  currentProducts: Product[];
}

export const ShowProducts = ({ currentProducts }: ShowProductsProps) => {
  return (
    <div className='products'>
      <main>
        {currentProducts.length > 0 &&
          currentProducts.map((product) => (
            <section>
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
