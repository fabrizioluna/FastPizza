import { CustomForm } from '@/components/form/form.component';
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
  const registerUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const singUpResponse = await singup(values as unknown as Credentials);
    if (singUpResponse.status === 200) {
      setPreviuosValues({ _id: singUpResponse.response._id });
      return setEnterCode(true);
    }
  };
  return (
    <div className='user_singup'>
      <h4>Registro de cuenta</h4>
      <CustomForm
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
