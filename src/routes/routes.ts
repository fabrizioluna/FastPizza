import express from 'express';
import routerProduct from '../apiServices/products/product.routes';
const router = express.Router();

router.use('/product', routerProduct);

export default router;
