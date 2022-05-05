export class CustomResponse {
  constructor(private message: string, private response: any) {}

  success() {
    return { message: this.message, response: this.response, status: 200 };
  }
}
