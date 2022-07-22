import { CustomForm, resetInputs } from '@/components/form/form.component';
import { showFormErrors } from '@/components/form/form.showErrors';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useRef, useState } from 'react';
import { createNewCategory } from '../services/product.service';
import { FormCategory } from '../types/products.types';

export const CreateCategory = () => {
  const [values, setValues] = useState<FormCategory>({
    category_name: '',
  });
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const registerCategoryHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check([
      {
        type: 'string',
        value: values.category_name.trim(),
        max: 30,
        min: 5,
        key: 'category_name',
      },
    ])
      .then(async() => {
        const { statusCode } = await createNewCategory(values as any);
        if (statusCode !== STATUS_CODE.SUCCESS) {
          return setShowError({
            show: true,
            type: 'ERROR',
            message:
              'Ocurrió un error al registrar esta categoria. Por favor intentelo nuevamente.',
          });
        }
  
        setShowError({
          show: true,
          message:
            'La categoria fue registrada correctamente.',
          type: 'SUCCESS',
        });
        resetInputs(formFieldsRef.current);

      })
      .catch(({ results }: ResponseFormValues) => {
        showFormErrors(formFieldsRef, results);
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
            name: 'category_name',
            type: 'text',
            placeholder: 'Nombre de la categoria',
          },
        ]}
        submitCallback={registerCategoryHandler}
        buttonMessage={'Registrar nueva categoria'}
      />
    </div>
  );
};
