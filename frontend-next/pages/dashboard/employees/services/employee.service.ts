import { client } from '@/config/axios.config';
import axios from 'axios';
import { FormEmployee } from '../types/employee.types';

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

export const registerEmployee = (employeeObject: FormEmployee) => {
  const formdata = new FormData();
  formdata.append('employee_name', employeeObject.employee_name);
  formdata.append('employee_lastname', employeeObject.employee_lastname);
  formdata.append('employee_address', employeeObject.employee_address);
  formdata.append('employee_password', employeeObject.employee_password);
  formdata.append('employee_payment', employeeObject.employee_payment);
  formdata.append('employee_role', employeeObject.employee_role);
  formdata.append('employee_profileimg', employeeObject.employee_profileimg);

  return axios
    .request({
      url: `${process.env.NEXT_PUBLIC_URL}/employee/create`,
      method: 'POST',
      headers: {
        Accept: '*/*',
      },
      data: formdata,
    })
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const updateEmployee = (employeeObject: any[], id: string) => {
  const formdata = new FormData();

  // We append all properties we received with a for loop
  for (const property in employeeObject) {
    formdata.append(property, employeeObject[property])
  }

  return axios
    .request({
      url: `${process.env.NEXT_PUBLIC_URL}/employee/update?id=${id}`,
      method: 'PUT',
      headers: {
        Accept: '*/*',
      },
      data: formdata,
    })
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
