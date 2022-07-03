import { CustomForm } from '@/components/form/form.component';
import { UserAdapted } from 'pages/auth/singup/adapters/singup.adapter';
import { useState } from 'react';

export const Profile = ({ user }: { user: UserAdapted }) => {
  const [values, setValues] = useState();

  const editProfileHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='dashboardForm'>
      <h2>Configuración de cuenta</h2>
      <CustomForm
        setValueInputs={setValues}
        values={values}
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
