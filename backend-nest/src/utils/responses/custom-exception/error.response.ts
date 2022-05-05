import { HttpException } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message: string, response?: any) {
    super({ message, response }, 400);
  }
}
