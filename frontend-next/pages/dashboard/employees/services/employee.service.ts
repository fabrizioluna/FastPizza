import { client } from '@/config/axios.config';
import { Employee, InitialEmployee } from '../adapters/employee.adapter';

export const getAllEmployees = () => {
  return client
    .get('employee/getall?limit=100')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const registerEmployee = (employeeObject: InitialEmployee) => {
  return client
    .post('employee/create', employeeObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
