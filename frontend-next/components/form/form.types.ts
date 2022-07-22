export interface Inputs {
  name: string;
  type: string;
  placeholder?: string;
  prevValue?: any;
  radioOptions?: RadioInputs[];
  radioLabel?: string;
  radioStyles?: any;
  radioLabelStyles?: any;
  disableInput?: boolean;
}

export interface RadioInputs {
  name: string;
  label: string;
  value: any;
  radioInputLabelStyles?: any;
  radioInputStyles?: any;
}

export interface Selects {
  label: string;
  selectStyles?: any;
  name: string;
  values: SelectsValues[];
}

export interface SelectsValues {
  value: any;
  text: string;
}

export interface FormProps {
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
  formFieldsRef: {
    current: Array<any>;
  };
}
