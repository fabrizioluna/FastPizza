import { client } from '@/config/axios.config';

export const getDashboardProducts = () => {
  return client
    .get('product/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
