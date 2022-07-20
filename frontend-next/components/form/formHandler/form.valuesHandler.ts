import { HandlerResults } from './form.responseHandler';
import {
  FieldsArray,
  ResponseFormValues,
  ResponseHandler,
} from './form.types.formHandler';

export class FormValuesHandler {
  constructor() {}

  // We use a static method cuz in this wave not need to instance the class.
  static check(fieldsArr: FieldsArray[]): Promise<ResponseFormValues> {
    let results: ResponseHandler[] = [];

    fieldsArr.map((field: FieldsArray) => {
      // Instance of VerificatedField and then we'll invoke
      // methods 'value' to check if the type is correct
      // and length to verified the enter word is correct.
      const verified = new VerificatedField(field);
      // Using spread operator we copy them and include
      // in the same variable the next result we get.
      results = [...results, verified.value()];
      results = [...results, verified.length()];
      if (field.custom !== undefined) {
        console.log('Es true el custom')
        results = [...results, verified.custom(field.custom)];
      }
    });

    // Result if not have errors to show.
    if (results.length <= 0) {
      return Promise.resolve({ hasErrors: false, results: [] });
    }
    return Promise.reject({
      hasErrors: true,
      results: results.filter((field: ResponseHandler) => !field.testPassed),
    });
  }
}

class VerificatedField {
  constructor(private field: FieldsArray) {}

  public value(): ResponseHandler {
    // We verified the type of the field
    // compare to we recivied.
    if (this.field.type !== typeof this.field.value) {
      return new HandlerResults(
        'El tipo de dato es incorrecto.',
        this.field.key,
        {
          in: 'Type',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      ).getResult();
    }
    return new HandlerResults('', this.field.key, {}, true).getResult();
  }
  // display<elTipo>(valor: elTipo): elTipo
  public length(): ResponseHandler {
    if (typeof this.field.value == 'object' && this.field.value.length >= 1) {
      return new HandlerResults(
        `Limites permitidos de caracteres es de ${this.field.min} a ${this.field.max}`,
        this.field.key,
        {
          in: 'Length',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      ).getResult();
    }
    // We verified the length of the field
    if (
      !(
        this.field.value.length <= this.field.max &&
        this.field.value.length >= this.field.min
      )
    ) {
      return new HandlerResults(
        `Limites permitidos de caracteres es de ${this.field.min} a ${this.field.max}`,
        this.field.key,
        {
          in: 'Length',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      ).getResult();
    }
    return new HandlerResults('', this.field.key, {}, true).getResult();
  }

  public custom(cb: any) {
    if (cb() == null) {
      return new HandlerResults(
        'Error: Regex',
        this.field.key,
        {
          in: 'Custom',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      ).getResult();
    }
    return new HandlerResults('', this.field.key, {}, true).getResult();
  }
}
