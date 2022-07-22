import { CustomForm, resetInputs } from '@/components/form/form.component';
import { ResponseFormValues } from '@/components/form/formHandler/form.types.formHandler';
import { FormValuesHandler } from '@/components/form/formHandler/form.valuesHandler';
import { CustomMessage } from '@/components/message/message.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useRef, useState } from 'react';
import { rolesAdapter } from '../adapters/permissions.adapter';
import { createRole } from '../service/permissions.service';
import { FormRoles, Roles } from '../types/roles.types';
import { RolesInputs } from './forms/roles.inputs';
import { roles_validation } from './forms/roles.validation';

export const NewRole = ({
  currentRolesList,
  setNewRolesList,
}: {
  currentRolesList: Roles[];
  setNewRolesList: (set: any) => void;
}) => {
  const [values, setValues] = useState<FormRoles>({
    role_name: '',
    role_permissionsDelivery: false,
    role_permissionsDiscounts: false,
    role_permissionsEmployees: false,
    role_permissionsFinance: false,
    role_permissionsInventory: false,
    role_permissionsLogs: false,
    role_permissionsOrders: false,
    role_permissionsProducts: false,
    role_permissionsRoles: false,
    role_permissionsStatustics: false,
  });
  const [showError, setShowError] = useState<{
    show: boolean;
    message: string;
    type: string;
  }>({ show: false, message: '', type: '' });
  const formFieldsRef = useRef<any>([]);

  const createRoleHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    FormValuesHandler.check(roles_validation(values))
      .then(async () => {
        const { data, statusCode } = await createRole(values);

        if (statusCode !== STATUS_CODE.SUCCESS) {
          return setShowError({
            show: true,
            type: 'ERROR',
            message:
              'Ocurrió un error al registrar este Rol. Por favor intentelo nuevamente.',
          });
        }

        setShowError({
          show: true,
          message: 'El Rol fue registrado correctamente.',
          type: 'SUCCESS',
        });
        resetInputs(formFieldsRef.current);
        setNewRolesList([...currentRolesList, rolesAdapter(data)]);
      })
      .catch(({ results }: ResponseFormValues) => {
        formFieldsRef.current
          .filter((formField: any) =>
            results.some((field) => formField.name === field.key)
          )
          .map((formField: any) => (formField.style.borderColor = 'red'));
        setShowError({
          show: true,
          type: 'ERROR',
          message:
            'Ocurrió un error. Verifica que hayas seleccionado al menos una casilla por opción para continuar.',
        });
      });
  };

  return (
    <div className='dashboardForm'>
      {showError.show && (
        <CustomMessage type={showError.type} message={showError.message} />
      )}
      <CustomForm
        setValueInputs={setValues}
        formFieldsRef={formFieldsRef}
        values={values}
        isEditingForm={false}
        formStyles={{ display: 'grid' }}
        inputs={RolesInputs}
        submitCallback={createRoleHandler}
        buttonMessage={'Registrar nuevo rol'}
      />
    </div>
  );
};
