import { CustomForm } from '@/components/form/form.component';
import { Layout } from '@/components/layout';
import React, { useState } from 'react';
import { User, UserAdapted, UserAdapter } from './adapters/singup.adapter';
import { confirm_email, Credentials, singup } from './services/singup.service';

const SingUp = () => {
  const [values, setValues] = useState();
  const [valuesSecond, setValuesSecond] = useState();
  const [previuosValues, setPreviuosValues] = useState<{ _id: string }>();
  const [enterCode, setEnterCode] = useState<boolean>(false);

  const loginUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const singUpResponse = await singup(values as unknown as Credentials);
    if (singUpResponse.status === 200) {
      setPreviuosValues({ _id: singUpResponse.response._id });
      return setEnterCode(true);
    }
  };
  console.log(previuosValues);

  const enterCodeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const codeResponse = await confirm_email(
      previuosValues?._id as string,
      valuesSecond as any
    );

    console.log(codeResponse)
  };

  return (
    <Layout>
      {!enterCode && (
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
            submitCallback={loginUserHandler}
            buttonMessage={'Registrarme'}
          />
        </div>
      )}
      {enterCode && (
        <div>
          <h4>Registro de cuenta</h4>
          <CustomForm
            setValueInputs={setValuesSecond}
            values={valuesSecond}
            inputs={[
              {
                name: 'email_code',
                type: 'text',
                placeholder: 'Ingresa tu código',
              },
            ]}
            submitCallback={enterCodeHandler}
            buttonMessage={'Registrarme'}
          />
        </div>
      )}
    </Layout>
  );
};

export default SingUp;
