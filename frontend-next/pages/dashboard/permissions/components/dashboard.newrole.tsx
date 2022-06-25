import { CustomForm } from '@/components/form/form.component';
import { useState } from 'react';

export const NewRole = () => {
  const [values, setValues] = useState();

  const employEmployeeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Manejar las exepciones
    //   const { data, statusCode } = await registerEmployee(values as unknown as InitialEmployee);
    //   const employeeAdapted = employeeAdapter(data);
    //   setEmployees([ ...curretListEmployees, employeeAdapted ]);
  };

  console.log(values);

  return (
    <div className='dashboardForm'>
      <CustomForm
        setValueInputs={setValues}
        values={values}
        isEditingForm={false}
        formStyles={{ display: 'grid' }}
        inputs={[
          {
            name: 'role_name',
            type: 'text',
            placeholder: 'Nombre del Rol',
          },
          {
            name: 'role_permissionsOrders',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Ordenes?',
            radioLabelStyles: { fontSize: '20px', paddingTop: '1.5rem' },
            radioOptions: [
              {
                name: 'role_permissionsOrders',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsOrders',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsDelivery',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Entregas?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsDelivery',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsDelivery',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsEmployees',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Empleados?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsEmployees',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsEmployees',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsInventory',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Inventario?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsInventory',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsInventory',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsFinance',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Finanzas?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsFinance',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsFinance',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsStatustics',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Estadisticas?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsStatustics',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsStatustics',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsProducts',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Productos?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsProducts',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsProducts',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsDiscounts',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Descuentos?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsDiscounts',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsDiscounts',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsLogs',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Registros?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsLogs',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsLogs',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
          {
            name: 'role_permissionsRoles',
            type: 'radio',
            radioLabel: '¿Deseas dar acceso a Privilegios?',
            radioLabelStyles: { fontSize: '20px' },
            radioOptions: [
              {
                name: 'role_permissionsRoles',
                label: 'Permitir',
                value: true,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
              {
                name: 'role_permissionsRoles',
                label: 'Denegar',
                value: false,
                radioInputLabelStyles: {
                  fontSize: '15px',
                  paddingLeft: '1rem',
                },
                radioInputStyles: {
                  width: '18px',
                  marginTop: '0rem',
                  marginLeft: '1rem',
                },
              },
            ],
          },
        ]}
        submitCallback={employEmployeeHandler}
        buttonMessage={'Registrar nuevo rol'}
      />
    </div>
  );
};
