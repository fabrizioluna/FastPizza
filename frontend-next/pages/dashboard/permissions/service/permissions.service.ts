import { client } from "@/config/axios.config";

export const createRole = (roleObject: any) => {
  return client
    .post('roles/create', roleObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const getAllRoles = () => {
  return client
    .get('roles/getall')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
