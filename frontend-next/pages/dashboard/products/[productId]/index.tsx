import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getAllCategories } from 'pages/all-products/services/allproducts.service';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { CUstomChart } from 'pages/dashboard/components/dashboard.customChart';
import { DashboardLayout } from 'pages/dashboard/components/dashboard.layout';
import { Product, productAdapter } from 'pages/home/adapters/product.adapter';
import { useEffect, useState } from 'react';
import { getDashboardProduct } from '../services/product.service';
import { ProductDelete } from './components/product.delete';
import { ProductEdit } from './components/product.edit';

const DashboardShowProduct = ({ categories }: { categories: Categories[] }) => {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const { data, statusCode } = await getDashboardProduct(
        query.productId as string
      );
      if (statusCode == STATUS_CODE.BAD_REQUEST) return;

      const adaptedProduct: Product = productAdapter(data);
      setProduct(adaptedProduct);
      setLoading(false);
    };

    query.hasOwnProperty('productId') && getProduct();
  }, [query]);

  return (
    <DashboardLayout>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faBurger} />
        </div>
        <main>
          <span>Producto</span>
          <p>Información relevante de este producto.</p>
        </main>
      </header>
      {loading && <p>Cargando...</p>}
      {product?.title !== undefined && !loading && (
        <main className='dashboardFinance'>
          <section>
            <h2>Editar producto {product.title}</h2>
            <div className='dashboardForm'>
              <ProductEdit
                productId={query.productId as string}
                productPayload={product}
                categoriesPayload={categories}
              />
              <ProductDelete productId={query.productId as string} />
            </div>
          </section>
          <section>
            <h2>Grafica de Ventas</h2>
            <CUstomChart typeChart='Line' values={[2, 4, 7, 28, 10]} />
          </section>
          <aside>
            <h2>Ventas totales</h2>
            <p>500</p>
          </aside>
        </main>
      )}
      {product?.title === undefined && !loading && (
        <p>No se encontro este producto</p>
      )}
    </DashboardLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAllCategories();

  return {
    props: {
      categories: data,
    },
  };
};

// Dashboard Private Page and Rol Guard
// DashboardShowProduct.AuthDashboard = DashboardPrivateRoute;

export default DashboardShowProduct;
