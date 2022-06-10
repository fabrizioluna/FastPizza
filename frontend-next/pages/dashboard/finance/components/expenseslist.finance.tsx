import { Fragment } from 'react';
import { Expense } from '../types/finance.types';

export const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  const getExpenseDay = (day: number, month: string, year: number) => {
    const monthByNumber = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Noviembre',
      'Diciembre',
    ];

    const monthTostring = monthByNumber.findIndex((mon) => mon === month);
    let getDays: any =
      new Date().valueOf() - new Date(year, monthTostring, day).valueOf();

    const segs = 1000;
    const mins = segs * 60;
    const hours = mins * 60;
    const days = hours * 24;
    const months = days * 30.416666666666668;
    const years = months * 12;

    const anos = Math.floor(getDays / years);

    getDays = getDays - anos * years;
    const meses = Math.floor(getDays / months);

    getDays = getDays - meses * months;
    const dias = Math.floor(getDays / days);

    getDays = getDays - dias * days;
    const horas = Math.floor(getDays / hours);

    return `Creado hace ${meses} meses, ${dias} dia y ${horas} horas`;
  };

  return (
    <Fragment>
      <ul>
        {expenses.map((expense: Expense) => (
          <li key={expense.id}>
            <p>{expense.title}</p>
            <p>{expense.description}</p>
            <p>${expense.amount}</p>
            <p>
              {getExpenseDay(
                expense.creationDay,
                expense.creationMonth,
                expense.creationYear
              )}
            </p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
