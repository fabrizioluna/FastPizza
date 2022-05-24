import { CustomForm } from "@/components/form/form.component";
import { useState } from "react";
import { Employee, employeeAdapter, InitialEmployee } from "../adapters/employee.adapter";
import { registerEmployee } from "../services/employee.service";

export const EmployEmployee = ({ curretListEmployees, setEmployees }: { curretListEmployees: Employee[], setEmployees: (set: any) => void }) => {
  const [values, setValues] = useState();

  const employEmployeeHandler = async(e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Manejar las exepciones
    const { data, statusCode } = await registerEmployee(values as unknown as InitialEmployee);
    const employeeAdapted = employeeAdapter(data);
    setEmployees([ ...curretListEmployees, employeeAdapted ]);
  }

  return (
    <div className='dashboardEmployeeEmploy'>
      <CustomForm
        setValueInputs={setValues}
        values={values}
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
            name: 'employee_role',
            type: 'text',
            placeholder: 'Rol del Empleado',
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
        ]}
        submitCallback={employEmployeeHandler}
        buttonMessage={'Contratar'}
      />
    </div>
  );
};
