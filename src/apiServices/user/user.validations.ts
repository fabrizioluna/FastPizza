import { validationFields as next} from '@/middlewares/validation.middleware';
import { check } from 'express-validator';

export const userValidations = {
  register: [
    check(
      'user_name',
      'El nombre de usuario esta vacío o es muy corto(min: 3, max: 15).'
    )
      .not()
      .isEmpty()
      .isLength({ min: 3, max: 15 }),
    check(
      'user_password',
      'La password de usuario esta vacío o es muy corta(min: 5, max: 15).'
    )
      .not()
      .isEmpty()
      .isLength({ min: 5, max: 15 }),
    check('user_email', 'El email no tiene el formato correcto.')
      .not()
      .isEmpty()
      .isEmail(),
    next,
  ],
  get: [check('id', 'Se requiere el id del usuario.').not().isEmpty(), next],
  login: [check('name').not().isEmpty(), check('password').not().isEmpty, next],
};
