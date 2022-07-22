export interface InitialDiscount {
  _id?: string;
  discount_status: boolean;
  discount_specialKey: string;
  discount_priceFloor: number;
  discount_limitToApply: number;
  discount_percentage: number;
  discount_expiresIn: string;
}

export interface FormDiscount {
  discount_specialKey: string;
  discount_priceFloor: any;
  discount_limitToApply: any;
  discount_percentage: any;
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
