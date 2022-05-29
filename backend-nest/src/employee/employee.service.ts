import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { EmployeeLog } from './employee.log';
import { Employee, EmployeeDoc } from './schema/employee.schema';

@Injectable()
export class EmployeeServices {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDoc>,
    private employeeLog: EmployeeLog,
  ) {}

  async createEmployee(employeeObject: EmployeeDoc) {
    const Employee = { ...employeeObject, employee_joined: new Date() };

    this.employeeLog.triggerLog(
      'INSERT',
      `Se agrego un nuevo empleado con el nombre de ${
        employeeObject.employee_name + ' ' + employeeObject.employee_lastname
      }`,
      Employee,
    );

    return this.employeeModel.create(Employee);
  }

  getEmployee(employeeId: ObjectId) {
    return this.employeeModel.findById(employeeId);
  }

  getAllEmployees(limit) {
    return this.employeeModel.find().limit(limit !== 0 ? limit : 0);
  }

  async updateEmployee(employeeId: ObjectId, employeeObject: EmployeeDoc) {
    const Employee = await this.employeeModel.findByIdAndUpdate(employeeId, employeeObject, {
      new: true,
    });
    this.employeeLog.triggerLog(
      'UPDATE',
      `Se actualizo la información del empleado ${
        employeeObject.employee_name + ' ' + employeeObject.employee_lastname
      }`,
      Employee,
    );
    return Employee;
  }

  async deleteEmployee(employeeId: ObjectId) {
    const Employee = await this.employeeModel.findByIdAndDelete(employeeId);
    this.employeeLog.triggerLog(
      'UPDATE',
      `Se elimino la información del empleado ${
        Employee.employee_name + ' ' + Employee.employee_lastname
      }`,
      Employee,
    );

    return Employee;
  }
}
