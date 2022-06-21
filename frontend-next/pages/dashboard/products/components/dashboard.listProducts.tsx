import { CustomTable } from '@/components/tables/table.component';
import Link from 'next/link';
import { Product } from 'pages/home/adapters/product.adapter';
import { Fragment } from 'react';

export const ListProducts = ({ products }: { products: Product[] }) => {
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Nombre',
          },
          {
            nameField: 'Categoria',
          },
          {
            nameField: 'Precio',
          },
          {
            nameField: 'Descuento',
          },
          {
            nameField: 'Descripción',
          },
          {
            nameField: 'Acciones',
          },
        ]}
      >
        {products.map((product: Product) => (
        <tr key={product._id}>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>${product.price}</td>
          <td>{product.discount}%</td>
          <td>{product.description}</td>
          <td>
            {/* TODO: Cuando este lista la vista de Producto de client, agregarlo. */}
            <Link href={``}>
              <button>Ver producto en tienda</button>
            </Link>
            <Link href={`products/${product._id}`}>
              <button>Editar producto</button>
            </Link>
          </td>
        </tr>
      ))}
      </CustomTable>
    </Fragment>
  );
};
