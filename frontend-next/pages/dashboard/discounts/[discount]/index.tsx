import { CustomForm } from '@/components/form/form.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router, { useRouter } from 'next/router';
import { DashboardLayout } from 'pages/dashboard/components/dashboard.layout';
import React, { useEffect, useState } from 'react';
import { Discount, discountAdapter } from '../adapters/discount.adapter';
import {
  deleteDiscount,
  getSpecificDiscount,
  updateDiscount,
} from '../services/discount.service';

const DiscountPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [discount, setDiscount] = useState<Discount>();
  const [values, setValues] = useState<any>();

  useEffect(() => {
    const getDiscount = async () => {
      setLoading(true);
      const { data, statusCode } = await getSpecificDiscount(
        query.discount as string
      );
      if (statusCode == STATUS_CODE.BAD_REQUEST) return;

      const adaptedDiscount = discountAdapter(data);
      setDiscount(adaptedDiscount);
      setLoading(false);
    };

    query.hasOwnProperty('discount') && getDiscount();
  }, [query]);

  const discountHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const { data, statusCode } = await updateDiscount(
      query.discount as string,
      values
    );

    // TODO: Manejar excepciones
  };

  const deleteDiscountHandler = async (discountId: string) => {
    const { data, statusCode } = await deleteDiscount(discountId);

    if(statusCode === STATUS_CODE.SUCCESS) return Router.push('/dashboard/discounts')
    //   TODO: Manejar excepeciones
  };

  return (
    <DashboardLayout>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faTags} />
        </div>
        <main>
          <span>Descuento</span>
          <p>Información relevante de este descuento.</p>
        </main>
      </header>
      {loading && <p>Cargando...</p>}
      {discount?.specialKey !== undefined && !loading && (
        <main className='dashboardFinance'>
          <section>
            <h2>Editar este producto</h2>
            <CustomForm
              setValueInputs={setValues}
              values={values}
              isEditingForm={true}
              inputs={[
                {
                  name: 'discount_specialKey',
                  type: 'text',
                  placeholder: 'Nombre del Descuento',
                  prevValue: discount.specialKey,
                },
                {
                  name: 'discount_percentage',
                  type: 'text',
                  placeholder: 'Porcentaje de descuento',
                  prevValue: discount.percentage,
                },
                {
                  name: 'discount_priceFloor',
                  type: 'number',
                  placeholder: 'Compra minima',
                  prevValue: discount.priceFloor,
                },
                {
                  name: 'discount_limitToApply',
                  type: 'number',
                  placeholder: 'Limitar usos',
                  prevValue: discount.limitToApply,
                },
                {
                  name: 'discount_expiresIn',
                  type: 'text',
                  placeholder: 'Fecha de expiración',
                  prevValue: discount.expiresIn,
                },
              ]}
              submitCallback={discountHandler}
              buttonMessage={'Guardar cambios'}
            />
            <button onClick={() => deleteDiscountHandler(discount.id as string)}>
              Borrar Descuento
            </button>
          </section>
          <section>
            <h2>Grafica de Usos</h2>
          </section>
          <aside>
            <h2>Usos totales</h2>
            <p>500</p>
          </aside>
        </main>
      )}
      {discount?.specialKey === undefined && !loading && (
        <p>No se encontro este descuento</p>
      )}
    </DashboardLayout>
  );
};

export default DiscountPage;
