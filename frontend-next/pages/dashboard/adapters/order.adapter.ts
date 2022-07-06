export interface InitialOrder {
  _id: string;
  order_envoice: string;
  order_status: boolean;
  order_discountCode: number;
  order_discountApplied: number;
  order_addressClient: string;
  order_totalAmount: number;
  order_statusKitchen: boolean;
  order_statusKitchenFinished: boolean;
  order_statusDelivery: boolean;
  order_creationDay: number;
  order_creationMonth: string;
  order_creationYear: number;
  order_buyer: {
    user_name: string;
  };
  order_products: InitialOrderProduct[];
}

export interface Order {
  _id: string;
  envoice: string;
  status: boolean;
  discountCode: number;
  discountApplied: number;
  addressClient: string;
  totalAmount: number;
  statusKitchen: boolean;
  statusDelivery: boolean;
  statusKitchenFinished: boolean;
  creationDay: number;
  creationMonth: string;
  creationYear: number;
  buyer: string;
  products: OrderProduct[];
}

export interface InitialOrderProduct {
  _id: string;
  product_name: string;
  product_image: string;
  product_description: string;
  product_price: number;
  product_discount: number;
  product_createdAt: Date;
  product_category: string;
}

export interface OrderProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  discount: number;
  createdAt: Date;
  category: string;
}

export const orderAdapter = (orderObject: InitialOrder) => {
  return {
    _id: orderObject._id,
    status: orderObject.order_status,
    envoice: orderObject.order_envoice,
    discountCode: orderObject.order_discountCode,
    discountApplied: orderObject.order_discountApplied,
    statusKitchenFinished: orderObject.order_statusKitchenFinished,
    addressClient: orderObject.order_addressClient,
    statusKitchen: orderObject.order_statusKitchen,
    statusDelivery: orderObject.order_statusDelivery,
    totalAmount: orderObject.order_totalAmount,
    creationDay: orderObject.order_creationDay,
    creationMonth: orderObject.order_creationMonth,
    creationYear: orderObject.order_creationYear,
    buyer: orderObject.order_buyer.user_name,
    products: orderObject.order_products.map((product) =>
      productAdapter(product)
    ),
  };
};

export const productAdapter = (objectProduct: InitialOrderProduct) => {
  return {
    _id: objectProduct._id,
    name: objectProduct.product_name,
    image: objectProduct.product_image,
    description: objectProduct.product_description,
    price: objectProduct.product_price,
    discount: objectProduct.product_discount,
    createdAt: objectProduct.product_createdAt,
    category: objectProduct.product_category,
  };
};
