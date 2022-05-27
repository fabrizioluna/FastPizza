import { client } from '@/config/axios.config';
import { InitialDiscount } from '../adapters/discount.adapter';

interface DiscountObject {
  discount_specialKey: string;
  discount_priceFloor: number;
  discount_limitToApply: number;
  discount_percentage: number;
  discount_expiresIn: string;
}

export const createDiscount = (discountObject: DiscountObject) => {
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
  discountObject: InitialDiscount
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
