import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
  // UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';
import { diskStorage } from 'multer';
import { changeFilename } from 'src/product/utils/changeFilename.utils';
// import { JwtGuard } from 'src/user/jwt-guard';
import { EmployeeServices } from './employee.service';
import { EmployeeDoc } from './schema/employee.schema';

// @UseGuards(JwtGuard)
@Controller('/employee')
export class EmployeeController {
  constructor(private employeeServices: EmployeeServices) {}

  @Post('/create')
  @UseInterceptors(
    FileInterceptor('employee_profileimg', {
      storage: diskStorage({
        destination: './uploads/employees_assents',
        filename: changeFilename,
      }),
    }),
  )
  create(
    @Body() body: EmployeeDoc,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.employeeServices.createEmployee(
      body,
      image == undefined ? 'no-image' : image.filename,
      /* 
        If the client don't given us image profile... just we put in 'no-image' 
        and then in the frontend we can show or not the default image.
      */
    );
  }

  @Put('/update')
  @UseInterceptors(
    FileInterceptor('employee_profileimg', {
      storage: diskStorage({
        destination: './uploads/employees_assents',
        filename: changeFilename,
      }),
    }),
  )
  update(
    @Query('id') id: ObjectId,
    @Body() body: EmployeeDoc,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.employeeServices.updateEmployee(
      id,
      body,
      image == undefined ? 'no-image' : image.filename,
    );
  }

  @Post('/login')
  login(@Body() body: EmployeeDoc) {
    return this.employeeServices.loginEmployee(body);
  }

  @Post('/refreshtoken')
  refreshToken(@Query('token') token: string) {
    return this.employeeServices.refreshTokenEmployee(token);
  }

  @Get('/get')
  get(@Query('id') id: ObjectId) {
    return this.employeeServices.getEmployee(id);
  }

  @Get('/getall')
  getAll(@Query('limit') limit: number) {
    return this.employeeServices.getAllEmployees(limit);
  }

  @Delete('/delete')
  delete(@Query('id') id: ObjectId) {
    return this.employeeServices.deleteEmployee(id);
  }
}
