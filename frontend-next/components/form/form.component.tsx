import { Fragment } from 'react';

interface Inputs {
  name: string;
  type: string;
  placeholder: string,
}

export const CustomForm = ({
  setValueInputs,
  values,
  inputs,
  submitCallback,
  buttonMessage,
}: {
  setValueInputs: (set: any) => void;
  values: any;
  inputs: any;
  submitCallback: (e: React.FormEvent) => Promise<void>;
  buttonMessage: string
}) => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputs({...values, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      <form onSubmit={submitCallback}>
        {inputs.map((Input: Inputs) => (
          <input
            name={`${Input.name}`}
            type={`${Input.type}`}
            placeholder={`${Input.placeholder}`}
            onChange={onChangeInputs}
          />
        ))}
        <button>{buttonMessage}</button>
      </form>
    </Fragment>
  );
};
