import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type EmployeeDoc = Employee & Document;

@Schema()
export class Employee {
  @Prop({ unique: true })
  employee_name: string;

  @Prop()
  employee_lastname: string;
  
  @Prop()
  employee_profileImg: string;

  @Prop()
  employee_joined: Date;

  @Prop()
  employee_payment: number;

  @Prop()
  employee_uniqueCode: string;
  
  @Prop()
  employee_password: string;

  // @Prop({
  //   type: { type: mongoose.Schema.Types.ObjectId, ref: 'schedule' },
  // })
  // employee_schedule: string;

  // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }] })
  @Prop()
  employee_role: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
