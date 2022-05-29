import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtGuard } from 'src/user/jwt-guard';
import { EmployeeServices } from './employee.service';
import { EmployeeDoc } from './schema/employee.schema';

// @UseGuards(JwtGuard)
@Controller('/employee')
export class EmployeeController {
  constructor(private employeeServices: EmployeeServices) {}

  @Post('/create')
  create(@Body() body: EmployeeDoc) {
    return this.employeeServices.createEmployee(body);
  }

  @Get('/get')
  get(@Query('id') id: ObjectId) {
    return this.employeeServices.getEmployee(id);
  }

  @Get('/getall')
  getAll(@Query('limit') limit: number) {
      return this.employeeServices.getAllEmployees(limit);
  }

  @Put('/update')
  update(@Query('id') id: ObjectId, @Body() body: EmployeeDoc) {
    return this.employeeServices.updateEmployee(id, body);
  }

  @Delete('/delete')
  delete(@Query('id') id: ObjectId) {
    return this.employeeServices.deleteEmployee(id);
  }
}
