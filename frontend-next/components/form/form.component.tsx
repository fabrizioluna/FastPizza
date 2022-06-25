import { Fragment } from 'react';

interface Inputs {
  name: string;
  type: string;
  placeholder?: string;
  prevValue?: any;
  radioOptions?: RadioInputs[];
  radioLabel?: string;
  radioStyles?: any;
  radioLabelStyles?: any;
}

interface RadioInputs {
  name: string;
  label: string;
  value: any;
  radioInputLabelStyles?: any;
  radioInputStyles?: any;
}

interface FormProps {
  setValueInputs: (set: any) => void;
  values: any;
  inputs: Inputs[];
  formStyles: any;
  submitCallback: (e: React.FormEvent) => Promise<void>;
  buttonMessage: string;
  inputsWithFlex?: string,
  isEditingForm: boolean;
}

export const CustomForm = ({
  setValueInputs,
  values,
  inputs,
  formStyles = {},
  submitCallback,
  buttonMessage,
  inputsWithFlex = 'flex',
  isEditingForm,
}: FormProps) => {
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputs({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      {!isEditingForm ? (
        <form onSubmit={submitCallback} style={formStyles}>
          {inputs.map((Input: Inputs, key: number) => (
            <div>
              {Input.type.toLocaleLowerCase() === 'radio' ? ( // Convert to lowecase
                <div style={Input.radioStyles}>
                  <p style={Input.radioLabelStyles}>{Input.radioLabel}</p>
                  {Input.radioOptions?.map(
                    (
                      radioInput: RadioInputs,
                      keyRadio: number // Create all radio inputs
                    ) => (
                      <div style={{ display: `${inputsWithFlex}` }}> 
                        <p style={radioInput.radioInputLabelStyles}>
                          {radioInput.label}
                        </p>
                        <input
                          key={keyRadio}
                          name={`${radioInput.name}`}
                          type='radio'
                          style={radioInput.radioInputStyles}
                          value={`${radioInput.value}`}
                          onChange={onChangeInputs}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <input
                  key={key}
                  style={{ width: '100%' }}
                  name={`${Input.name}`}
                  type={`${Input.type}`}
                  placeholder={`${Input.placeholder}`}
                  onChange={onChangeInputs}
                />
              )}
            </div>
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
