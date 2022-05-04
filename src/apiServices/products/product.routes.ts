import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from './product.controller';
const routerProduct = express.Router();

routerProduct.post('/create_product', createProduct);
routerProduct.get('/get_products', getProducts);
routerProduct.get('/get_product', getProduct);
routerProduct.put('/update_product', updateProduct);
routerProduct.delete('/delete_product', deleteProduct);

export default routerProduct;
