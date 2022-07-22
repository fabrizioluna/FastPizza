import { CustomForm, resetInputs } from '@/components/form/form.component';
import { showFormErrors } from '@/components/form/form.showErrors';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useRef, useState } from 'react';
import { discountAdapter } from '../adapters/discount.adapter';
import { discounts_validation } from '../forms/discounts.validation';
import { createDiscount } from '../services/discount.service';
import { Discount, FormDiscount } from '../types/discounts.types';

export const RegisterDiscount = ({
  currentListDiscounts,
  setListDiscounts,
}: {
  currentListDiscounts: Discount[];
  setListDiscounts: (set: any) => void;
}) => {
  const [values, setValues] = useState<FormDiscount>({
    discount_expiresIn: '',
    discount_limitToApply: 0,
    discount_percentage: 0,
    discount_priceFloor: 0,
    discount_specialKey: '',
  });
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const createDiscountHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(discounts_validation(values))
      .then(async () => {
        const { data, statusCode } = await createDiscount(values);

        if (statusCode !== STATUS_CODE.SUCCESS) {
          return setShowError({
            show: true,
            type: 'ERROR',
            message:
              'Ocurrió un error al registrar este descuento. Por favor intentelo nuevamente.',
          });
        }

        resetInputs(formFieldsRef.current);
        const DiscountAdapted = discountAdapter(data);
        setListDiscounts([...currentListDiscounts, DiscountAdapted]);

        setShowError({
          show: true,
          message: 'El descuento fue registrado satisfactoriamente.',
          type: 'SUCCESS',
        });
      })
      .catch(({ results }: ResponseFormValues) => {
        showFormErrors(formFieldsRef, results);
      });
  };

  return (
    <div className='dashboardForm'>
      {showError.show && (
        <CustomMessage type={showError.type} message={showError.message} />
      )}
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
        formStyles={{ display: 'block' }}
        isEditingForm={false}
        inputs={[
          {
            name: 'discount_specialKey',
            type: 'text',
            placeholder: 'Nombre del cupón',
          },
          {
            name: 'discount_percentage',
            type: 'number',
            placeholder: 'Porcentaje de descuento',
          },
          {
            name: 'discount_priceFloor',
            type: 'number',
            placeholder: 'Compra minima para hacer válido',
          },
          {
            name: 'discount_limitToApply',
            type: 'number',
            placeholder: 'Cupones disponibles por persona',
          },
          {
            name: 'discount_expiresIn',
            type: 'date',
            placeholder: 'Fecha de expiración',
          },
        ]}
        submitCallback={createDiscountHandler}
        buttonMessage={'Registrar cupón'}
      />
    </div>
  );
};
