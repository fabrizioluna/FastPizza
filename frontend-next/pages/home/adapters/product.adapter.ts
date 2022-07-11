export interface Product {
  _id: string,
  title: string;
  description: string;
  image: string;
  price: number;
  category: {
    _id: string;
    category_name: string;
  };
  discount: number;
}

export interface ProductDatabase {
  _id: string,
  product_name: string;
  product_description: string;
  product_image: string;
  product_price: number;
  product_category: string;
  product_discount: number;
}

// Product Adapter
export const productAdapter = (product: ProductDatabase) => {
  return {
    _id: product._id,
    title: product.product_name,
    description: product.product_description,
    image: product.product_image,
    price: product.product_price,
    category: product.product_category,
    discount: product.product_discount,
  };
};

