import { CustomForm } from '@/components/form/form.component';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { updateEmployee } from 'pages/dashboard/employees/services/employee.service';
import { Employee } from 'pages/dashboard/employees/types/employee.types';
import { useRef, useState } from 'react';

export const AccountForm = ({
  employeePayload,
}: {
  employeePayload: Employee;
}) => {
  const [values, setValues] = useState();
  const [showMessage, setShowMessage] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const updateEmployeeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (values == undefined)
      return setShowMessage({
        show: true,
        message: 'Error: No encontramos cambios para guardar.',
        type: 'ERROR',
      });

    const { statusCode } = await updateEmployee(values, employeePayload._id)

    if(statusCode === STATUS_CODE.SUCCESS) return setShowMessage({
      show: true,
      message: 'Tu información fue guardada y actualizada correctamente.',
      type: 'INFO',
    })
  };

  return (
    <div className='dashboardForm'>
      <figure>
        {employeePayload.image === 'no-image' ? (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/IMG-default_profile.jpg`}
            alt='imagenPruebaPerfil'
          />
        ) : (
          <img
            src={`${process.env.NEXT_PUBLIC_URL_DEVELOPMENT}/employees_assents/${employeePayload.image}`}
            alt='imagenPruebaPerfil'
          />
        )}
      </figure>
      {showMessage.show && (
        <CustomMessage message={showMessage.message} type={showMessage.type} />
      )}
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
        isEditingForm={true}
        formStyles={{ display: 'block' }}
        inputs={[
          {
            name: 'employee_name',
            type: 'text',
            placeholder: 'Nombre',
            disableInput: true,
            prevValue: employeePayload.name,
          },
          {
            name: 'employee_lastname',
            type: 'text',
            placeholder: 'Apellidos',
            disableInput: true,
            prevValue: employeePayload.lastname,
          },
          {
            name: 'employee_password',
            type: 'text',
            placeholder: 'Contraseña',
            prevValue: '',
          },
          {
            name: 'employee_payment',
            type: 'number',
            placeholder: 'Pago quincenal',
            disableInput: true,
            prevValue: employeePayload.payment,
          },
          {
            name: 'employee_profileimg',
            type: 'file',
            placeholder: 'Imagen de Perfil',
            prevValue: ''
          },
        ]}
        // selects={[
        //   {
        //     label: 'Escoge el rol del empleado',
        //     name: 'employee_role',
        //     selectStyles: { width: '100%' },
        //     values: createRolesArray(), // Using own function to send the values in the custom form
        //   },
        // ]}
        submitCallback={updateEmployeeHandler}
        buttonMessage={'Actualizar información'}
      />
    </div>
  );
};
