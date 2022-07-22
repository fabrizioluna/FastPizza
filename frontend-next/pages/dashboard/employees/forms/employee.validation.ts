import { FormEmployee } from '../types/employee.types';

/* 

  Here we'll define all input validations.

  To properly work, we'll need to pass these props.
  Type: This defined what type of expected value.
  Value: Only need the current value.
  Max: Max length of characters you expected to be this input.
    Don't worry if the value is a number or string.
    Just define the type you expected, in the case of type are
    number their will check the range in number, not the length 
    of string, in the other case with string will check the length of the string.
  Min: Min of the length you expected. Do it like the last one.
  Key: This prop is important, need to same the exact name of the name
    in the input reference. Don't work if not are equals.
  Custom: You can also pass a function with any validation
    customized you'll need. Preferent i recommended a regex expression.

*/
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
      /* 
        We can also use regular expressions to get custom validation.
        You just need a function and its regular expression condition. 
      */
      regex: () => /^[0-9]*$/.exec(values.employee_payment),
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
