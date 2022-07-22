export class HandlerResults {
  constructor() {}

  static getResult(response: string, key: string, error: any, testPassed: boolean) {
    return {
      response: response,
      key: key,
      error: error,
      testPassed: testPassed,
    };
  }
}
