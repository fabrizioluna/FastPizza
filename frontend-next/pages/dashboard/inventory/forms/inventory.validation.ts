import { FormInventory } from '../types/inventory.types';

export const inventory_validation = (values: FormInventory) => {
  return [
    {
      type: 'string',
      value: values.inventory_name.trim(),
      max: 50,
      min: 5,
      key: 'inventory_name',
    },
    {
      type: 'string',
      value: values.inventory_provider.trim(),
      max: 35,
      min: 5,
      key: 'inventory_provider',
    },
    {
      type: 'number',
      max: 10000,
      min: 1,
      value: parseInt(values.inventory_pieces),
      key: 'inventory_pieces',
    },
  ];
};
