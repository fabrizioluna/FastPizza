import { client } from '@/config/axios.config';

export const updateUser = () => {
  return {};
};

export const getOrdersByUser = (userId: string) => {
  return client
    .get(`order/getorderbybuyer?id=${userId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
