import Router from 'next/router';
import React, { useState } from 'react';
import { CustomForm } from '@/components/form/form.component';
import { Layout } from '@/components/layout';
import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/states/user';
import { UserAdapter } from '../singup/adapters/singup.adapter';
import { singin, SinginCredentials } from './services/singin.service';

const SingIn = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState();
  const [errors, setErrors] = useState<string>();

  const loginUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, statusCode } = await singin(values as unknown as SinginCredentials);
    if (statusCode === STATUS_CODE.BAD_REQUEST)
      return setErrors('Nombre de Usuario o Contraseña incorrectos.');

    authCookieStorage()?.set(data.token, data.user._id);
    const userAdapted = UserAdapter(data.user, data.token);
    dispatch(createUser(userAdapted));
    Router.push('/home');
  };

  return (
    <Layout>
      <div className='user_singup'>
        <h4>Inicia sesión</h4>
        <p>{errors}</p>
        <CustomForm
          setValueInputs={setValues}
          values={values}
          inputs={[
            {
              name: 'user_name',
              type: 'text',
              placeholder: 'Ingresa tu Usuario',
            },
            {
              name: 'user_password',
              type: 'text',
              placeholder: 'Ingresa tu Contraseña',
            },
          ]}
          submitCallback={loginUserHandler}
          buttonMessage={'Inicia sesión'}
        />
      </div>
    </Layout>
  );
};

export default SingIn;
