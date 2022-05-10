import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  CustomException,
  ResponseException,
} from 'src/utils/responses/custom-exception/error.response';
import {
  CustomResponse,
  ResponseHttp,
} from 'src/utils/responses/custom-success/success.response';
import { Employee, EmployeeDoc } from './schema/employee.schema';

@Injectable()
export class EmployeeServices {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDoc>,
  ) {}

  async createEmployee(props: EmployeeDoc): Promise<ResponseHttp> {
    try {
      const newEmployee = await this.employeeModel.create({
        employee_name: props.employee_name,
        employee_lastname: props.employee_lastname,
        employee_joined: new Date(),
        employee_payment: props.employee_payment,
        employee_role: props.employee_role,
      });

      return CustomResponse.success(
        'This employee has been create',
        newEmployee,
      );
    } catch (err) {
      throw new CustomException('Something has been wrong', err);
    }
  }

  getEmployee(id: ObjectId): Promise<ResponseHttp> {
    return this.employeeModel
      .findById(id)
      .then((employee) =>
        employee === null
          ? (new CustomException(
              'This employee is not exist in the database.',
            ) as unknown as ResponseHttp)
          : CustomResponse.success('Employee data', employee),
      )
      .catch(
        (err) =>
          new CustomException(
            'Something has been wrong',
            err,
          ) as unknown as ResponseHttp,
      );
  }

  async getAllEmployees(limit) {
    return await this.employeeModel.find().limit(limit !== 0 ? limit : 0);
  }

  updateEmployee(
    id: ObjectId,
    props: EmployeeDoc,
  ): Promise<CustomResponse | CustomException> {
    return this.employeeModel
      .findByIdAndUpdate(id, props, { new: true })
      .then((employee) =>
        CustomResponse.success('This employee has been modified', employee),
      )
      .catch((err) => new CustomException('Something has been wrong', err));
  }

  deleteEmployee(id: ObjectId): Promise<CustomResponse | CustomException> {
    return this.employeeModel
      .findByIdAndDelete(id)
      .then(() =>
        CustomResponse.success('This employee has been elimined', null),
      )
      .catch((err) => new CustomException('Something has been wrong', err));
  }
}
