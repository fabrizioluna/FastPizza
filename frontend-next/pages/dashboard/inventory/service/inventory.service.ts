import { client } from '@/config/axios.config';
import { InitialInventory } from '../adapters/inventory.adapter';

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

export const newInventory = (inventoryObject: InitialInventory) => {
  return client
    .post('inventory/create', inventoryObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
