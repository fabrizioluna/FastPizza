import { CustomForm, resetInputs } from '@/components/form/form.component';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useRef, useState } from 'react';
import { expense_validation } from '../forms/expense.validation';
import { createExpense } from '../service/finance.service';
import { FormExpense } from '../types/finance.types';

export const NewExpense = () => {
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const [values, setValues] = useState<FormExpense>({
    expense_title: '',
    expense_description: '',
    expense_amount: 0,
  });
  const formFieldsRef = useRef<any>([]);

  const newExpenseHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(expense_validation(values))
      .then(async () => {
        const { statusCode } = await createExpense(values);

        if (statusCode !== STATUS_CODE.SUCCESS) {
          return setShowError({
            show: true,
            type: 'ERROR',
            message:
              'Ocurrió un error al registrar este gasto. Por favor intentelo nuevamente.',
          });
        }

        setShowError({
          show: true,
          message:
            'El gasto fue registrado correctamente.',
          type: 'SUCCESS',
        });
        resetInputs(formFieldsRef.current);
      })
      .catch(({ results }: ResponseFormValues) => {
        formFieldsRef.current
          .filter((formField: any) =>
            results.some((field) => formField.name === field.key)
          )
          .map((formField: any) => (formField.style.borderColor = 'red'));
      });
  };

  return (
    <div className='dashboardForm'>
      {showError.show && (
        <CustomMessage type={showError.type} message={showError.message}  />
      )}
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
        formStyles={{ display: 'block' }}
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
            type: 'number',
            placeholder: 'Monto del gasto',
          },
        ]}
        submitCallback={newExpenseHandler}
        buttonMessage={'Registrar nuevo gasto'}
      />
    </div>
  );
};
