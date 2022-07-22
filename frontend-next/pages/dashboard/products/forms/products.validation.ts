import { FormProduct } from '../types/products.types';

export const products_validation = (values: FormProduct) => {
  return [
    {
      type: 'string',
      value: values.product_name.trim(),
      max: 50,
      min: 5,
      key: 'product_name',
    },
    {
      type: 'string',
      value: values.product_description.trim(),
      max: 70,
      min: 5,
      key: 'product_description',
    },
    {
      type: 'string',
      value: values.product_category.trim(),
      max: 35,
      min: 5,
      key: 'product_category',
    },
    {
      type: 'object',
      value: values.product_image,
      max: 35,
      min: 2,
      key: 'product_image',
    },
    {
      type: 'number',
      max: 10000,
      min: 1,
      value: parseInt(values.product_price),
      custom: () => /^[0-9]*$/.exec(values.product_price),
      key: 'product_price',
    },
    {
      type: 'number',
      max: 10000,
      min: 0,
      value: parseInt(values.product_discount),
      custom: () => /^[0-9]*$/.exec(values.product_discount),
      key: 'product_discount',
    },
  ];
};
