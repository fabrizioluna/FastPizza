import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from 'src/log/logs.service';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { EmployeeController } from './employee.controller';
import { EmployeeLog } from './employee.log';
import { EmployeeServices } from './employee.service';
import { Employee, EmployeeSchema } from './schema/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeServices, LogsService, EmployeeLog],
})
export class EmployeeModule {}
