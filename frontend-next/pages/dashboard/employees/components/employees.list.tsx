import { Employee } from '../adapters/employee.adapter';

export const ListEmployees = ({ employees }: { employees: Employee[] }) => {
  return (
    <table>
      <thead>
        <tr>
          {/* <th>Empleado</th> */}
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Cargo</th>
          <th>Fecha ingreso</th>
          <th>Pago</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee: Employee, index: number) => (
          <tr key={index}>
            {/* <td>1</td> */}
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
      </tbody>
    </table>
  );
};
