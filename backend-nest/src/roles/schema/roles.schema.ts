import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RolesDoc = Rol & Document;

@Schema()
export class Rol {
  @Prop({ unique: true })
  role_name: string;

  @Prop()
  role_permissionsOrders: boolean;
  
  @Prop()
  role_permissionsDelivery: boolean;

  @Prop()
  role_permissionsEmployees: boolean;

  @Prop()
  role_permissionsInventory: boolean;

  @Prop()
  role_permissionsFinance: boolean;
  
  @Prop()
  role_permissionsStatustics: boolean;

  @Prop()
  role_permissionsProducts: boolean;

  @Prop()
  role_permissionsDiscounts: boolean;
  
  @Prop()
  role_permissionsLogs: boolean;
  
  @Prop()
  role_permissionsRoles: boolean;

}

export const RolesSchema = SchemaFactory.createForClass(Rol);
