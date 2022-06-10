import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpenseDoc = Expense & Document;

@Schema()
export class Expense {
  @Prop()
  expense_update: string;

  @Prop()
  expense_amount: number;
  
  @Prop()
  expense_title: string;
  
  @Prop()
  expense_creationDay: number;
  
  @Prop()
  expense_creationMonth: string;
  
  @Prop()
  expense_creationYear: number;

  @Prop()
  expense_description: string;

  @Prop()
  expense_dateNow: number;
  
  @Prop()
  expense_customExpense: boolean;

}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
