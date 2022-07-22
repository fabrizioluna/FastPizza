import { CustomTable } from '@/components/tables/table.component';
import { Fragment } from 'react';
import { Inventory } from '../types/inventory.types';

interface Props {
  inventoryList: Inventory[];
}

export const InventoryList = ({ inventoryList }: Props) => {
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'No. Único',
          },
          {
            nameField: 'Insumo',
          },
          {
            nameField: 'Provedor',
          },
          {
            nameField: 'Piezas',
          },
          {
            nameField: 'Acciones',
          },
        ]}
      >
        {inventoryList.map((inv: Inventory, index: number) => (
          <tr key={index}>
            <td>{inv.uniqueNum}</td>
            <td>{inv.name}</td>
            <td>{inv.provider}</td>
            <td>{inv.pieces}</td>
            <td>
              <span>Editar insumo</span>
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
