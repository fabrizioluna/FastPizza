export interface InitialEmployee {
  _id: string;
  employee_name: string;
  employee_lastname: string;
  employee_joined: string;
  employee_payment: number;
  employee_profileimg: string;
  employee_role: InitialEmployeeRole;
}

export interface FormEmployee {
  _id: string;
  employee_name: string;
  employee_lastname: string;
  employee_address: string;
  employee_password: string;
  employee_joined: string;
  employee_payment: any;
  employee_profileimg: string;
  employee_role: string;
}

export interface Employee {
  _id: string;
  name: string;
  lastname: string;
  joined: string;
  payment: number;
  image: string;
  role: EmployeeRole;
}

export interface InitialEmployeeRole {
  _id: string;
  role_name: string;
  role_permissionsOrders: boolean;
  role_permissionsDelivery: boolean;
  role_permissionsEmployees: boolean;
  role_permissionsInventory: boolean;
  role_permissionsFinance: boolean;
  role_permissionsStatustics: boolean;
  role_permissionsProducts: boolean;
  role_permissionsDiscounts: boolean;
  role_permissionsLogs: boolean;
  role_permissionsRoles: boolean;
}

export interface EmployeeRole {
  _id: string;
  name: string;
  permissionsOrders: boolean;
  permissionsDelivery: boolean;
  permissionsEmployees: boolean;
  permissionsInventory: boolean;
  permissionsFinance: boolean;
  permissionsStatustics: boolean;
  permissionsProducts: boolean;
  permissionsDiscounts: boolean;
  permissionsLogs: boolean;
  permissionsRoles: boolean;
}

export const employeeAdapter = (employeeObject: InitialEmployee) => {
  return {
    _id: employeeObject._id,
    name: employeeObject.employee_name,
    lastname: employeeObject.employee_lastname,
    joined: employeeObject.employee_joined,
    payment: employeeObject.employee_payment,
    image: employeeObject.employee_profileimg,
    role: {
      _id: employeeObject.employee_role._id,
      name: employeeObject.employee_role.role_name,
      permissionsOrders: employeeObject.employee_role.role_permissionsOrders,
      permissionsDelivery:
        employeeObject.employee_role.role_permissionsDelivery,
      permissionsEmployees:
        employeeObject.employee_role.role_permissionsEmployees,
      permissionsInventory:
        employeeObject.employee_role.role_permissionsInventory,
      permissionsFinance: employeeObject.employee_role.role_permissionsFinance,
      permissionsStatustics:
        employeeObject.employee_role.role_permissionsStatustics,
      permissionsProducts:
        employeeObject.employee_role.role_permissionsProducts,
      permissionsDiscounts:
        employeeObject.employee_role.role_permissionsDiscounts,
      permissionsLogs: employeeObject.employee_role.role_permissionsLogs,
      permissionsRoles: employeeObject.employee_role.role_permissionsRoles,
    },
  };
};

export const employeeWithTokenAdapter = (
  employeeObject: InitialEmployee,
  token: string
) => {
  return {
    _id: employeeObject._id,
    name: employeeObject.employee_name,
    lastname: employeeObject.employee_lastname,
    joined: employeeObject.employee_joined,
    payment: employeeObject.employee_payment,
    image: employeeObject.employee_profileimg,
    role: {
      _id: employeeObject.employee_role._id,
      name: employeeObject.employee_role.role_name,
      permissionsOrders: employeeObject.employee_role.role_permissionsOrders,
      permissionsDelivery:
        employeeObject.employee_role.role_permissionsDelivery,
      permissionsEmployees:
        employeeObject.employee_role.role_permissionsEmployees,
      permissionsInventory:
        employeeObject.employee_role.role_permissionsInventory,
      permissionsFinance: employeeObject.employee_role.role_permissionsFinance,
      permissionsStatustics:
        employeeObject.employee_role.role_permissionsStatustics,
      permissionsProducts:
        employeeObject.employee_role.role_permissionsProducts,
      permissionsDiscounts:
        employeeObject.employee_role.role_permissionsDiscounts,
      permissionsLogs: employeeObject.employee_role.role_permissionsLogs,
      permissionsRoles: employeeObject.employee_role.role_permissionsRoles,
    },
    token,
  };
};
