export interface User {
  _id: string;
  user_address: string;
  user_createdAt: Date;
  user_email: string;
  user_hasInitialDiscount: boolean;
  user_name: string;
  user_password: string;
  user_verifiedEmail: string;
}

export interface UserAdapted {
  id: string;
  address: string;
  createdAt: Date;
  email: string;
  hasInitialDiscount: boolean;
  name: string;
  password: string;
  verifiedEmail: string;
}

export const UserAdapter = (user: User): UserAdapted => {
  return {
    id: user._id,
    address: user.user_address,
    createdAt: user.user_createdAt,
    email: user.user_email,
    hasInitialDiscount: user.user_hasInitialDiscount,
    name: user.user_name,
    password: user.user_password,
    verifiedEmail: user.user_verifiedEmail,
  };
};
