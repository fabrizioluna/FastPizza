import { CustomForm } from '@/components/form/form.component';
import { Fragment, useState } from 'react';
import { createExpense } from '../service/finance.service';
import { Expense } from '../types/finance.types';

export const NewExpense = () => {
  const [values, setValues] = useState();

  const newExpenseHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { statusCode } = await createExpense(values as unknown as Expense);
    
  };

  return (
    <Fragment>
      <CustomForm
        setValueInputs={setValues}
        values={values}
        isEditingForm={false}
        inputs={[
          {
            name: 'expense_title',
            type: 'text',
            placeholder: 'Nombre del gasto',
          },
          {
            name: 'expense_description',
            type: 'text',
            placeholder: 'Descripción del gasto',
          },
          {
            name: 'expense_amount',
            type: 'text',
            placeholder: 'Monto del gasto',
          },
        ]}
        submitCallback={newExpenseHandler}
        buttonMessage={'Generar'}
      />
    </Fragment>
  );
};
