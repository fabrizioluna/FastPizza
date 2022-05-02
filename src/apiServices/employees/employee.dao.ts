import { Employee } from './employee.model';
import { employeeTypes } from './employee.types';

export const EmployeeDao = {
  create: (employee_model: employeeTypes) => {
    return new Promise<employeeTypes>(async (resolve) => {
      const employee = new Employee(employee_model);
      employee.employee_joined = new Date();

      return resolve(await employee.save());
    });
  },
  get: (id: string) => {
    return new Promise<employeeTypes>(async (resolve, reject) => {
      const employee = await Employee.findById(id);
      if (!employee)
        return reject({ message: 'No se pudo encontrar a este empleado.' });
      return resolve(employee);
    });
  },
};
