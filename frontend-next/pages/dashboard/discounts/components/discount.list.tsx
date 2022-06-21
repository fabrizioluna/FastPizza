import { CustomTable } from '@/components/tables/table.component';
import Link from 'next/link';
import { Fragment } from 'react';
import { Discount } from '../adapters/discount.adapter';

export const ListDiscounts = ({ discounts }: { discounts: Discount[] }) => {
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Nombre',
          },
          {
            nameField: 'Porcentaje descuento',
          },
          {
            nameField: 'Compra minima',
          },
          {
            nameField: 'Uso por Cliente',
          },
          {
            nameField: 'Estado',
          },
          {
            nameField: 'Fecha de Expiración',
          },
          {
            nameField: 'Acciones',
          },
        ]}
      >
        {discounts.map((discount: Discount, index: number) => (
          <tr key={index}>
            <td>{discount.specialKey}</td>
            <td>{discount.percentage}%</td>
            <td>${discount.priceFloor}</td>
            <td>{discount.limitToApply}</td>
            <td>{discount.status}</td>
            <td>{discount.expiresIn}</td>
            <td>
              <Link href={`discounts/${discount.id}`}>
                <button>Editar descuento</button>
              </Link>
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
