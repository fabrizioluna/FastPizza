export interface ResponseHttp {
  message: string;
  response: any;
}

export class CustomResponse {
  constructor() {}

  static success(message: string, response: any) {
    return { message, response, status: 200 };
  }
}
