import { CustomForm } from '@/components/form/form.component';
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
  const enterCodeHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, statusCode } = await confirm_email(
      previuosValues?._id as string,
      valuesSecond as any
    );

    // TODO: Enviar el login cuando haya terminado de confirmar
  };
  return (
    <div className='user_singup'>
      <h4>Confirmacion de correo</h4>
      <CustomForm
        isEditingForm={false}
        formStyles={{}}
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
