import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Rol, RolesDoc } from './schema/roles.schema';

@Injectable()
export class RolesServices {
  constructor(@InjectModel(Rol.name) private rolesModel: Model<RolesDoc>) {}

  create(roleObject: RolesDoc) {
    return this.rolesModel.create(roleObject);
  }

  get(roleId: ObjectId) {
    return this.rolesModel.findById(roleId);
  }

  getAll() {
    return this.rolesModel.find();
  }

  update(roleId: ObjectId, roleObject: RolesDoc) {
    return this.rolesModel.findByIdAndUpdate(roleId, roleObject);
  }

  delete(roleId: ObjectId) {
    return this.rolesModel.findByIdAndDelete(roleId);
  }
}
