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
        results = [...results, verified.custom(field.custom)];
      }
    });

    // Result if not have errors to show.
    const hasErrorsArr: boolean = results.some(
      (result: ResponseHandler) => !result.testPassed
    );
    if (!hasErrorsArr) {
      return Promise.resolve({ hasErrors: false, results: [] });
    }
    return Promise.reject({
      hasErrors: true,
      // Only return result when testPassed was false.
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
      return HandlerResults.getResult(
        'El tipo de dato es incorrecto.',
        this.field.key,
        {
          in: 'Type',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      );
    }
    return HandlerResults.getResult('', this.field.key, {}, true);
  }
  public length(): ResponseHandler {
    if (this.field.type == 'string' || this.field.type == 'number') {
      if (this.field.type == 'number') {
        if (
          !(
            this.field.value <= this.field.max &&
            this.field.value >= this.field.min
          )
        ) {
          return HandlerResults.getResult(
            `Limites permitidos de caracteres es de ${this.field.min} a ${this.field.max}`,
            this.field.key,
            {
              in: 'Length',
              value: this.field.value,
              expected: this.field.type,
            },
            false
          );
        }
      } else if (
        !(
          this.field.value.length <= this.field.max &&
          this.field.value.length >= this.field.min
        )
      ) {
        // We verified the length of the field
        return HandlerResults.getResult(
          `Limites permitidos de caracteres es de ${this.field.min} a ${this.field.max}`,
          this.field.key,
          {
            in: 'Length',
            value: this.field.value,
            expected: this.field.type,
          },
          false
        );
      }
    } else {
      // We'll use a condition for a type file.
      // In this case only be confirm if the value
      // has a object and length is major or equal 1.
      if (typeof this.field.value == 'object' && this.field.value.length <= 0) {
        return HandlerResults.getResult(
          `El tipo de dato ingresado no es un archivo.`,
          this.field.key,
          {
            in: 'Length',
            value: this.field.value,
            expected: this.field.type,
          },
          false
        );
      }
    }
    return HandlerResults.getResult('', this.field.key, {}, true);
  }

  

  public custom(cb: any) {
    if (cb() == null) {
      return HandlerResults.getResult(
        'Error: Regex',
        this.field.key,
        {
          in: 'Custom',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      );
    }
    return HandlerResults.getResult('', this.field.key, {}, true);
  }
}
