export interface InitialDiscount {
  _id?: string;
  discount_status: boolean;
  discount_specialKey: string;
  discount_priceFloor: number;
  discount_limitToApply: number;
  discount_percentage: number;
  discount_expiresIn: string;
}

export interface Discount {
  id?: string;
  status: boolean;
  specialKey: string;
  priceFloor: number;
  limitToApply: number;
  percentage: number;
  expiresIn: string;
}

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
