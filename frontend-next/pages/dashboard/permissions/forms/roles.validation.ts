import { FormRoles } from '../types/roles.types';

export const roles_validation = (values: FormRoles) => {
  return [
    {
      type: 'string',
      value: values.role_name.trim(),
      max: 35,
      min: 5,
      key: 'role_name',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsDelivery),
      max: 10,
      min: 4,
      key: 'role_permissionsDelivery',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsDiscounts),
      max: 10,
      min: 4,
      key: 'role_permissionsDiscounts',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsEmployees),
      max: 10,
      min: 4,
      key: 'role_permissionsEmployees',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsFinance),
      max: 10,
      min: 4,
      key: 'role_permissionsFinance',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsInventory),
      max: 10,
      min: 4,
      key: 'role_permissionsInventory',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsLogs),
      max: 10,
      min: 4,
      key: 'role_permissionsLogs',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsOrders),
      max: 10,
      min: 4,
      key: 'role_permissionsOrders',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsProducts),
      max: 10,
      min: 4,
      key: 'role_permissionsProducts',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsRoles),
      max: 10,
      min: 4,
      key: 'role_permissionsRoles',
    },
    {
      type: 'boolean',
      value: Boolean(values.role_permissionsStatustics),
      max: 10,
      min: 4,
      key: 'role_permissionsStatustics',
    },
  ];
};
