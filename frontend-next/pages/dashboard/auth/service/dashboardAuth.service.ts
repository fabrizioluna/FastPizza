import { client } from '@/config/axios.config';

export const loginDashboard = (employeeObject: any) => {
  return client
    .post('employee/login', employeeObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const refreshTokenEmployee = (employeeToken: string) => {
  return client
    .post(`employee/refreshtoken?token=${employeeToken}`)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
