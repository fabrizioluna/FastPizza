import { Paginator } from '@/components/paginator/paginator';
import { CustomTable } from '@/components/tables/table.component';
import { Fragment, useState } from 'react';
import { Employee } from '../adapters/employee.adapter';

export const ListEmployees = ({ employees }: { employees: Employee[] }) => {
  const [pagination, setPagination] = useState<number>(0);
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
        {employees
          .slice(pagination, pagination + 10)
          .map((employee: Employee, index: number) => (
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
                <span>Ver información</span>
                <span>Editar empleado</span>
              </td>
            </tr>
          ))}
        <Paginator
          arr={employees}
          changePage={setPagination}
          currentPage={pagination}
          numberItemsPerPage={10}
        />
      </CustomTable>
    </Fragment>
  );
};
