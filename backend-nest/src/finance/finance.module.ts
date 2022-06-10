import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Statistics, StatisticsSchema } from 'src/statistics/schema/statistics.schema';
import { StatisticsService } from 'src/statistics/statistics.service';
import { FinanceController } from './finance.controller';
import { FinanceService } from './finance.service';
import { Expense, ExpenseSchema } from './schema/expense.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Statistics.name, schema: StatisticsSchema }]),
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
  ],
  controllers: [FinanceController],
  providers: [FinanceService, StatisticsService],
})
export class FinanceModule {}
