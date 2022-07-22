export interface InitialRoles {
  _id: string;
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

export interface FormRoles {
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
  id: string;
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
