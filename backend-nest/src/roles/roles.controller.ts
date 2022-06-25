import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { RolesServices } from './roles.service';

@Controller('/roles')
export class RolesController {
  constructor(private rolesServices: RolesServices) {}

  @Post('/create')
  create(@Body() body: any) {
    return this.rolesServices.create(body);
  }

  @Get('/get')
  get(@Query('roleid') roleId: ObjectId) {
    return this.rolesServices.get(roleId);
  }

  @Get('/getall')
  getAll() {
    return this.rolesServices.getAll();
  }

  @Put('/update')
  update(@Query('roleid') roleId: ObjectId, @Body() body: any) {
    return this.rolesServices.update(roleId, body);
  }

  @Delete('/delete')
  delete(@Query('roleid') roleId: ObjectId) {
    return this.rolesServices.delete(roleId);
  }
}
