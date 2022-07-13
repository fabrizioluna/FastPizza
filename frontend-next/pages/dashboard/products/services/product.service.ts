import { client } from '@/config/axios.config';

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

export const updateDashboardProduct = (productId: string, values: any) => {
  return client
    .put(`product/update?id=${productId}`, values)
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

import axios from 'axios';
import { FormCreateProduct } from '../components/products.newproduct';
// import fs from 'fs';
// var fs = require('fs');

export const createNewProduct = (productObject: FormCreateProduct) => {
  let headersList = {
    Accept: '*/*',
  };

  console.log(productObject)

  let formdata = new FormData();
  formdata.append('product_name', productObject.product_name);
  formdata.append('product_price', productObject.product_price);
  formdata.append('product_discount', productObject.product_discount);
  formdata.append('product_category', productObject.product_category);
  formdata.append('product_description', productObject.product_description);
  formdata.append('product_image', productObject.product_image);

  console.log(formdata)
  let bodyContent = formdata;

  let reqOptions = {
    url: 'http://localhost:4000/product/create',
    method: 'POST',
    headers: headersList,
    data: bodyContent,
  };

  axios.request(reqOptions).then(function (response) {
    console.log(response.data);
  });
};
