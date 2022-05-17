import { client } from '@/config/axios.config';

export interface OrderTypes {
  order_buyer: string;
  order_status: boolean;
  order_discountCode: number;
  order_discountApplied: number;
  order_addressClient: string;
  order_products: string[];
  order_totalAmount: number;
}

export const sendOrder = (orderObject: any) => {
  return client
    .post('order/create', orderObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getOrder = () => {
  return client
    .get('order/getall?type=asc')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
