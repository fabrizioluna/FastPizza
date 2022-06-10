import { client } from '@/config/axios.config';

export const getAllLogs = () => {
  return client
    .get('logs/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
