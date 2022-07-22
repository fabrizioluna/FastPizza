import { CustomForm } from '@/components/form/form.component';
import { useRef } from 'react';
import { Credentials, singup } from '../services/singup.service';

interface RegisterProps {
  setValues: (set: any) => void;
  values: any;
  setPreviuosValues: (set: any) => void;
  setEnterCode: (set: boolean) => void;
}

export const RegisterForm = ({
  setValues,
  values,
  setPreviuosValues,
  setEnterCode,
}: RegisterProps) => {
  const formFieldsRef = useRef<any>([]);

  const registerUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, statusCode } = await singup(values as unknown as Credentials);
    if (statusCode === 200) {
      setPreviuosValues({ _id: data._id });
      return setEnterCode(true);
    }
  };
  return (
    <div className='user_singup'>
      <h4>Registro de cuenta</h4>
      <CustomForm
        isEditingForm={false}
        formStyles={{}}
        formFieldsRef={formFieldsRef}
        setValueInputs={setValues}
        values={values}
        inputs={[
          {
            name: 'user_name',
            type: 'text',
            placeholder: 'Nombre de Usuario',
          },
          {
            name: 'user_email',
            type: 'text',
            placeholder: 'Correo electronico',
          },
          {
            name: 'user_address',
            type: 'text',
            placeholder: 'Dirección',
          },
          {
            name: 'user_password',
            type: 'password',
            placeholder: 'Contraseña',
          },
        ]}
        submitCallback={registerUserHandler}
        buttonMessage={'Registrarme'}
      />
    </div>
  );
};
