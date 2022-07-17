import { client } from '@/config/axios.config';

export const getAllProducts = () => {
  return client
    .get('product/getall')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getAllCategories = () => {
  return client
    .get('categories/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
