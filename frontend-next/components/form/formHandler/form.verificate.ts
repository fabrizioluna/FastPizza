import { ValidationForm } from './form.conditions';
import { HandlerResults } from './form.responseHandler';
import { FieldsArray, ResponseHandler } from './form.types.formHandler';

export class VerificatedField {
  constructor(private field: FieldsArray) {}

  public value(): ResponseHandler {
    // We verified the type of the field
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
    if (ValidationForm.isNumOrString(this.field.type)) {
      return this.verificateLength();
    } else {
      this.verificateFile();
    }
    return HandlerResults.getResult('', this.field.key, {}, true);
  }

  private verificateFile() {
    // We'll use a condition for a type file.
    // In this case only be confirm if the value
    // has a object and length is major or equal 1.
    if (ValidationForm.hasFile(this.field.value)) {
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
    return HandlerResults.getResult('', this.field.key, {}, true);
  }

  private verificateLength() {
    if (ValidationForm.isNum(this.field.type)) {
      return this.verificateNumLength();
    } else if (
      !ValidationForm.stringRange(
        this.field.value,
        this.field.max,
        this.field.min
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
    return HandlerResults.getResult('', this.field.key, {}, true);
  }

  private verificateNumLength() {
    if (
      !ValidationForm.numRange(this.field.value, this.field.max, this.field.min)
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
    return HandlerResults.getResult('', this.field.key, {}, true);
  }

  public custom(cb: Function) {
    if (!cb()) {
      return HandlerResults.getResult(
        'Error: Custom function',
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

  public regex(cb: Function) {
    if (cb() == null) {
      return HandlerResults.getResult(
        'Error: Regex',
        this.field.key,
        {
          in: 'Regex',
          value: this.field.value,
          expected: this.field.type,
        },
        false
      );
    }
    return HandlerResults.getResult('', this.field.key, {}, true);
  }
}
