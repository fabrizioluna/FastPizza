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

export interface Finance {
  totalEarnedYear: number;
  totalEarnedMonth: number;
  totalEarnedDay: number;
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
}
