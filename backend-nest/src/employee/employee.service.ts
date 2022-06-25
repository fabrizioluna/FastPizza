import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync, hashSync } from 'bcryptjs';
import { Model, ObjectId } from 'mongoose';
import { EmployeeLog } from './employee.log';
import { Employee, EmployeeDoc } from './schema/employee.schema';
import { employeeUniqueCode } from './utils/employee.uniquecode';

interface EmployeeToken {
  employee_id: string;
  name: string;
  lastname: string;
}

@Injectable()
export class EmployeeServices {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDoc>,
    private employeeLog: EmployeeLog,
    private jwtService: JwtService,
  ) {}

  async createEmployee(employeeObject: EmployeeDoc) {
    console.log(employeeObject)
    const Employee = {
      ...employeeObject,
      employee_joined: new Date(),
      employee_uniqueCode: employeeUniqueCode(),
      employee_password: await hashSync(employeeObject.employee_password, 12),
    };

    this.employeeLog.triggerLog(
      'INSERT',
      `Se agrego un nuevo empleado con el nombre de ${
        employeeObject.employee_name + ' ' + employeeObject.employee_lastname
      }`,
      Employee,
    );

    return this.employeeModel.create(Employee);
  }

  async loginEmployee(employeeObject: EmployeeDoc) {
    const { employee_uniqueCode, employee_password } = employeeObject;
    const employee = await this.employeeModel.findOne({
      employee_uniqueCode: employee_uniqueCode,
    });

    if (!compareSync(employee_password, employee.employee_password))
      throw new HttpException('INVALID_PASSWORD', 400);

    const payload = {
      employee_id: employee_uniqueCode,
      name: employee.employee_name,
      lastname: employee.employee_lastname,
    };
    const jwTokenDashboard = this.jwtService.sign(payload);

    return {
      employee: employee,
      token: jwTokenDashboard,
    };
  }

  async refreshTokenEmployee(token: string) {
    const employeeDecode: EmployeeToken = (await this.jwtService.decode(
      token,
    )) as unknown as EmployeeToken;
    const employee = await this.employeeModel.findOne({
      employee_uniqueCode: employeeDecode.employee_id,
    });
    const jwTokenDashboard = this.jwtService.sign({
      employee_id: employee.employee_uniqueCode,
      name: employee.employee_name,
      lastname: employee.employee_lastname,
    });

    return {
      employee: employee,
      token: jwTokenDashboard,
    };
  }

  getEmployee(employeeId: ObjectId) {
    return this.employeeModel.findById(employeeId).populate('employee_role');
  }

  getAllEmployees(limit) {
    return this.employeeModel
      .find()
      .limit(limit !== 0 ? limit : 0)
      .populate('employee_role');
  }

  async updateEmployee(employeeId: ObjectId, employeeObject: EmployeeDoc) {
    const Employee = await this.employeeModel.findByIdAndUpdate(
      employeeId,
      employeeObject,
      {
        new: true,
      },
    );
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
