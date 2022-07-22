export interface FieldsArray {
  value: any;
  max: number;
  min: number;
  type: any;
  key: string;
  custom?: () => boolean;
  regex?: () => RegExpExecArray | null;
}

export interface ResponseHandler {
  response: string;
  key: string;
  error: any;
  testPassed: boolean;
}

export interface ResponseFormValues {
  hasErrors: boolean;
  results: ResponseHandler[];
}
