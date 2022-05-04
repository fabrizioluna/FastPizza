import express from 'express';
import { orderController } from './order.controller';
import { orderValidations } from './order.validations';
const routerOrder = express.Router();

routerOrder.post('/create_order', orderValidations.create, orderController.create)
routerOrder.get('/get_order', orderValidations.get, orderController.get)

export default routerOrder;
