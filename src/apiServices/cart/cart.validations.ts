import { check } from 'express-validator';
import { validationFields as next } from '@/middlewares/validation.middleware';

export const cartValidations = {
  insert: [
    check('id').not().isEmpty().isString(),
    check('products').not().isEmpty().isArray(),
    next,
  ],
};
