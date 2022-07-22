import { CustomForm, resetInputs } from '@/components/form/form.component';
import { showFormErrors } from '@/components/form/form.showErrors';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { useRef, useState } from 'react';
import { products_validation } from '../forms/products.validation';
import { createNewProduct } from '../services/product.service';
import { FormProduct } from '../types/products.types';

export const CreateProduct = ({ categories }: { categories: Categories[] }) => {
  const [values, setValues] = useState<FormProduct>({
    product_name: '',
    product_description: '',
    product_discount: 0,
    product_price: 0,
    product_image: '',
    product_category: '',
  });
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const registerProductHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(products_validation(values)).then(async() => {
      // TODO: Actualizar la lista de productos.
      const { data, statusCode } = await createNewProduct(values);

      if (statusCode !== STATUS_CODE.SUCCESS) {
        return setShowError({
          show: true,
          type: 'ERROR',
          message:
            'Ocurrió un error al registrar este producto. Por favor intentelo nuevamente.',
        });
      }

      setShowError({
        show: true,
        message:
          'El producto fue registrado correctamente.',
        type: 'SUCCESS',
      });
      resetInputs(formFieldsRef.current);
    }).catch(({ results }: ResponseFormValues) => {
      // It is only called if there are errors.
      showFormErrors(formFieldsRef, results);
    })

  };

  const createCategoriesArray = () =>
    categories.map((category: Categories) => {
      // Create all categories we've in the database.
      return { text: category.category_name, value: category._id };
    });

  return (
    <div className='dashboardForm'>
      {showError.show && (
        <CustomMessage type={showError.type} message={showError.message} />
      )}
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
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
