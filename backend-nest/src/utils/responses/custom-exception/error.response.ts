import { HttpException } from '@nestjs/common';

export interface ResponseException {
  message: string;
  response?: any;
}

export class CustomException extends HttpException {
  constructor(message: string, response?: any) {
    super({ message, response, status: 400 }, 400);
  }
}
