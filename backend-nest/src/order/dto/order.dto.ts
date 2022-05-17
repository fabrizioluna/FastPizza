import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class OrderDtoCreate {
  @IsBoolean()
  @IsNotEmpty()
  order_status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order_discountCode: number;

  @IsNumber()
  @IsNotEmpty()
  order_discountApplied: number;

  @IsString()
  @IsNotEmpty()
  order_addressClient: string;

  @IsArray()
  @IsNotEmpty()
  order_products: string[];

  @IsNotEmpty()
  order_buyer: string;

  @IsNotEmpty()
  @IsNumber()
  order_totalAmount: number;
}

export class OrderDtoUpdate {
  @IsBoolean()
  @IsNotEmpty()
  order_status: boolean;

  @IsDate()
  order_deliveryDay: string;

  @IsNumber()
  order_timeFinish: string;

  @IsNumber()
  @IsNotEmpty()
  order_discountCode: number;

  @IsNumber()
  @IsNotEmpty()
  order_discountApplied: number;

  @IsString()
  @IsNotEmpty()
  order_addressClient: string;

  @IsArray()
  @IsNotEmpty()
  order_products: Array<string>;

  @IsNotEmpty()
  @IsString()
  order_employeeDelivery: ObjectId;

  @IsNotEmpty()
  @IsString()
  order_employeeCreation: ObjectId;
}

export class OrderDtoGet {
  @IsString()
  @IsNotEmpty()
  type: string;

//   @IsNumber()
  limit?: number;
}

export class OrderDtoDelete {
  @IsString()
  @IsNotEmpty()
  id: ObjectId;
}
