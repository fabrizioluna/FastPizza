import { client } from '@/config/axios.config';
import axios from 'axios';
import { FormProduct } from '../types/products.types';

export const createDashboardProduct = (values: any) => {
  return client
    .post('product/create', values)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

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

export const getDashboardProduct = (productId: string) => {
  return client
    .get(`product/get/${productId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const deleteDashboardProduct = (productId: string) => {
  return client
    .delete(`product/delete?id=${productId}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const createNewCategory = (category: any) => {
  return client
    .post(`categories/create?name=${category.category_name}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const createNewProduct = (productObject: FormProduct) => {
  const formdata = new FormData();
  formdata.append('product_name', productObject.product_name);
  formdata.append('product_price', productObject.product_price);
  formdata.append('product_discount', productObject.product_discount);
  formdata.append('product_category', productObject.product_category);
  formdata.append('product_description', productObject.product_description);
  formdata.append('product_image', productObject.product_image);

  return axios
    .request({
      url: `${process.env.NEXT_PUBLIC_URL}/product/create`,
      method: 'POST',
      headers: {
        Accept: '*/*',
      },
      data: formdata,
    })
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const updateDashboardProduct = (id: string, productObject: any[]) => {
  const formdata = new FormData();

  // We append all properties we received with a for loop
  for (const property in productObject) {
    formdata.append(property, productObject[property]);
  }

  return axios
    .request({
      url: `${process.env.NEXT_PUBLIC_URL}/product/update?id=${id}`,
      method: 'PUT',
      headers: {
        Accept: '*/*',
      },
      data: formdata,
    })
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
