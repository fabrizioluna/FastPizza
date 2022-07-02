import { Layout } from '@/components/layout';
import { PageHead } from '@/components/pageHead/pageHead.component';
import { GetServerSideProps } from 'next';
import { Product, productAdapter } from 'pages/home/adapters/product.adapter';
import { useState } from 'react';
import { ShowProducts } from './components/showProducts';
import { getAllProducts } from './services/allproducts.service';
import { applyProduct } from './utils/filterProducts';

interface FormProps {
  specificSearch: string;
  specificCategory: string;
  specificMaxPrice: number;
}

const AllProducts = ({ products }: { products: Product[] }) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [values, setValues] = useState<FormProps>({
    specificSearch: '',
    specificCategory: '',
    specificMaxPrice: 0,
  });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const initializeFilter = async (e: React.FormEvent) => {
    e.preventDefault();

    values.specificCategory.length == 0 &&
      values.specificSearch.length == 0 &&
      values.specificMaxPrice == 0 &&
      setCurrentProducts([]);

    values.specificSearch.length > 0 &&
      setCurrentProducts(
        applyProduct.getBySearch(
          currentProducts.length > 0 ? currentProducts : products,
          values.specificSearch
        )
      );
    values.specificCategory.length > 0 &&
      setCurrentProducts(
        applyProduct.getByCategory(products, values.specificCategory)
      );
    values.specificMaxPrice > 0 &&
      setCurrentProducts(
        applyProduct.getByLimitPrice(
          currentProducts.length > 0 ? currentProducts : products,
          values.specificMaxPrice
        )
      );
  };

  return (
    <Layout>
      <PageHead titlePage='Productos disponibles' />
      <div className='show_products'>
        <aside>
          <form onSubmit={initializeFilter}>
            <p>Buscar por producto:</p>
            <input
              name='specificSearch'
              placeholder='Buscar producto'
              onChange={onChangeInputs}
            />
            <p>Categoria:</p>
            <select name='specificCategory' onChange={onChangeSelect}>
              <option value=''>Todos los productos</option>
              <option value='Pizzas'>Pizzas</option>
              <option value='Hamburguesas'>Hamburguesas</option>
              <option value='Tacos'>Tacos</option>
              <option value='Bebidas'>Bebidas</option>
            </select>
            <p>Buscar por precio( precio máximo ):</p>
            <input
              name='specificMaxPrice'
              placeholder='Ingresa la cantidad'
              onChange={onChangeInputs}
            />
            <button>Aplicar filtros</button>
          </form>

          <button onClick={() => setCurrentProducts([])}>
            Limpiar filtros
          </button>
        </aside>

        <ShowProducts
          currentProducts={
            currentProducts.length > 0 ? currentProducts : products
          }
        />
      </div>
    </Layout>
  );
};

export default AllProducts;

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts();

  const productsAdapted = products.map((product: any) =>
    productAdapter(product)
  );

  return {
    props: {
      products: productsAdapted,
    },
  };
};
