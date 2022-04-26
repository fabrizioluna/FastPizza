import { Product } from './product.model';
import { ProductTypes } from './product.types';

export const insertProduct = (params: ProductTypes) => {
  return new Promise<ProductTypes>((resolve, reject) => {
    const instanceProduct = new Product(params);
    instanceProduct.product_createdAt = new Date();
    instanceProduct
      .save()
      .then(() => resolve(instanceProduct))
      .catch(() => reject('Ocurrió un error en la solicitud'));
  });
};

export const callProducts = () => {
  return new Promise<Array<ProductTypes>>((resolve, reject) => {
    Product.find()
      .then((products: Array<ProductTypes>) => resolve(products))
      .catch(() => reject('No se pudo encontrar los productos.'));
  });
};

export const callProduct = (nameProduct: string) => {
  return new Promise<ProductTypes>((resolve, reject) => {
    Product.findOne({ product_name: nameProduct })
      .then((product: ProductTypes) =>
        product === null
          ? reject(
              'No se pudo encontrar el producto solicitado. Verifique su información'
            ) // Si la información es igual a null... entonces lo manejamos como un error.
          : resolve(product)
      )
      .catch(() =>
        reject(
          'No se pudo encontrar el producto solicitado. Verifique su información'
        )
      );
  });
};
// TODO: Retornar el producto actualizado
export const changeProduct = (nameProduct: string, props: ProductTypes) => {
  return new Promise<ProductTypes>((resolve, reject) => {
    Product.findOneAndUpdate(
      { product_name: nameProduct },
      {
        product_name: props.product_name,
        product_description: props.product_description,
        product_discount: props.product_discount,
        product_price: props.product_price,
        product_createAt: new Date(),
      }
    )
      .then((product: ProductTypes) =>
        product === null
          ? reject(
              'No se pudo encontrar el producto solicitado. Verifique su información'
            ) // Si la información es igual a null... entonces lo manejamos como un error.
          : resolve(product)
      )
      .catch(() =>
        reject(
          'No se pudo encontrar el producto solicitado. Verifique su información'
        )
      );
  });
};

export const removeProduct = (nameProduct: string) => {
  return new Promise<string>((resolve, reject) => {
    Product.findOneAndDelete(nameProduct)
      .then(() => resolve('Producto eliminado'))
      .catch(() => reject('Ocurrio un error en la solicitud.'));
  });
};
