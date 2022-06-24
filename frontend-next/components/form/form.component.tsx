import { Fragment } from 'react';

interface Inputs {
  name: string;
  type: string;
  placeholder: string;
  prevValue?: any;
}

interface FormProps {
  setValueInputs: (set: any) => void;
  values: any;
  inputs: any;
  submitCallback: (e: React.FormEvent) => Promise<void>;
  buttonMessage: string;
  isEditingForm: boolean;
}

export const CustomForm = ({
  setValueInputs,
  values,
  inputs,
  submitCallback,
  buttonMessage,
  isEditingForm,
}: FormProps) => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputs({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      {!isEditingForm ? (
        <form onSubmit={submitCallback}>
          {inputs.map((Input: Inputs, key: number) => (
            <input
              key={key}
              name={`${Input.name}`}
              type={`${Input.type}`}
              placeholder={`${Input.placeholder}`}
              onChange={onChangeInputs}
            />
          ))}
          <button>{buttonMessage}</button>
        </form>
      ) : (
        <form onSubmit={submitCallback}>
          {inputs.map((Input: Inputs, key: number) => (
            <input
              key={key}
              name={`${Input.name}`}
              type={`${Input.type}`}
              defaultValue={`${Input.prevValue}`}
              placeholder={`${Input.placeholder}`}
              onChange={onChangeInputs}
            />
          ))}
          <button>{buttonMessage}</button>
        </form>
      )}
    </Fragment>
  );
};
