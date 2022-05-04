import { check } from 'express-validator';
import { validationFields as next } from '@/middlewares/validation.middleware';

export const orderValidations = {
  create: [
    check('order_buyer').not().isEmpty().isString(),
    check('order_products').not().isEmpty().isArray(),
    check('order_addressClient').not().isEmpty().isString(),
    next,
  ],
  get: [check('id').not().isEmpty().isString(), next],
};
