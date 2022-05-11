import { client } from '@/config/axios.config';

export const getProducts = () => {
  return client
    .get('product/getall?category=Pizzas')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};


