import express from 'express';
import routerCart from '../apiServices/cart/cart.routes';
import routerEmployee from '../apiServices/employees/employee.routes';
import routerProduct from '../apiServices/products/product.routes';
import routerUser from '../apiServices/user/user.routes';
const router = express.Router();

router.use('/product', routerProduct);
router.use('/user', routerUser);
router.use('/cart', routerCart);
router.use('/employee', routerEmployee);

export default router;
