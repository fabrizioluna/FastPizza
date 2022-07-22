import Router from 'next/router';
import React, { useRef, useState } from 'react';
import { CustomForm } from '@/components/form/form.component';
import { Layout } from '@/components/layout';
import { authCookieStorage } from '@/utils/localStorage/localStorageHandler';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/states/user';
import { UserAdapter } from '../singup/adapters/singup.adapter';
import {
  confirm_accountByUsername,
  singin,
  SinginCredentials,
} from './services/singin.service';
import { PageHead } from '@/components/pageHead/pageHead.component';

const SingIn = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ user_name: '', user_password: '' });
  const [valuesConfirm, setValuesConfirm] = useState({ email_code: '' });
  const [errors, setErrors] = useState<string>();
  const [showConfirmEmail, setShowConfirmEmail] = useState<boolean>(false);
  const formFieldsRef = useRef<any>([]);

  const loginUserHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, statusCode } = await singin(
      values as unknown as SinginCredentials
    );
    if (statusCode === STATUS_CODE.BAD_REQUEST)
      return setErrors('Nombre de Usuario o Contraseña incorrectos.');

    if (statusCode === STATUS_CODE.UNAUTORIZED) {
      setErrors(
        'Tu cuenta no ha sido confirmada. Revisa tu bandeja de entrada de tu correo electronico.'
      );
      setValuesConfirm({ email_code: '' });
      return setShowConfirmEmail(true);
    }

    authCookieStorage()?.set(data.token, data.user._id);
    const userAdapted = UserAdapter(data.user, data.token);
    dispatch(createUser(userAdapted));
    Router.push('/home');
  };

  const enterCodeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { statusCode } = await confirm_accountByUsername(
      values.user_name as unknown as string,
      valuesConfirm.email_code as any
    );

    if (statusCode === STATUS_CODE.BAD_REQUEST) {
      return setErrors('El código de verificación no es válido.');
    }

    setValues({ user_name: '', user_password: '' });
    setErrors('');
    return setShowConfirmEmail(false);
  };

  return (
    <Layout>
      <PageHead titlePage='Iniciar sesión' />
      {!showConfirmEmail ? (
        <div className='user_singup'>
          <h4>Inicia sesión</h4>
          <p style={{ color: 'red', textAlign: 'center' }}>{errors}</p>
          <CustomForm
            formStyles={{}}
            setValueInputs={setValues}
            formFieldsRef={formFieldsRef}
            isEditingForm={false}
            values={values}
            inputs={[
              {
                name: 'user_name',
                type: 'text',
                placeholder: 'Ingresa tu Usuario',
                prevValue: '',
              },
              {
                name: 'user_password',
                type: 'password',
                placeholder: 'Ingresa tu Contraseña',
              },
            ]}
            submitCallback={loginUserHandler}
            buttonMessage={'Inicia sesión'}
          />
          <p
            style={{ textAlign: 'center' }}
            onClick={() => Router.push('/auth/singup')}
          >
            ¿No estás registrado? Registrate aquí
          </p>
        </div>
      ) : (
        <div className='user_singup'>
          <h4>Confirmacion de correo</h4>
          <p style={{ color: 'red', textAlign: 'center' }}>{errors}</p>
          <CustomForm
            isEditingForm={false}
            formStyles={{}}
            formFieldsRef={formFieldsRef}
            setValueInputs={setValuesConfirm}
            values={valuesConfirm}
            inputs={[
              {
                name: 'email_code',
                type: 'text',
                placeholder: 'Ingresa tu código',
                prevValue: '',
              },
            ]}
            submitCallback={enterCodeHandler}
            buttonMessage={'Confirmar'}
          />
        </div>
      )}
    </Layout>
  );
};

export default SingIn;
