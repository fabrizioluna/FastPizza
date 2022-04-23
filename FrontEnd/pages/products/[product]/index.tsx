import { useRouter } from 'next/router';
import { Layout } from '../../../components/layout';

const Products = () => {
  const { asPath } = useRouter();

  return (
    <Layout>
      <main className='product__description'>
        <section className='product__description-bio'>
          <figure>
            <img src='https://st2.depositphotos.com/1692343/5636/i/950/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg' alt='image' />
          </figure>
          <article>
            <h2>Pizza Italiana</h2>
            <p>
              Classic marinara sauce, authentic old-world pepperoni, all-natural
              Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned
              pork and beef. Best an our Hand Tossed crust. With more than 50
              years of experience under our belts, we understand how to best
              serve our customers through tried and true service principles.
              Instead of following trends, we set them. We create food we’re
              proud to serve and deliver it fast, with a smile.
            </p>
            <footer>
                <button>Agrega al carrito</button>
                <button>+1</button>
                <input type="text" value='1' />
                <button>-1</button>
            </footer>
          </article>
        </section>
        <section className='product__description-categories'>
          <h2>Categorias</h2>
          <li>Pizzas</li>
          <li>Hamburguesas</li>
          <li>Snakcs</li>
          <li>Bebidas</li>
          <li>Combos</li>
        </section>
        <section className='product__description-more'>
          <header>
            <li>Descripcion</li>
            <li>Comentarios(20)</li>
            <li>Informacion adicional</li>
          </header>
          <article>
            Classic marinara sauce, authentic old-world pepperoni, all-natural
            Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned
            pork and beef. Best an our Hand Tossed crust. With more than 50
            years of experience under our belts, we understand how to best serve
            our customers through tried and true service principles. Instead of
            following trends, we set them. We create food we’re proud to serve
            and deliver it fast, with a smile.
          </article>
        </section>
        <section className='product__description-others'>
          <h2>Favorito de nuestros clientes</h2>
          <div>
            <img src='222' alt='imagen2' />
            <h2>Pizza Clasica</h2>
          </div>
          <div>
            <img src='222' alt='imagen2' />
            <h2>Pizza Hawaiana</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Products;
