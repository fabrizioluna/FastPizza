import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User, UserDoc } from './schema/user.schema';
const bcrypt = require('bcryptjs/dist/bcrypt');
import { makeCodeEmail } from './utils/createCode.utils';

@Injectable()
export class UserServices {
  constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) {}

  async create(user: User): Promise<User> {
    try {
      return await this.userModel.create({
        user_name: user.user_name,
        user_email: user.user_email,
        user_password: bcrypt.hashSync(
          user.user_password,
          bcrypt.genSaltSync(),
        ),
        user_createdAt: new Date(),
        user_verifiedEmail: makeCodeEmail,
        user_adress: user.user_adress,
        user_hasInitialDiscount: false,
        user_imageProfile: user.user_imageProfile,
      });
    } catch (err) {
      throw new HttpException(
        { message: 'We found errors in this fields, please check it', err },
        400,
      );
    }
  }

  async get(id: ObjectId): Promise<User> {
    return await this.userModel.findById(id).exec();
  }
}
