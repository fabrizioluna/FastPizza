import { FormAuth } from '../types/auth.types';

export const auth_validation = (values: FormAuth) => {
  return [
    {
      type: 'string',
      value: values.employee_uniqueCode.trim(),
      max: 12,
      min: 5,
      key: 'employee_uniqueCode',
    },
    {
      type: 'string',
      value: values.employee_password.trim(),
      max: 60,
      min: 5,
      key: 'employee_password',
    },
  ];
};
