import { Fragment } from 'react';
import { products_categories } from '../../../resources';

export const ProductsCategories = () => {
  return (
    <header>
      {products_categories.map((category) => (
        <Fragment>
          <li>{category}</li>
        </Fragment>
      ))}
    </header>
  );
};
