import { client } from "@/config/axios.config";
import { FormExpense } from "../types/finance.types";

export const getAllFinance = () => {
  return client
    .get('finance/getallfinance')
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};

export const createExpense = (expenseObject: FormExpense) => {
  return client
    .post('finance/expense_create', expenseObject)
    .then((data) => {
      return { data: data.data, statusCode: 200 };
    })
    .catch((err) => {
      return { data: err.code, statusCode: err.response.status };
    });
};
