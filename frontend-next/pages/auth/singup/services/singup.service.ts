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
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const confirm_email = (id: string, code: { email_code: string }) => {
  const { email_code } = code;
  return client
    .post(`user/confirm_account?id=${id}&code=${email_code}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
