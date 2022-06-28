import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { makeInvoice } from 'src/order/utils/makeEnvoice';
import { Inventory, InventoryDoc } from './schema/inventory.schema';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<InventoryDoc>,
  ) {}

  create(inventoryObject: InventoryDoc){
    return this.inventoryModel.create({...inventoryObject, inventory_uniqueNum: makeInvoice()});
  }

  update(id: ObjectId, inventoryObject: InventoryDoc){
    return this.inventoryModel.findByIdAndUpdate(id, inventoryObject);
  }

  get(id: ObjectId){
    return this.inventoryModel.findById(id);
  }

  getAll(){
    return this.inventoryModel.find();
  }

  delete(id: ObjectId){
    return this.inventoryModel.findByIdAndDelete(id);
  }

}
