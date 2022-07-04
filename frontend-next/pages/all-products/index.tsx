import { Layout } from '@/components/layout';
import { CustomMessage } from '@/components/message/message.component';
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
  const [productsNotFound, setProductsNotFound] = useState<boolean>(false);
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

    let resultFilter: Product[] = [];

    if (values.specificSearch.length > 0) {
      resultFilter = applyProduct.getBySearch(
        resultFilter.length === 0 ? products : resultFilter,
        values.specificSearch
      );
    }
    if (values.specificCategory.length > 0) {
      resultFilter = applyProduct.getByCategory(
        resultFilter.length === 0 ? products : resultFilter,
        values.specificCategory
      );
    }
    if (values.specificMaxPrice > 0) {
      resultFilter = applyProduct.getByLimitPrice(
        resultFilter.length === 0 ? products : resultFilter,
        values.specificMaxPrice
      );
    }
    if (resultFilter.length === 0) setProductsNotFound(true);
    setCurrentProducts(resultFilter);
  };

  return (
    <Layout>
      <PageHead titlePage='Productos disponibles' />
      <div className='show_products'>
        <aside>
          <form onSubmit={initializeFilter}>
            <p>Buscar por producto:</p>
            {productsNotFound && (
              <CustomMessage
                message='No encontramos coincidencias en tu busqueda. Intenta nuevamente.'
                type='ERROR'
              />
            )}
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
            <button onClick={() => setProductsNotFound(false)}>Aplicar filtros</button>
          </form>

          {/* <button onClick={() => setCurrentProducts([])}>
            Limpiar filtros
          </button> */}
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
