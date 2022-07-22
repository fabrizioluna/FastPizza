import { CustomForm } from '@/components/form/form.component';
import { CustomMessage } from '@/components/message/message.component';
import { PageHead } from '@/components/pageHead/pageHead.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router, { useRouter } from 'next/router';
import { DashboardContainer } from 'pages/dashboard/components/dashboard.container';
import { DashboardLayout } from 'pages/dashboard/components/dashboard.layout';
import React, { useEffect, useRef, useState } from 'react';
import { discountAdapter } from '../adapters/discount.adapter';
import {
  deleteDiscount,
  getSpecificDiscount,
  updateDiscount,
} from '../services/discount.service';
import { Discount, FormDiscount } from '../types/discounts.types';

// TODO: Esta vista tiene problemas de estilos.

const DiscountPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [discount, setDiscount] = useState<Discount>();
  const [values, setValues] = useState<FormDiscount>();
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

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

  const discountHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (values == undefined) {
      return setShowError({
        message: 'No se encontraron cambios para guardar.',
        show: true,
        type: 'ERROR',
      });
    }
    const { statusCode } = await updateDiscount(
      query.discount as string,
      values as unknown as FormDiscount
    );

    if (statusCode !== STATUS_CODE.SUCCESS) {
      return setShowError({
        show: true,
        type: 'ERROR',
        message:
          'Ocurrió un error al actualizar este descuento. Por favor intentelo nuevamente.',
      });
    }

    setShowError({
      show: true,
      message: 'El descuento fue actualizado satisfactoriamente.',
      type: 'SUCCESS',
    });
  };

  const deleteDiscountHandler = async (discountId: string) => {
    const { statusCode } = await deleteDiscount(discountId);

    if (statusCode === STATUS_CODE.SUCCESS)
      return Router.push('/dashboard/discounts');
  };

  return (
    <DashboardLayout>
      {loading && <PageHead titlePage='Panel de Empleado: Cargando...' />}
      {discount?.specialKey !== undefined && !loading && (
        <PageHead titlePage={`Editando descuento ${discount.specialKey}`} />
      )}
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
        <>
          <main className='dashboardContainers'>
            <DashboardContainer title='Editar este descuento'>
              <div className='dashboardForm'>
                {showError.show && (
                  <CustomMessage
                    type={showError.type}
                    message={showError.message}
                  />
                )}
                <CustomForm
                  setValueInputs={setValues}
                  values={values}
                  formFieldsRef={formFieldsRef}
                  formStyles={{ display: 'block' }}
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
                <button
                  onClick={() => deleteDiscountHandler(discount.id as string)}
                  id='buttonDeleteDiscount'
                >
                  Borrar Descuento
                </button>
              </div>
            </DashboardContainer>
          </main>
          <main className='dashboardContainers'>
            <DashboardContainer title='Usos totales del Descuento'>
              <p>500</p>
            </DashboardContainer>
          </main>
        </>
      )}
      {discount?.specialKey === undefined && !loading && (
        <p>No se encontro este descuento</p>
      )}
    </DashboardLayout>
  );
};

export default DiscountPage;
