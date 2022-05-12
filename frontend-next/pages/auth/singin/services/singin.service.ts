import { client } from '@/config/axios.config';

export interface SinginCredentials {
    user_name: string;
    user_password: string;
  }

export const singin = (credencials: SinginCredentials) => {
  return client
    .post('user/login', credencials)
    .then((data) => data.data)
    .catch((err) => console.log(err));
};
