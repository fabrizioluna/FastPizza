import { CustomTable } from '@/components/tables/table.component';
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

    return `${meses} meses, ${dias} dia y ${horas} horas`;
  };

  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Tiulo',
          },
          {
            nameField: 'Descripción',
          },
          {
            nameField: 'Gasto',
          },
          {
            nameField: 'Fecha de Registro',
          },
        ]}
      >
        {expenses.map((expense: Expense) => (
          <tr key={expense.id}>
            <td>{expense.title}</td>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>
              {getExpenseDay(
                expense.creationDay,
                expense.creationMonth,
                expense.creationYear
              )}
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
