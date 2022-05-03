import express from 'express';
import { EmployeeController } from './employee.controller';
import { employeeValidations } from './employee.validations';
const routerEmployee = express.Router();

routerEmployee.post(
  '/create_employee',
  employeeValidations.register,
  EmployeeController.register
);
routerEmployee.get('/get_employee', employeeValidations.get, EmployeeController.get)

export default routerEmployee;
