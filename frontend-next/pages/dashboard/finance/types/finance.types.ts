export interface InitialFinance {
  totalEarnedYear: {
    totalEarnedYear: number;
  };
  totalEarnedMonth: {
    totalEarnedMonth: number;
  };
  totalEarnedDay: {
    totalEarnedDay: number;
  };
  totalExpenses: [
    {
      _id: string;
      expense_update: string;
      expense_amount: number;
      expense_title: string;
      expense_creationDay: number;
      expense_creationMonth: string;
      expense_creationYear: number;
      expense_description: string;
      expense_dateNow: number;
      expense_customExpense: boolean;
    }
  ];
  totalStatistics: [];
}

export interface InitialExpense {
  _id: string;
  expense_update: string;
  expense_amount: number;
  expense_title: string;
  expense_creationDay: number;
  expense_creationMonth: string;
  expense_creationYear: number;
  expense_description: string;
  expense_dateNow: number;
  expense_customExpense: boolean;
}

export interface FormExpense {
  expense_amount: any;
  expense_title: string;
  expense_description: string;
}

export interface Expense {
  id: string;
  update: string;
  amount: number;
  title: string;
  creationDay: number;
  creationMonth: string;
  creationYear: number;
  description: string;
  dateNow: number;
  customExpense: boolean;
}

export interface TotalStatistics {
  completeStatistics: MonthStatistics[];
}

export interface MonthStatistics {
  month: number;
  totalEarnedThisMonth: number;
  totalOrdersThisMonth: number;
  totalOrdersByMonth: Month[];
}

export interface Month {
  day: number;
  monthString: string;
  totalEarnedByDay: number;
  totalOrdersByDay: number;
}

export interface Finance {
  totalExpenses: [
    {
      id: string;
      update: string;
      amount: number;
      title: string;
      creationDay: number;
      creationMonth: string;
      creationYear: number;
      description: string;
      dateNow: number;
      customExpense: boolean;
    }
  ];
  completeStatistics: MonthStatistics[];
}
