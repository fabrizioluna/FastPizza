import { InitialRoles, Roles } from "../types/roles.types";


export const rolesAdapter = (rolObject: InitialRoles): Roles => {
  return {
    id: rolObject._id,
    name: rolObject.role_name,
    permissionsDelivery: rolObject.role_permissionsDelivery,
    permissionsDiscounts: rolObject.role_permissionsDiscounts,
    permissionsEmployees: rolObject.role_permissionsEmployees,
    permissionsFinance: rolObject.role_permissionsFinance,
    permissionsInventory: rolObject.role_permissionsInventory,
    permissionsLogs: rolObject.role_permissionsLogs,
    permissionsOrders: rolObject.role_permissionsOrders,
    permissionsProducts: rolObject.role_permissionsProducts,
    permissionsRoles: rolObject.role_permissionsRoles,
    permissionsStatustics: rolObject.role_permissionsStatustics,
  };
};
