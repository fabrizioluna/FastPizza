import { CustomForm } from '@/components/form/form.component';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';
import { useRef, useState } from 'react';

// TODO: Agregar un endpoint para actualizar algo de la cuenta.
export const Profile = ({ user }: { user: UserAdapted }) => {
  const [values, setValues] = useState();
  const formFieldsRef = useRef<any>([]);

  const editProfileHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='dashboardForm'>
      <h2>Configuración de cuenta</h2>
      <CustomForm
        setValueInputs={setValues}
        values={values}
        formFieldsRef={formFieldsRef}
        isEditingForm={true}
        formStyles={{}}
        inputs={[
          {
            name: 'user_name',
            type: 'text',
            prevValue: user.name,
          },
          {
            name: 'user_email',
            type: 'text',
            prevValue: user.email,
          },
          {
            name: 'user_password',
            type: 'password',
            prevValue: 'passwordDefault',
          },
          {
            name: 'user_address',
            type: 'text',
            prevValue: user.address,
          },
        ]}
        submitCallback={editProfileHandler}
        buttonMessage={'Guardar cambios'}
      />
    </div>
  );
};
