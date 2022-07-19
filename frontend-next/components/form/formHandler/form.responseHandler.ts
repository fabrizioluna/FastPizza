export class HandlerResults {
  constructor(
    private response: string,
    private key: string,
    private error: any,
    private testPassed: boolean,
  ) {}

  getResult() {
    return {
      response: this.response,
      key: this.key,
      error: this.error,
      testPassed: this.testPassed,
    };
  }
}
