import express from 'express';
import routerProduct from '../apiServices/products/product.routes';
import routerUser from '../apiServices/user/user.routes';
const router = express.Router();

router.use('/product', routerProduct);
router.use('/user', routerUser)

export default router;
