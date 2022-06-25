import { CustomForm } from '@/components/form/form.component';
import { useState } from 'react';
import { createDashboardProduct } from '../services/product.service';

export const CreateProduct = () => {
  const [values, setValues] = useState();

  const registerProductHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Manejar las exepciones
    const { data, statusCode } = await createDashboardProduct(
      values as any
    );
    // const employeeAdapted = employeeAdapter(data);
    // setEmployees([...curretListEmployees, employeeAdapted]);
  };
  return (
    <div className='dashboardForm'>
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formStyles={{ display: 'block' }}
        isEditingForm={false}
        inputs={[
          {
            name: 'product_name',
            type: 'text',
            placeholder: 'Nombre del Producto',
          },
          {
            name: 'product_description',
            type: 'text',
            placeholder: 'Descripción del Producto',
          },
          {
            name: 'product_price',
            type: 'number',
            placeholder: 'Precio del Producto',
          },
          {
            name: 'product_discount',
            type: 'number',
            placeholder: 'Descuento del Producto',
          },
          {
            name: 'product_category',
            type: 'text',
            placeholder: 'Categoria del Producto',
          },
          {
            name: 'product_image',
            type: 'text',
            placeholder: 'Imagen del Producto',
          },
        ]}
        submitCallback={registerProductHandler}
        buttonMessage={'Registrar nuevo producto'}
      />
    </div>
  );
};
