import { client } from '@/config/axios.config';
import { FormDiscount } from '../types/discounts.types';

export const createDiscount = (discountObject: FormDiscount) => {
  return client
    .post('discount/create', discountObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getSpecificDiscount = (discountId: string) => {
  return client
    .get(`discount/get?id=${discountId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getDiscounts = () => {
  return client
    .get('discount/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const updateDiscount = (
  discountId: string,
  discountObject: FormDiscount
) => {
  return client
    .put(`discount/update?id=${discountId}`, discountObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const deleteDiscount = (discountId: string) => {
  return client
    .delete(`discount/delete?id=${discountId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
