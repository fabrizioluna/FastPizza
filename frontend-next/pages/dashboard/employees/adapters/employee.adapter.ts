import { InitialEmployee } from "../types/employee.types";

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
