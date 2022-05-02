import { validationFields as next } from '@/middlewares/validation.middleware';
import { check } from 'express-validator';

export const employeeValidations = {
  register: [
    check('employee_name')
      .not()
      .isEmpty()
      .isString()
      .isLength({ max: 15, min: 3 }),
    check('employee_lastname')
      .not()
      .isEmpty()
      .isString()
      .isLength({ max: 15, min: 3 }),
    check('employee_payment')
      .not()
      .isEmpty()
      .isNumeric()
      .isLength({ max: 15, min: 3 }),
    check('employee_role').not().isEmpty().isString(),
    next,
  ],
  get: [check('id').not().isEmpty().isString(), next],
};
