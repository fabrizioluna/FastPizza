import { CustomForm } from '@/components/form/form.component';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { Categories } from 'pages/all-products/types/allproducts.type';
import { Product } from 'pages/home/adapters/product.adapter';
import { Fragment, useRef, useState } from 'react';
import { updateDashboardProduct } from '../../services/product.service';
import { FormProduct } from '../../types/products.types';

export const ProductEdit = ({
  productId,
  productPayload,
  categoriesPayload,
}: {
  productId: string;
  productPayload: Product;
  categoriesPayload: Categories[];
}) => {
  const [values, setValues] = useState<FormProduct>();
  const [showMessage, setShowMessage] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const productHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (values == undefined)
      return setShowMessage({
        show: true,
        message: 'Error: No encontramos cambios para guardar.',
        type: 'ERROR',
      });

    const { statusCode } = await updateDashboardProduct(
      productId,
      values as any
    );

    if (statusCode !== STATUS_CODE.SUCCESS) {
      return setShowMessage({
        show: true,
        message:
          'Ocurrió un error al actualizar este producto. Por favor intentelo nuevamente.',
        type: 'ERROR',
      });
    }

    setShowMessage({
      show: true,
      message: 'El producto fue actualizado satisfactoriamente.',
      type: 'SUCCESS',
    });
  };

  const createCategoriesArray = () =>
    categoriesPayload.map((category: Categories) => {
      // Create all categories we've in the database.
      return { text: category.category_name, value: category._id };
    });
  return (
    <Fragment>
      <figure>
        <img
          src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/products_assents/${productPayload.image}`}
          alt={productPayload.title}
        />
      </figure>
      {showMessage.show && (
        <CustomMessage message={showMessage.message} type={showMessage.type} />
      )}
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
        formStyles={{ display: 'block' }}
        isEditingForm={true}
        inputs={[
          {
            name: 'product_name',
            type: 'text',
            placeholder: 'Nombre del Producto',
            prevValue: productPayload.title,
          },
          {
            name: 'product_description',
            type: 'text',
            placeholder: 'Descripción del Producto',
            prevValue: productPayload.description,
          },
          {
            name: 'product_price',
            type: 'number',
            placeholder: 'Precio del Producto',
            prevValue: productPayload.price,
          },
          {
            name: 'product_discount',
            type: 'number',
            placeholder: 'Descuento del Producto',
            prevValue: productPayload.discount,
          },
          {
            name: 'product_image',
            type: 'file',
            placeholder: 'Imagen del Producto',
            prevValue: '',
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
        submitCallback={productHandler}
        buttonMessage={'Guardar cambios'}
      />
    </Fragment>
  );
};
