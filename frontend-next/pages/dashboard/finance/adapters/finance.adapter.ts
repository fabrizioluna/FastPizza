import { InitialExpense, InitialFinance } from '../types/finance.types';

export const financeAdapter = (financeObject: InitialFinance) => {
  return {
    // totalEarnedDay: financeObject.totalEarnedDay.totalEarnedDay,
    // totalEarnedMonth: financeObject.totalEarnedMonth.totalEarnedMonth,
    // totalEarnedYear: financeObject.totalEarnedYear.totalEarnedYear,
    // totalStatistics: financeObject.totalStatistics,
    totalExpenses: financeObject.totalExpenses.map((expense: InitialExpense) =>
      expenseAdapter(expense)
    ),
  };
};

export const expenseAdapter = (expenseAdapter: InitialExpense) => {
  return {
    id: expenseAdapter._id,
    update: expenseAdapter.expense_update,
    amount: expenseAdapter.expense_amount,
    title: expenseAdapter.expense_title,
    creationDay: expenseAdapter.expense_creationDay,
    creationMonth: expenseAdapter.expense_creationMonth,
    creationYear: expenseAdapter.expense_creationYear,
    description: expenseAdapter.expense_description,
    dateNow: expenseAdapter.expense_dateNow,
    customExpense: expenseAdapter.expense_customExpense,
  };
};
