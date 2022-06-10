import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  Statistics,
  StatisticsDoc,
} from 'src/statistics/schema/statistics.schema';
import { Today } from 'src/utils/today.utils';
import {
  aggregates_all,
  aggregates_month,
  aggregates_today,
  aggregates_year,
} from './aggregates/expense.aggregate';
import { Expense, ExpenseDoc } from './schema/expense.schema';

interface ExpenseObject {
  expense_update: string;
  expense_amount: number;
  expense_title: string;
  expense_description: string;
  expense_dateNow: number;
  expense_customExpense: boolean;
  expense_creationDay: number;
  expense_creationMonth: number;
  expense_creationYear: number;
}

@Injectable()
export class FinanceService {
  constructor(
    @InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDoc>,
    @InjectModel(Expense.name) private expenseModel: Model<ExpenseDoc>,
  ) {}

  createExpense(expenseObject: ExpenseObject) {
    return this.expenseModel.create({
      ...expenseObject,
      expense_dateNow: Date.now(),
      expense_update: Today.now(),
      expense_creationDay: Today.day(),
      expense_creationMonth: Today.monthAsString(),
      expense_creationYear: Today.year(),
      expense_customExpense: true,
    });
  }

  updateExpense(expense: ObjectId, expenseObject: ExpenseObject) {
    return this.expenseModel.findByIdAndUpdate(expense, expenseObject, {
      new: true,
    });
  }

  deleteExpense(expense: ObjectId) {
    return this.expenseModel.findOneAndDelete(expense);
  }

  getExpenseByDate(day: number = 0, month: string = 'empty', year: number = 0) {
    let condition: object = {};

    if (!!day) {
      condition = aggregates_today(day);
    } else if (month != 'empty') {
      condition = aggregates_month(month);
    } else if (!!year) {
      condition = aggregates_year(year);
    } else if (!!day && month != 'empty' && !!year) {
      condition = aggregates_all(day, month, year);
    }
    
    return this.expenseModel.aggregate([ { $match: condition } ]);
  }
}
