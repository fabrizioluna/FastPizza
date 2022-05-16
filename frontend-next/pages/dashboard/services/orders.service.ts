import { client } from '@/config/axios.config';

export const getAllOrders = () => {
  return client
    .get('order/getall?type=asc')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
