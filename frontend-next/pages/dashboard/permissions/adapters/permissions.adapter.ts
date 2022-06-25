export interface InitialRoles {
  role_name: string;
  role_permissionsDelivery: boolean;
  role_permissionsDiscounts: boolean;
  role_permissionsEmployees: boolean;
  role_permissionsFinance: boolean;
  role_permissionsInventory: boolean;
  role_permissionsLogs: boolean;
  role_permissionsOrders: boolean;
  role_permissionsProducts: boolean;
  role_permissionsRoles: boolean;
  role_permissionsStatustics: boolean;
}

export interface Roles {
  name: string;
  permissionsDelivery: boolean;
  permissionsDiscounts: boolean;
  permissionsEmployees: boolean;
  permissionsFinance: boolean;
  permissionsInventory: boolean;
  permissionsLogs: boolean;
  permissionsOrders: boolean;
  permissionsProducts: boolean;
  permissionsRoles: boolean;
  permissionsStatustics: boolean;
}

export const rolesAdapter = (rolObject: InitialRoles): Roles => {
  return {
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
