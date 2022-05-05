import { UserCreateDto } from "src/user/dto/user.dto";

export class Adapter {
  constructor() {}

  static User(user: UserCreateDto) {
    return {
      id: user._id,
      name: user.user_name,
      email: user.user_email,
      address: user.user_address,
      cart: user.user_cart,
      image: user.user_imageProfile,
      initialDiscount: user.user_hasInitialDiscount,
    };
  }

  static Cart(user: UserCreateDto) {
    return {
      id: user._id,
      name: user.user_name,
      email: user.user_email,
      address: user.user_address,
      cart: user.user_cart,
      image: user.user_imageProfile,
      initialDiscount: user.user_hasInitialDiscount,
    };
  }
}
