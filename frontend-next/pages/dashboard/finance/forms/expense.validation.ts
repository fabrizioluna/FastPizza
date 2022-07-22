import { FormExpense } from "../types/finance.types";

export const expense_validation = (values: FormExpense) => {
    return [
      {
        type: 'string',
        value: values.expense_title.trim(),
        max: 30,
        min: 5,
        key: 'expense_title',
      },
      {
        type: 'string',
        value: values.expense_description.trim(),
        max: 50,
        min: 15,
        key: 'expense_description',
      },
      {
        type: 'number',
        max: 10000,
        min: 1,
        value: parseInt(values.expense_amount),
        key: 'expense_amount',
      },
    ];
  };