import { CustomForm } from "@/components/form/form.component";
import { useState } from "react";

export const EmployEmployee = () => {
  const [values, setValues] = useState();

  const employEmployeeHandler = async(e: React.FormEvent) => {

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
        ]}
        submitCallback={employEmployeeHandler}
        buttonMessage={'Contratar'}
      />
    </div>
  );
};
