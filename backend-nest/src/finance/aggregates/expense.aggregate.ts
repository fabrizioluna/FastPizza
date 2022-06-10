
export const aggregates_today = (day: number) => {
  return {
    expense_creationDay: day,
  };
};

export const aggregates_month = (month: string) => {
  return {
    expense_creationMonth: month,
  };
};

export const aggregates_year = (year: number) => {
  return {
    expense_creationYear: year,
  };
};

export const aggregates_all = (day: number, month: string, year: number) => {
  return {
    expense_creationDay: day,
    expense_creationMonth: month,
    expense_creationYear: year,
  };
};
