import { CustomForm } from '@/components/form/form.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router, { useRouter } from 'next/router';
import { DashboardLayout } from 'pages/dashboard/components/dashboard.layout';
import { Product, productAdapter } from 'pages/home/adapters/product.adapter';
import { useEffect, useState } from 'react';
import {
  deleteDashboardProduct,
  getDashboardProduct,
  updateDashboardProduct,
} from '../services/product.service';

const DashboardShowProduct = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(true);
  const [values, setValues] = useState();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const { data, statusCode } = await getDashboardProduct(
        query.productId as string
      );
      if (statusCode == STATUS_CODE.BAD_REQUEST) return;

      const adaptedProduct = productAdapter(data);
      setProduct(adaptedProduct);
      setLoading(false);
    };

    query.hasOwnProperty('productId') && getProduct();
  }, [query]);

  const productHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, statusCode } = await updateDashboardProduct(
      query.productId as string,
      values
    );

    // TODO: Manejar excepciones
    if (statusCode == STATUS_CODE.BAD_REQUEST) return;
  };

  const deleteProductHandler = async () => {
    const { statusCode } = await deleteDashboardProduct(
      query.productId as string
    );

    if (statusCode == STATUS_CODE.SUCCESS)
      return Router.push('/dashboard/products');
  };

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
              <CustomForm
                setValueInputs={setValues}
                values={values}
                isEditingForm={true}
                inputs={[
                  {
                    name: 'product_name',
                    type: 'text',
                    placeholder: 'Nombre del Producto',
                    prevValue: product.title,
                  },
                  {
                    name: 'product_description',
                    type: 'text',
                    placeholder: 'Descripción del Producto',
                    prevValue: product.description,
                  },
                  {
                    name: 'product_price',
                    type: 'number',
                    placeholder: 'Precio del Producto',
                    prevValue: product.price,
                  },
                  {
                    name: 'product_discount',
                    type: 'number',
                    placeholder: 'Descuento del Producto',
                    prevValue: product.discount,
                  },
                  {
                    name: 'product_category',
                    type: 'text',
                    placeholder: 'Categoria del Producto',
                    prevValue: product.category,
                  },
                  {
                    name: 'product_image',
                    type: 'text',
                    placeholder: 'URL de la image',
                    prevValue: product.image,
                  },
                ]}
                submitCallback={productHandler}
                buttonMessage={'Guardar cambios'}
              />
              <button onClick={() => deleteProductHandler()}>
                Borrar Producto
              </button>
            </div>
          </section>
          <section>
            <h2>Grafica de Ventas</h2>
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

export default DashboardShowProduct;
