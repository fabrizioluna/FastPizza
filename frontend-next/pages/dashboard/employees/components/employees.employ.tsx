import { CustomForm, FormCustom } from '@/components/form/form.component';
import { useCallService } from '@/hooks/useCallService';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { rolesAdapter } from 'pages/dashboard/permissions/adapters/permissions.adapter';
import { getAllRoles } from 'pages/dashboard/permissions/service/permissions.service';
import { useRef, useState } from 'react';
import { EmployeeRole, FormEmployee } from '../types/employee.types';
import { registerEmployee } from '../services/employee.service';
import {
  ResponseFormValues,
  ResponseHandler,
} from '@/components/form/formHandler/form.types.formHandler';
import { employeeAdapter } from '../adapters/employee.adapter';

export const EmployEmployee = ({
  curretListEmployees,
  setEmployees,
}: {
  curretListEmployees: EmployeeRole[];
  setEmployees: (set: any) => void;
}) => {
  const [values, setValues] = useState<FormEmployee>({
    _id: '',
    employee_address: '',
    employee_joined: '',
    employee_lastname: '',
    employee_name: '',
    employee_password: '',
    employee_payment: 0,
    employee_profileimg: '',
    employee_role: '',
  });
  const formFieldsRef = useRef<any>([]);
  const { call }: any = useCallService(getAllRoles, rolesAdapter);

  const employEmployeeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // We use this to handler values of the custom form.
    FormValuesHandler.check([
      {
        type: 'string',
        value: values.employee_name.trim(),
        max: 15,
        min: 5,
        key: 'employee_name',
      },
      {
        type: 'string',
        value: values.employee_lastname.trim(),
        max: 25,
        min: 5,
        key: 'employee_lastname',
      },
      {
        type: 'string',
        max: 30,
        min: 10,
        value: values.employee_address.trim(),
        key: 'employee_address',
      },
      {
        type: 'string',
        value: values.employee_password.trim(),
        max: 35,
        min: 5,
        key: 'employee_password',
      },
      {
        type: 'string',
        value: parseInt(values.employee_payment),
        max: 20,
        min: 2,
        custom: () => /^[0-9]*$/.exec(values.employee_payment),
        key: 'employee_payment',
      },
      {
        type: 'file',
        value: values.employee_profileimg,
        max: 35,
        min: 2,
        key: 'employee_profileimg',
      },
      {
        type: 'string',
        value: values.employee_role.trim(),
        max: 35,
        min: 2,
        key: 'employee_role',
      },
    ])
      .then(async () => {
        // TODO: Manejar las exepciones
        const { data, statusCode } = await registerEmployee(
          values as unknown as FormEmployee
        );

        const employeeAdapted = employeeAdapter(data);
        setEmployees([...curretListEmployees, employeeAdapted]);
      })
      .catch(({ results }: ResponseFormValues) => {
        console.log(results)
        // And then if has errors...
        formFieldsRef.current
          .filter((formField: any) =>
            results.some((field) => formField.name === field.key))
          .map((formField: any) => (formField.style.borderColor = 'red'));
        // We setting a borderColor in all inputs on have errors.
      });
  };

  const createRolesArray = () =>
    call.map((rol: any) => {
      // Create all roles we've in the database.
      return { text: rol.name, value: rol.id };
    });

  return (
    <div className='dashboardForm'>
      {call !== null && (
        <FormCustom
          setValueInputs={setValues}
          formFieldsRef={formFieldsRef}
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
              type: 'text',
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
