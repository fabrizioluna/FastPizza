import express from 'express';
import { userController } from './user.controller';
import { userValidations } from './user.validations';
const routerUser = express.Router();

routerUser.post('/create_user', userValidations.register, userController.create);
routerUser.get('/get_user',    userValidations.get,      userController.get);

export default routerUser;

