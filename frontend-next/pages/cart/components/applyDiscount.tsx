import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { Fragment, useState } from 'react';
import { validateDiscount } from '../services/discount.service';
import { Amounts } from './orderDetails';

export const ApplyDiscount = ({
  orderAmount,
  initialOrderPrice,
  changeTotalAmount,
}: {
  orderAmount: number;
  initialOrderPrice: Amounts;
  changeTotalAmount: (set: any) => void;
}) => {
  const [value, setValue] = useState<any>({ vDiscount: '' });
  const [messageDiscount, setMessageDiscount] = useState<string>('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const applyDiscountHandler = async () => {
    const { data, statusCode } = await validateDiscount({
      order_amount: orderAmount,
      discount_specialKey: value.vDiscount,
    });

    if (data.status !== STATUS_CODE.SUCCESS) {
      if (data.message === 'INVALID_DISCOUNT')
        return setMessageDiscount(
          'El descuento que has introducido no existe.'
        );
      else if (data.message === 'DISCOUNT_PRICEFLOOR_NOT_VALID')
        return setMessageDiscount(
          'No has completado el monto minimo para usar este descuento.'
        );
      else if (data.message === 'DISCOUNT_EXPIRE')
        return setMessageDiscount(
          'El descuento que has introducido ha caducado.'
        );
    }

    changeTotalAmount({
      ...initialOrderPrice,
      totalAmount: data.amountWithDiscount,
    });
    setMessageDiscount('El descuento fue aplicado existosamente.');
  };

  return (
    <Fragment>
      {messageDiscount.length >= 1 && (
        <CustomMessage message={`${messageDiscount}`} type='INFO' />
      )}
      <input
        type='text'
        name='vDiscount'
        placeholder='Aplica tu descuento'
        onChange={onChangeInput}
      />
      <button onClick={() => applyDiscountHandler()}>Aplicar</button>
    </Fragment>
  );
};
