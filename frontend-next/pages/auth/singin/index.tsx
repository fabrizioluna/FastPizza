import { CustomForm } from '@/components/form/form.component';
import { Layout } from '@/components/layout';
import { statusCode } from '@/utils/responseStatus/responseStatus';
import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'redux/states/user';
import { AppStore } from 'redux/store';
import { UserAdapter } from '../singup/adapters/singup.adapter';
import { singin, SinginCredentials } from './services/singin.service';

const SingIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);
  const [values, setValues] = useState();
  const [errors, setErrors] = useState<string>();

  const loginUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { response, status } = await singin(
      values as unknown as SinginCredentials
    );

    if (status === statusCode.BAD_REQUEST)
      return setErrors('Nombre de Usuario o Contraseña incorrectos.');

    const userAdapted = UserAdapter(response);
    dispatch(createUser(userAdapted));
    Router.push('/home')
  };

  console.log(user)

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
