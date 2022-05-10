import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
import { ObjectId } from 'mongoose';

export class ProductCreateDto {
  @IsString()
  @MinLength(5)
  @MaxLength(25)
  @IsNotEmpty()
  product_name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(100)
  @IsNotEmpty()
  product_description: string;

  @IsNumber()
  @IsNotEmpty()
  product_price: number;

  @IsNumber()
  @IsNotEmpty()
  product_discount: number;

  @IsString()
  @IsNotEmpty()
  product_category: string;
  
  product_createdAt?: Date;
}

export class ProductGet {
    @IsNotEmpty()
    @IsString()
    id: ObjectId;
}
