import { Paginator } from '@/components/paginator/paginator';
import { CustomTable } from '@/components/tables/table.component';
import { Fragment, useState } from 'react';
import { Employee } from '../types/employee.types';

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
                  {employee.image === 'no-image' ? (
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/IMG-default_profile.jpg`}
                    />
                  ) : (
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/${employee.image}`}
                    />
                  )}
                  <p>{employee.name}</p>
                </div>
              </td>
              <td>{employee.lastname}</td>
              <td>{employee.role.name}</td>
              <td>{employee.joined.slice(0, 10)}</td>
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
