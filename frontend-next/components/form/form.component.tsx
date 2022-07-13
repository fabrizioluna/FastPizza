import { Fragment } from 'react';

// Types of Inputs
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

// Types if we've inputs with type radio
interface RadioInputs {
  name: string;
  label: string;
  value: any;
  radioInputLabelStyles?: any;
  radioInputStyles?: any;
}

// If we've selects
interface Selects {
  label: string;
  selectStyles?: any;
  name: string;
  values: SelectsValues[];
}

// Types of Values of the Select
interface SelectsValues {
  value: any;
  text: string;
}

// Main types of the custom form.
interface FormProps {
  setValueInputs: (set: any) => void;
  values: any;
  inputs: Inputs[];
  inputsDisable?: boolean;
  inputsVisibility?: boolean;
  selects?: Selects[];
  formStyles: any;
  submitCallback: (e: React.FormEvent) => Promise<void>;
  buttonMessage: string;
  inputsWithFlex?: string;
  isEditingForm: boolean;
}

export const CustomForm = ({
  setValueInputs,
  values,
  inputs,
  inputsDisable = false,
  inputsVisibility = true,
  selects = [],
  formStyles,
  submitCallback,
  buttonMessage,
  inputsWithFlex = 'flex',
  isEditingForm,
}: FormProps) => {
  // Get all values of the inputs.
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    // And pushed in a unique array.
    setValueInputs({ ...values, [event.target.name]: event.target.value });
  };

  // We get all values of the selects attribute.
  const onChangeSelects = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Using the spread operator, we added values of the selects.
    setValueInputs({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <Fragment>
      {!isEditingForm ? (
        <form onSubmit={submitCallback} style={formStyles}>
          {inputs.map((Input: Inputs, key: number) => (
            <div>
              {Input.type.toLocaleLowerCase() === 'radio' ? ( // If the type is radio...
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
                          value={radioInput.value}
                          onChange={onChangeInputs}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <>
                  {inputsVisibility && (
                    <input
                      key={key} // If not are radio input... just we create a normal input
                      style={{ width: '100%' }}
                      disabled={inputsDisable}
                      name={`${Input.name}`}
                      type={`${Input.type}`}
                      placeholder={`${Input.placeholder}`}
                      onChange={onChangeInputs}
                    />
                  )}
                </>
              )}
            </div>
          ))}
          {selects?.length >= 1 && ( // If is are a select array... we create it
            <>
              {selects.map((select: Selects) => (
                <>
                  <p style={{ paddingTop: '1rem', fontSize: '1rem' }}>
                    {select.label}
                  </p>
                  <select
                    style={select.selectStyles}
                    name={`${select.name}`}
                    onChange={onChangeSelects}
                  >
                    {select.values.map((val) => (
                      <option value={val.value}>{val.text}</option>
                    ))}
                  </select>
                </>
              ))}
            </>
          )}
          <button>{buttonMessage}</button>
        </form>
      ) : (
        <form onSubmit={submitCallback}>
          {inputs.map(
            (
              Input: Inputs,
              key: number // If the form has a default values
            ) => (
              <>
                {Input.type !== 'file' ? (
                  <input
                    key={key}
                    name={`${Input.name}`}
                    type={`${Input.type}`}
                    defaultValue={`${Input.prevValue}`}
                    placeholder={`${Input.placeholder}`}
                    onChange={onChangeInputs}
                  />
                ) : (
                  <input
                    key={key}
                    name={`${Input.name}`}
                    type={`${Input.type}`}
                    defaultValue={`${Input.prevValue}`}
                    placeholder={`${Input.placeholder}`}
                    onChange={onChangeInputs}
                    className='custom-file-upload'
                  />
                )}
              </>
            )
          )}
          <button>{buttonMessage}</button>
        </form>
      )}
    </Fragment>
  );
};
