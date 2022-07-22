import { CustomForm, resetInputs } from '@/components/form/form.component';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useRef, useState } from 'react';
import { inventoryAdapter } from '../adapters/inventory.adapter';
import { inventory_validation } from '../forms/inventory.validation';
import { newInventory } from '../service/inventory.service';
import { FormInventory, Inventory } from '../types/inventory.types';

interface Props {
  currentList: Inventory[];
  setNewList: (set: any) => void;
}

export const NewInventory = ({ currentList, setNewList }: Props) => {
  const [values, setValues] = useState<FormInventory>({
    inventory_name: '',
    inventory_pieces: 0,
    inventory_provider: '',
  });
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const inventorySubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(inventory_validation(values))
      .then(async() => {
        const { data, statusCode } = await newInventory(values);

        if (statusCode !== STATUS_CODE.SUCCESS) {
          return setShowError({
            show: true,
            type: 'ERROR',
            message:
              'Ocurrió un error al registrar este insumo. Por favor intentelo nuevamente.',
          });
        }

        setShowError({
          show: true,
          message:
            'El insumo fue registrado correctamente.',
          type: 'SUCCESS',
        });
        resetInputs(formFieldsRef.current);
        setNewList([...currentList, inventoryAdapter(data)]);
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
        isEditingForm={false}
        formStyles={{ display: 'block' }}
        inputs={[
          {
            name: 'inventory_name',
            type: 'text',
            placeholder: 'Nombre del insumo',
          },
          {
            name: 'inventory_provider',
            type: 'text',
            placeholder: 'Provedor de insumo',
          },
          {
            name: 'inventory_pieces',
            type: 'number',
            placeholder: 'Número de piezas actuales',
          },
        ]}
        submitCallback={inventorySubmitHandler}
        buttonMessage={'Registrar nuevo empleado'}
      />
    </div>
  );
};
