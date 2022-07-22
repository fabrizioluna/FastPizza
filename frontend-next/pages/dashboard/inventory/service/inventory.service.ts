import { client } from '@/config/axios.config';
import { FormInventory } from '../types/inventory.types';

export const getInventory = () => {
  return client
    .get('inventory/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const newInventory = (inventoryObject: FormInventory) => {
  return client
    .post('inventory/create', inventoryObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
