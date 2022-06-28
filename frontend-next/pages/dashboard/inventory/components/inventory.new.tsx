import { CustomForm } from '@/components/form/form.component';
import { useState } from 'react';
import { InitialInventory, Inventory, inventoryAdapter } from '../adapters/inventory.adapter';
import { newInventory } from '../service/inventory.service';

interface Props {
    currentList: Inventory[],
    setNewList: (set: any) => void;
}

export const NewInventory = ({ currentList, setNewList }: Props) => {
  const [values, setValues] = useState();

  const inventorySubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Manejar las exepciones
    const { data, statusCode } = await newInventory(
      values as unknown as InitialInventory
    );

    setNewList([...currentList, inventoryAdapter(data)]);
  };

  return (
    <div className='dashboardForm'>
      <CustomForm
        setValueInputs={setValues}
        values={values}
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
