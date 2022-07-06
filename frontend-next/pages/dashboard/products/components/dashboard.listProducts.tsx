import { Paginator } from '@/components/paginator/paginator';
import { CustomTable } from '@/components/tables/table.component';
import Link from 'next/link';
import { Product } from 'pages/home/adapters/product.adapter';
import { Fragment, useState } from 'react';

export const ListProducts = ({ products }: { products: Product[] }) => {
  const [pagination, setPagination] = useState<number>(0);
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
        {products.slice(pagination, pagination + 10).map((product: Product) => (
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.discount}%</td>
            <td>{product.description}</td>
            <td>
              {/* TODO: Cuando este lista la vista de Producto de client, agregarlo. */}
              <Link href={``}>
                <span>Ver producto en tienda</span>
              </Link>
              <Link href={`products/${product._id}`}>
                <span>Editar producto</span>
              </Link>
            </td>
          </tr>
        ))}
        <Paginator
          arr={products}
          changePage={setPagination}
          currentPage={pagination}
          numberItemsPerPage={10}
        />
      </CustomTable>
    </Fragment>
  );
};
