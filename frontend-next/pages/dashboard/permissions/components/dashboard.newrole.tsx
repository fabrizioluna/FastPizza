import { CustomForm } from '@/components/form/form.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useState } from 'react';
import { Roles, rolesAdapter } from '../adapters/permissions.adapter';
import { createRole } from '../service/permissions.service';

export const NewRole = ({
  currentRolesList,
  setNewRolesList,
}: {
  currentRolesList: Roles[];
  setNewRolesList: (set: any) => void;
}) => {
  const [values, setValues] = useState();
  const [error, setError] = useState<boolean>(false);

  const createRoleHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, statusCode } = await createRole(values as unknown as any);
    if (statusCode === STATUS_CODE.BAD_REQUEST) return setError(true);

    // Is all is cool... we pushed the new role 
    // in the roles Array to refresh the component RolesList.
    setNewRolesList([...currentRolesList, rolesAdapter(data)]);
  };

  return (
    <div className='dashboardForm'>
      {error && (
        <h4>
          Ocurrió un error al registrar este Rol. Verifica que este marcadas
          todas las casillas
        </h4>
      )}
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
        submitCallback={createRoleHandler}
        buttonMessage={'Registrar nuevo rol'}
      />
    </div>
  );
};
