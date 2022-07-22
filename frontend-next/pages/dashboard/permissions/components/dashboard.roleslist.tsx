import { CustomTable } from '@/components/tables/table.component';
import { Fragment } from 'react';
import { Roles } from '../types/roles.types';

interface RolesProps {
  currentList: Roles[];
}

export const RolesList = ({ currentList }: RolesProps) => {
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Nombre del Rol',
          },
          {
            nameField: 'Ordenes',
          },
          {
            nameField: 'Entregas',
          },
          {
            nameField: 'Empleados',
          },
          {
            nameField: 'Registros',
          },
          {
            nameField: 'Inventario',
          },
          {
            nameField: 'Finanzas',
          },
          {
            nameField: 'Descuentos',
          },
          {
            nameField: 'Productos',
          },
          {
            nameField: 'Privilegios',
          },
          {
            nameField: 'Estadisticas',
          },
          {
            nameField: 'Acciones',
          },
        ]}
      >
        {currentList.map((rol: Roles, index: number) => (
          <tr key={index}>
            <td>{rol.name}</td>
            <td>{rol.permissionsOrders ? 'Si' : 'No'}</td>
            <td>{rol.permissionsDelivery ? 'Si' : 'No'}</td>
            <td>{rol.permissionsEmployees ? 'Si' : 'No'}</td>
            <td>{rol.permissionsLogs ? 'Si' : 'No'}</td>
            <td>{rol.permissionsInventory ? 'Si' : 'No'}</td>
            <td>{rol.permissionsFinance ? 'Si' : 'No'}</td>
            <td>{rol.permissionsDiscounts ? 'Si' : 'No'}</td>
            <td>{rol.permissionsProducts ? 'Si' : 'No'}</td>
            <td>{rol.permissionsRoles ? 'Si' : 'No'}</td>
            <td>{rol.permissionsStatustics ? 'Si' : 'No'}</td>
            <td>
              <span>Ver información</span>
              <span>Editar rol</span>
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
