export interface InitialEmployee {
  _id: string;
  employee_name: string;
  employee_lastname: string;
  employee_joined: string;
  employee_payment: number;
  employee_role: string;
}

export interface Employee {
  _id: string;
  name: string;
  lastname: string;
  joined: string;
  payment: number;
  role: string;
}

export const employeeAdapter = (employeeObject: InitialEmployee) => {
  return {
    _id: employeeObject._id,
    name: employeeObject.employee_name,
    lastname: employeeObject.employee_lastname,
    joined: employeeObject.employee_joined,
    payment: employeeObject.employee_payment,
    role: employeeObject.employee_role,
  };
};

export const employeeWithTokenAdapter = (employeeObject: InitialEmployee, token: string) => {
  return {
    _id: employeeObject._id,
    name: employeeObject.employee_name,
    lastname: employeeObject.employee_lastname,
    joined: employeeObject.employee_joined,
    payment: employeeObject.employee_payment,
    role: employeeObject.employee_role,
    token,
  };
};
