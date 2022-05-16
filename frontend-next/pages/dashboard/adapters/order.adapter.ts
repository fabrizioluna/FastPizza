export interface InitialOrder {
  _id: string;
  order_envoice: string;
  order_status: boolean;
  order_creationDay: Date;
  order_discountCode: number;
  order_discountApplied: number;
  order_addressClient: string;
  order_totalAmount: number;
  order_products: InitialOrderProduct[];
}

export interface Order {
  _id: string;
  envoice: string;
  status: boolean;
  creationDay: Date;
  discountCode: number;
  discountApplied: number;
  addressClient: string;
  totalAmount: number;
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
    creationDay: orderObject.order_creationDay,
    discountCode: orderObject.order_discountCode,
    discountApplied: orderObject.order_discountApplied,
    addressClient: orderObject.order_addressClient,
    totalAmount: orderObject.order_totalAmount,
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
