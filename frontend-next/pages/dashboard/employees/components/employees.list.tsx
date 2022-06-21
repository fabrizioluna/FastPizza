import { CustomTable } from '@/components/tables/table.component';
import { Fragment } from 'react';
import { Employee } from '../adapters/employee.adapter';

export const ListEmployees = ({ employees }: { employees: Employee[] }) => {
  return (
    <Fragment>
      <CustomTable
        fields={[
          {
            nameField: 'Nombre',
          },
          {
            nameField: 'Apellidos',
          },
          {
            nameField: 'Cargo',
          },
          {
            nameField: 'Fecha de Ingreso',
          },
          {
            nameField: 'Pago',
          },
          {
            nameField: 'Acciones',
          },
        ]}
      >
        {employees.map((employee: Employee, index: number) => (
          <tr key={index}>
            <td>
              <div>
                <img src='https://imagenes.heraldo.es/files/image_654_v1/uploads/imagenes/2017/08/12/_zidanejpg_bae27af8.jpg' />{' '}
                <p>{employee.name}</p>
              </div>
            </td>
            <td>{employee.lastname}</td>
            <td>Programador JR</td>
            <td>16 de Mayo del 2022</td>
            <td>${employee.payment}</td>
            <td>
              <button>Ver información</button>
              <button>Editar empleado</button>
            </td>
          </tr>
        ))}
      </CustomTable>
    </Fragment>
  );
};
