import express from 'express';
import { cartController } from './cart.controller';
import { cartValidations } from './cart.validations';
const routerCart = express.Router();

routerCart.post('/insert_element', cartValidations.insert, cartController.insert);

export default routerCart;

