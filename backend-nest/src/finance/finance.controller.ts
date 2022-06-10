import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { formatMonth } from 'src/order/utils/formatdate.utils';
import { StatisticsService } from 'src/statistics/statistics.service';
import { Today } from 'src/utils/today.utils';
import { FinanceService } from './finance.service';

@Controller('/finance')
export class FinanceController {
  constructor(
    private statisticsServices: StatisticsService,
    private financeServices: FinanceService,
  ) {}

  @Post('/expense_create')
  createExpense(@Body() expenseObject) {
    return this.financeServices.createExpense(expenseObject);
  }

  @Put('/expense_update')
  updateExpense(@Query('id') id: ObjectId, @Body() expenseObject) {
    return this.financeServices.updateExpense(id, expenseObject);
  }

  @Delete('/expense_delete')
  deleteExpense(@Query('id') id: ObjectId) {
    return this.financeServices.deleteExpense(id);
  }

  @Get('/getfinance')
  async getTotalEarned() {
    //   TODO: Hacer todo esto en una sola consulta.
    const byYear = await this.statisticsServices.getTotalEarnedYear(
      Today.year(),
    );
    const byMonth = await this.statisticsServices.getTotalEarnedMonth(
      Today.monthAsString(),
      Today.year(),
    );
    const byDay = await this.statisticsServices.getTotalEarnedToday();
    const expenses = await this.financeServices.getExpenseByDate(
      0,
      'empty',
      Today.year(),
    );

    return {
      totalEarnedYear: byYear[0],
      totalEarnedMonth: byMonth[0],
      totalEarnedDay: byDay[0],
      totalExpenses: expenses,
    };
  }
}
