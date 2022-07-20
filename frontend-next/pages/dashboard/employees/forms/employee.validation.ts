import { FormEmployee } from '../types/employee.types';

export const employee_validation = (values: FormEmployee) => {
  return [
    {
      type: 'string',
      value: values.employee_name.trim(),
      max: 15,
      min: 5,
      key: 'employee_name',
    },
    {
      type: 'string',
      value: values.employee_lastname.trim(),
      max: 25,
      min: 5,
      key: 'employee_lastname',
    },
    {
      type: 'string',
      max: 30,
      min: 10,
      value: values.employee_address.trim(),
      key: 'employee_address',
    },
    {
      type: 'string',
      value: values.employee_password.trim(),
      max: 35,
      min: 5,
      key: 'employee_password',
    },
    {
      type: 'number',
      value: parseInt(values.employee_payment),
      max: 100000,
      min: 1,
      custom: () => /^[0-9]*$/.exec(values.employee_payment),
      key: 'employee_payment',
    },
    {
      type: 'object',
      value: values.employee_profileimg,
      max: 35,
      min: 2,
      key: 'employee_profileimg',
    },
    {
      type: 'string',
      value: values.employee_role.trim(),
      max: 35,
      min: 2,
      key: 'employee_role',
    },
  ];
};
