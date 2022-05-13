import { Product } from 'pages/home/adapters/product.adapter';

// Custom filters to apply list products 
export const applyProduct = {
  getByCategory: (products: Product[], categorySearch: string): Product[] => {
    return products.filter(({ category }) => category.toLowerCase() === categorySearch.toLowerCase());
  },
  getBySearch: (products: Product[], word: string) => {
    return products.filter(({ title }) => title.toLowerCase().indexOf(word.toLowerCase()) != -1);
  },
  getByLimitPrice: (products: Product[], limitPrice: number) => {
    return products.filter(({ price }) => price < limitPrice);
  },
};
