import Link from 'next/link';
import { Discount } from '../adapters/discount.adapter';

export const ListDiscounts = ({ discounts }: { discounts: Discount[] }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Porcentaje descuento</th>
          <th>Compra minima</th>
          <th>Uso por Cliente</th>
          <th>Estado</th>
          <th>Fecha de Expiración</th>
        </tr>
      </thead>
      <tbody>
        {discounts.map((discount: Discount, index: number) => (
          <tr key={index}>
            <td>{discount.specialKey}</td>
            <td>{discount.percentage}</td>
            <td>{discount.priceFloor}</td>
            <td>{discount.limitToApply}</td>
            <td>{discount.status}</td>
            <td>{discount.expiresIn}</td>
            <td>
              <button>Ver información</button>
              <Link href={`discounts/${discount.id}`}><button>Editar descuento</button></Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
