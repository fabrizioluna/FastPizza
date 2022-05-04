import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserDoc } from './schema/user.schema';
import { UserServices } from './user.services';

@Controller('/user')
export class UserController {
  constructor(private userServices: UserServices) {}

  @Post('/create')
  async createUser(@Body() body: UserDoc) {
    return this.userServices.create(body);;
  }

  @Get('/get/:id')
  getUser(@Param('id') id: ObjectId) {
    return this.userServices.get(id);
  }
}
