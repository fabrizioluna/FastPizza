import express          from 'express';
import routerOrder      from '@/apiServices/orders/order.routes';
import routerProduct    from '@/apiServices/products/product.routes';
import routerUser       from '@/apiServices/user/user.routes';
import routerCart       from '@/apiServices/cart/cart.routes';
import routerEmployee   from '@/apiServices/employees/employee.routes';

const router = express.Router();

router.use('/product',  routerProduct);
router.use('/user',     routerUser);
router.use('/cart',     routerCart);
router.use('/employee', routerEmployee);
router.use('/order',    routerOrder);

export default router;
