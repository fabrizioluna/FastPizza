import { client } from '@/config/axios.config';

export const getAllEmployees = () => {
  return client
    .get('employee/getall?limit=2')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
