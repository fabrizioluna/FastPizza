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
