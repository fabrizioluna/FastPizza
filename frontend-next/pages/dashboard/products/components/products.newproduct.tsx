import { CustomForm } from '@/components/form/form.component';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { useState } from 'react';
import { createDashboardProduct } from '../services/product.service';

export const CreateProduct = ({ categories }: { categories: Categories[] }) => {
  const [values, setValues] = useState();

  const createCategoriesArray = () =>
    categories.map((category: Categories) => {
      // Create all categories we've in the database.
      return { text: category.category_name, value: category._id };
    });

  const registerProductHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const bodyFormData = new FormData(values);
    console.log(bodyFormData)

    // TODO: Manejar las exepciones
    // const { data, statusCode } = await createDashboardProduct(values as any);
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
            name: 'product_image',
            type: 'file',
            placeholder: 'Imagen del Producto',
          },
        ]}
        selects={[
          {
            label: 'Escoge la categoria del producto',
            name: 'product_category',
            selectStyles: { width: '100%' },
            values: createCategoriesArray(), // Using own function to send the values in the custom form
          },
        ]}
        submitCallback={registerProductHandler}
        buttonMessage={'Registrar nuevo producto'}
      />
    </div>
  );
};
