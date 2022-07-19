import { HandlerResults } from './form.responseHandler';
import {
  FieldsArray,
  ResponseFormValues,
  ResponseHandler,
} from './form.types.formHandler';

export class FormValuesHandler {
  constructor() {}

  static check(fieldsArr: FieldsArray[]): Promise<ResponseFormValues> {
    let results: ResponseHandler[] = [];

    fieldsArr.map((field: FieldsArray) => {
      results = [...results, new VerificatedField().value(field)];
      results = [...results, new VerificatedField().length(field)];
    });

    if (results.length > 0)
      return Promise.reject({
        hasErrors: true,
        results: results.filter((field: ResponseHandler) => !field.testPassed),
      });
    return Promise.resolve({ hasErrors: false, results: [] });
  }
}

class VerificatedField {
  constructor() {}

  public value(field: FieldsArray): ResponseHandler {
    // We verified the type of the field
    // compare to we recivied.
    if (field.type !== typeof field.value) {
      return new HandlerResults(
        'El tipo de dato es incorrecto.',
        field.key,
        {
          in: 'Type',
          value: field.value,
          expected: field.type,
        },
        false
      ).getResult();
    }
    return new HandlerResults('', field.key, {}, true).getResult();
  }

  public length(field: FieldsArray): ResponseHandler {
    // We verified the length of the field
    if (!(field.value <= field.max && field.value >= field.min)) {
      return new HandlerResults(
        `Limites permitidos de caracteres es de ${field.min} a ${field.max}`,
        field.key,
        {
          in: 'Length',
          value: field.value,
          expected: field.type,
        },
        false
      ).getResult();
    }
    return new HandlerResults('', field.key, {}, true).getResult();
  }
}
