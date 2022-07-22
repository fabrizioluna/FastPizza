import { FormDiscount } from '../types/discounts.types';

const todayDate = new Date();

export const discounts_validation = (values: FormDiscount) => {
  return [
    {
      type: 'string',
      value: values.discount_specialKey.trim(),
      max: 25,
      min: 5,
      key: 'discount_specialKey',
    },
    {
      type: 'number',
      value: parseInt(values.discount_limitToApply),
      max: 30,
      min: 1,
      key: 'discount_limitToApply',
    },
    {
      type: 'number',
      max: 100,
      min: 1,
      value: parseInt(values.discount_percentage),
      key: 'discount_percentage',
    },
    {
      type: 'number',
      value: parseInt(values.discount_priceFloor),
      max: 10000,
      min: 1,
      key: 'discount_priceFloor',
    },
    {
      type: 'string',
      value: values.discount_expiresIn,
      max: 40,
      min: 1,
      //   Custom validation
      custom: () =>
        values.discount_expiresIn !== todayDate.toISOString().slice(0, 10),
      key: 'discount_expiresIn',
    },
  ];
};
