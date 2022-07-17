import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import Router from 'next/router';
import { deleteDashboardProduct } from '../../services/product.service';

export const ProductDelete = ({ productId }: { productId: string }) => {
  const deleteProductHandler = async () => {
    const { statusCode } = await deleteDashboardProduct(productId as string);

    if (statusCode == STATUS_CODE.SUCCESS)
      return Router.push('/dashboard/products');
  };
  return (
    <button onClick={() => deleteProductHandler()}>Borrar Producto</button>
  );
};
