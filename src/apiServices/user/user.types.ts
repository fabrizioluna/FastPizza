export interface userTypes {
  user_name: string;
  user_email: string;
  user_password: string;
  user_adress: string;
  user_hasInitialDiscount: boolean;
  user_verifiedEmail: string;
  user_imageProfile: string;
  user_role: any;
  user_cart: any;
  product_createdAt: Date;
}

export interface checkUserTypes {
  payload: userTypes;
  response: boolean;
}

export interface responseCreate {
  message: string;
  user: userTypes;
}

export interface errorResponse {
  message: string;
}
