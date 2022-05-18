import { client } from '@/config/axios.config';

export const getAllOrders = () => {
  return client
    .get('order/getallordersbystatus')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getAllOrdersByDelivery = () => {
  return client
    .get('order/getallbydelivery')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
