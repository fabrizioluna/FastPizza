import {
  FieldsArray,
  ResponseFormValues,
  ResponseHandler,
} from './form.types.formHandler';
import { VerificatedField } from './form.verificate';

export class FormValuesHandler {
  constructor() {}

  // We use a static method cuz in this wave not need to instance the class.
  static async check(fieldsArr: FieldsArray[]): Promise<ResponseFormValues> {
    console.log(fieldsArr)
    let results: ResponseHandler[] = [];

    await fieldsArr.map((field: FieldsArray) => {
      // Instance of VerificatedField and then we'll invoke
      // methods 'value' to check if the type is correct
      // and length to verified the enter word is correct.
      const verified = new VerificatedField(field);
      // Using spread operator we copy them and include
      // in the same variable the next result we get.
      results = [...results, verified.value()];
      results = [...results, verified.length()];
      // Only will be execute the 'callback' we get received 'custom' value.
      // When in the object field are 'custom' key and it no is undefined.
      if ((field.hasOwnProperty('custom'), field.custom !== undefined)) {
        results = [...results, verified.custom(field.custom)];
      }
    });

    

    // Result if not have errors to show.
    const hasErrorsArr: boolean = results.some(
      (result: ResponseHandler) => result.testPassed === false
    );
    console.log('The results ', results, hasErrorsArr)
    if (hasErrorsArr === false) {
      return Promise.resolve({ hasErrors: false, results: [] });
    }
    return Promise.reject({
      hasErrors: true,
      // Only return result when testPassed was false.
      results: results.filter((field: ResponseHandler) => !field.testPassed),
    });
  }
}
