import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsArray,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class UserCreateDto {
  @IsString()
  @MinLength(5)
  @MaxLength(17)
  @IsNotEmpty()
  user_name: string;

  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @IsString()
  @MaxLength(17)
  @IsNotEmpty()
  user_password: string;

  @IsString()
  @IsNotEmpty()
  user_address: string;

  user_hasInitialDiscount?: boolean;
  user_verifiedEmail?: string;
  user_createdAt?: string;
  user_imageProfile?: string;
  _id?: ObjectId;
}

export class UserLoginDto {
  @IsString()
  @MinLength(5)
  @MaxLength(17)
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @MaxLength(17)
  @IsNotEmpty()
  user_password: string;
}

export class UserGetDto {
//   @IsString()
  @IsNotEmpty()
  id: ObjectId;
}
