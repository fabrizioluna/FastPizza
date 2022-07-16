import { CustomForm } from '@/components/form/form.component';
import { useCallService } from '@/hooks/useCallService';
import { rolesAdapter } from 'pages/dashboard/permissions/adapters/permissions.adapter';
import { getAllRoles } from 'pages/dashboard/permissions/service/permissions.service';
import { useState } from 'react';
import {
  Employee,
  employeeAdapter,
  FormEmployee,
  InitialEmployee,
} from '../adapters/employee.adapter';
import { registerEmployee } from '../services/employee.service';

export const EmployEmployee = ({
  curretListEmployees,
  setEmployees,
}: {
  curretListEmployees: Employee[];
  setEmployees: (set: any) => void;
}) => {
  const [values, setValues] = useState<FormEmployee>();
  const { call }: any = useCallService(getAllRoles, rolesAdapter);

  const employEmployeeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Manejar las exepciones
    const { data, statusCode } = await registerEmployee(
      values as unknown as FormEmployee
    );
    const employeeAdapted = employeeAdapter(data);
    setEmployees([...curretListEmployees, employeeAdapted]);
  };

  const createRolesArray = () =>
    call.map((rol: any) => {
      // Create all roles we've in the database.
      return { text: rol.name, value: rol.id };
    });

  return (
    <div className='dashboardForm'>
      {call !== null && (
        <CustomForm
          setValueInputs={setValues}
          values={values}
          isEditingForm={false}
          formStyles={{ display: 'block' }}
          inputs={[
            {
              name: 'employee_name',
              type: 'text',
              placeholder: 'Nombre del Empleado',
            },
            {
              name: 'employee_lastname',
              type: 'text',
              placeholder: 'Apellidos del Empleado',
            },
            {
              name: 'employee_address',
              type: 'text',
              placeholder: 'Dirección',
            },
            {
              name: 'employee_password',
              type: 'text',
              placeholder: 'Contraseña del Empleado',
            },
            {
              name: 'employee_payment',
              type: 'number',
              placeholder: 'Pago quincenal del Empleado',
            },
            {
              name: 'employee_profileimg',
              type: 'file',
              placeholder: 'Imagen del Empleado',
            },
          ]}
          selects={[
            {
              label: 'Escoge el rol del empleado',
              name: 'employee_role',
              selectStyles: { width: '100%' },
              values: createRolesArray(), // Using own function to send the values in the custom form
            },
          ]}
          submitCallback={employEmployeeHandler}
          buttonMessage={'Registrar nuevo empleado'}
        />
      )}
    </div>
  );
};
