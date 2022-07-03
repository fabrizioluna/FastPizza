import { client } from '@/config/axios.config';

export interface SinginCredentials {
  user_name: string;
  user_password: string;
}

export const singin = (credencials: SinginCredentials) => {
  return client
    .post('user/login', credencials)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const confirm_accountByUsername = (name: string, code: string) => {
  console.log(name, code)
  return client
    .post(`user/confirm_accountbyusername?name=${name}&code=${code}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getUser = (userId: string) => {
  return client
    .get('user/get/' + userId)
    .then((data) => data)
    .catch((err) => err.response.status);
};
