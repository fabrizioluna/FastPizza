import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { UserCreateDto, UserGetDto, UserLoginDto } from './dto/user.dto';
import { UserServices } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userServices: UserServices) {}

  @Post('/create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createUser(@Body() body: UserCreateDto) {
    return this.userServices.create(body);
  }

  @Post('/login')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  loginUser(@Body() body: UserLoginDto) {
    // Including trim to prevent errors.
    return this.userServices.login(body.user_name.trim(), body.user_password.trim());
  }

  @Get('/get/:id')
  getUser(@Param('id') id: UserGetDto) {
    return this.userServices.get(id);
  }

  @Post('/confirm_account')
  confirmAccount(@Query('id') id: ObjectId, @Query('code') code: string) {
    return this.userServices.confirmEmail(id, code);
  }

  @Post('/confirm_accountbyusername')
  confirmAccountByUsername(
    @Query('name') name: string,
    @Query('code') code: string,
  ) {
    return this.userServices.confirmEmailByUsername(name, code);
  }

  @Get('/getall')
  getAll() {
    return this.userServices.getAll();
  }
}
