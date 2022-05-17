import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Employee, EmployeeDoc } from './schema/employee.schema';

@Injectable()
export class EmployeeServices {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDoc>,
  ) {}

  async createEmployee(employeeObject: EmployeeDoc) {
    const Employee = { ...employeeObject, employee_joined: new Date() };
    return this.employeeModel.create(Employee);
  }

  getEmployee(employeeId: ObjectId) {
    return this.employeeModel.findById(employeeId);
  }

  async getAllEmployees(limit) {
    return await this.employeeModel.find().limit(limit !== 0 ? limit : 0);
  }

  updateEmployee(employeeId: ObjectId, employeeObject: EmployeeDoc) {
    return this.employeeModel.findByIdAndUpdate(employeeId, employeeObject, {
      new: true,
    });
  }

  deleteEmployee(employeeId: ObjectId) {
    return this.employeeModel.findByIdAndDelete(employeeId);
  }
}
