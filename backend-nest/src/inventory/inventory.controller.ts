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
import { InventoryService } from './inventory.service';
import { InventoryDoc } from './schema/inventory.schema';

@Controller('/inventory')
export class InventoryController {
  constructor(private inventoryServices: InventoryService) {}

  @Post('/create')
  create(@Body() body: InventoryDoc) {
    return this.inventoryServices.create(body);
  }

  @Put('/update')
  update(@Query('id') id: ObjectId, @Body() body: InventoryDoc) {
    return this.inventoryServices.update(id, body);
  }

  @Get('/get')
  get(@Query('id') id: ObjectId) {
    return this.inventoryServices.get(id);
  }

  @Get('/getall')
  getAll() {
    return this.inventoryServices.getAll();
  }

  @Delete('/delete')
  delete(@Query('id') id: ObjectId) {
    return this.inventoryServices.delete(id);
  }
}
