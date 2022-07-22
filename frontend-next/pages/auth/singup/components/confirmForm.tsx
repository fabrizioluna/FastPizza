import { CustomForm } from '@/components/form/form.component';
import { STATUS_CODE } from '@/utils/responseStatus/responseStatus';
import Router from 'next/router';
import { useRef, useState } from 'react';
import { confirm_email } from '../services/singup.service';

interface ConfirmProps {
  setValuesSecond: (set: any) => void;
  valuesSecond: any;
  previuosValues: any;
}

export const ConfirmForm = ({
  setValuesSecond,
  valuesSecond,
  previuosValues,
}: ConfirmProps) => {
  const [error, setError] = useState<boolean>(false);
  const formFieldsRef = useRef<any>([]);
  const enterCodeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { statusCode } = await confirm_email(
      previuosValues?._id as string,
      valuesSecond as any
    );

    if (statusCode === STATUS_CODE.BAD_REQUEST) {
      return setError(true);
    }

    Router.push('/auth/singin');
  };

  return (
    <div className='user_singup'>
      <h4>Confirmacion de correo</h4>
      <p style={{ textAlign: 'center' }}>
        Revisa tu bandeja de entrada de tu correo electronico e introduce el
        código que recibiste.
      </p>
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          El código de verificación no es válido.
        </p>
      )}
      <CustomForm
        isEditingForm={false}
        formStyles={{}}
        formFieldsRef={formFieldsRef}
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
        buttonMessage={'Confirmar'}
      />
    </div>
  );
};
