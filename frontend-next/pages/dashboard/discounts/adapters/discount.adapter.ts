import { Discount, InitialDiscount } from '../types/discounts.types';

export const discountAdapter = (discountObject: InitialDiscount): Discount => {
  return {
    id: discountObject._id,
    status: discountObject.discount_status,
    specialKey: discountObject.discount_specialKey,
    priceFloor: discountObject.discount_priceFloor,
    limitToApply: discountObject.discount_limitToApply,
    percentage: discountObject.discount_percentage,
    expiresIn: discountObject.discount_expiresIn,
  };
};
