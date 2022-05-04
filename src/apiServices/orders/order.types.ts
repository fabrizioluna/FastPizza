export interface orderTypes {
  order_envoice: string;
  order_buyer: string;
  //   order_products: [
  //     string
  //   ],
  //   order_employeeDelivery: string,
  //   order_employeeCreation: string
  order_status: boolean;
  order_creationDay: Date;
  order_deliveryDay: Date;
  order_timeFinish: number;
  order_methodPay: string;
  order_discountCode: number;
  order_discountApplied: number;
  order_addressClient?: string;
}
