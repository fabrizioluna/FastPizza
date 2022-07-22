import { CustomTable } from '@/components/tables/table.component';
import Link from 'next/link';
import { Fragment } from 'react';
import { Discount } from '../types/discounts.types';

const StatusDiscount = {
  active: {
    value: 'Activo',
    styles: {
      background: 'rgb(63, 187, 104, 0.4)',
      borderRadius: '15px',
      textAlign: 'center' as 'center',
    },
  },
  expire: {
    value: 'Expirado',
    styles: {
      background: 'rgba(187, 63, 63, 0.4)',
      borderRadius: '15px',
      textAlign: 'center' as 'center',
    },
  },
};

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
            <td
              style={
                discount.status
                  ? StatusDiscount.active.styles
                  : StatusDiscount.expire.styles
              }
            >
              {discount.status
                ? StatusDiscount.active.value
                : StatusDiscount.expire.value}
            </td>
            <td>{discount.expiresIn}</td>
            <td>
              <Link href={`discounts/${discount.id}`}>
                <span>Editar descuento</span>
              </Link>
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
