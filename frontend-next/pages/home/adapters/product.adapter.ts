export interface Product {
  title: string;
  description: string;
  image: string;
  price: number;
  discount: number;
}

export interface ProductDatabase {
  product_name: string;
  product_description: string;
  product_image: string;
  product_price: number;
  product_discount: number;
}

// Product Adapter
export const productAdapter = (product: ProductDatabase) => {
  return {
    title: product.product_name,
    description: product.product_description,
    image: product.product_image,
    price: product.product_price,
    discount: product.product_discount,
  };
};

