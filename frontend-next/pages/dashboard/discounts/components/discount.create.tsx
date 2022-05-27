import { CustomForm } from '@/components/form/form.component';
import { Fragment, useState } from 'react';
import {
  Discount,
  discountAdapter,
  InitialDiscount,
} from '../adapters/discount.adapter';
import { createDiscount } from '../services/discount.service';
import { dateValidate } from '../utils/date-validate.util';

export const RegisterDiscount = ({
  currentListDiscounts,
  setListDiscounts,
}: {
  currentListDiscounts: Discount[];
  setListDiscounts: (set: any) => void;
}) => {
  const [values, setValues] = useState<InitialDiscount>({
    discount_expiresIn: '',
    discount_limitToApply: 0,
    discount_percentage: 0,
    discount_priceFloor: 0,
    discount_specialKey: '',
    discount_status: false,
  });

  const createDiscountHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    // TODO: Mostrar el mensaje dinamicamente.
    if (dateValidate(values.discount_expiresIn))
      return console.log('La fecha es igual');

    const { data, statusCode } = await createDiscount(values);
    const DiscountAdapted = discountAdapter(data);

    setListDiscounts([ ...currentListDiscounts, DiscountAdapted ]);

    // TODO: Manejar las excepciones.

    console.log(DiscountAdapted);
  };

  return (
    <Fragment>
      <CustomForm
        setValueInputs={setValues}
        values={values}
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
    </Fragment>
  );
};
