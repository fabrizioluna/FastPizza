import { client } from '@/config/axios.config';

export interface Credentials {
  _id: string;
  user_name: string;
  user_email: string;
  user_address: string;
  user_password: string;
}

export const singup = (credentials: Credentials) => {
  return client
    .post('user/create', credentials)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const confirm_email = (id: string, code: { email_code: string }) => {
  const { email_code } = code;
  return client
    .post(`user/confirm_account?id=${id}&code=${email_code}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
