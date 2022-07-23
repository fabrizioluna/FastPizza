import React, { Fragment } from 'react';
import { FormSelects } from './form.selects';
import { FormProps, Inputs, RadioInputs } from './form.types';

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
  formFieldsRef,
}: FormProps) => {
  // Get all values of the inputs.
  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'file') {
      /*
        We use this condition cuz if the input type is an file, 
        need to save it as a file not a normal value.

        To prevent errors, just we return the variable setValues.
      */
      return setValueInputs({
        ...values,
        [event.target.name]: event.target.files![0],
      });
    }
    // If is everything all right we pushed it in this unique array.
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
            <div key={key}>
              {Input.type.toLocaleLowerCase() === 'radio' ? ( // If the type is radio...
                <div style={Input.radioStyles}>
                  <p style={Input.radioLabelStyles}>{Input.radioLabel}</p>
                  {Input.radioOptions?.map(
                    (radioInput: RadioInputs, keyRadio: number) => (
                      <div key={keyRadio} style={{ display: `${inputsWithFlex}` }}>
                        <p style={radioInput.radioInputLabelStyles}>
                          {radioInput.label}
                        </p>
                        <input
                          key={keyRadio}
                          name={`${radioInput.name}`}
                          onClick={() =>
                            (formFieldsRef.current[key].style.borderColor =
                              '#adadad80')
                          }
                          ref={(re) => (formFieldsRef.current[key] = re)}
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
                <Fragment key={key}>
                  {inputsVisibility && (
                    <input
                      key={key} // If not are radio input... just we create a normal input
                      style={{ width: '100%' }}
                      disabled={Input.disableInput}
                      name={`${Input.name}`}
                      type={`${Input.type}`}
                      /*
                        When the user click on the input and this have a borderColor 
                        in red... will be change on a grey color to default. 
                      */
                      onClick={() =>
                        (formFieldsRef.current[key].style.borderColor =
                          '#adadad80')
                      }
                      /* 
                        This create a DOM reference of the all inputs in the component.
                        So, with this we get full properties of those
                        inputs to work on it en ever single component when use them.
                      */
                      ref={(re) => (formFieldsRef.current[key] = re)}
                      placeholder={`${Input.placeholder}`}
                      onChange={onChangeInputs}
                    />
                  )}
                </Fragment>
              )}
            </div>
          ))}
          {selects?.length >= 1 && ( // If is are a select array... we create it
            <FormSelects
              formFieldsRef={formFieldsRef}
              formFieldsRefLength={inputs.length}
              onChangeSelects={onChangeSelects}
              selects={selects}
            />
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
              <Fragment key={key}>
                {Input.type !== 'file' ? (
                  <input
                    key={key}
                    name={`${Input.name}`}
                    type={`${Input.type}`}
                    disabled={Input.disableInput}
                    onClick={() =>
                      (formFieldsRef.current[key].style.borderColor =
                        '#adadad80')
                    }
                    ref={(re) => (formFieldsRef.current[key] = re)}
                    defaultValue={`${Input.prevValue}`}
                    placeholder={`${Input.placeholder}`}
                    onChange={onChangeInputs}
                  />
                ) : (
                  <input
                    key={key}
                    name={`${Input.name}`}
                    type={`${Input.type}`}
                    onClick={() =>
                      (formFieldsRef.current[key].style.borderColor =
                        '#adadad80')
                    }
                    ref={(re) => (formFieldsRef.current[key] = re)}
                    defaultValue={`${Input.prevValue}`}
                    placeholder={`${Input.placeholder}`}
                    onChange={onChangeInputs}
                    className='custom-file-upload'
                  />
                )}
              </Fragment>
            )
          )}
          <button>{buttonMessage}</button>
        </form>
      )}
    </Fragment>
  );
};

export const resetInputs = (inputs: Array<any>) => {
  return inputs.map((input: any) => (input.value = ''));
};

export const FormCustom = React.memo(CustomForm);
