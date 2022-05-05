import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import { CustomResponse } from 'src/utils/responses/custom-success/success.response';
import { UserCreateDto, UserGetDto } from './dto/user.dto';
import { User, UserDoc } from './schema/user.schema';
import { Adapter } from '../utils/adapter/adapters';
const bcrypt = require('bcryptjs/dist/bcrypt');
import { makeCodeEmail } from './utils/createCode.utils';

@Injectable()
export class UserServices {
  constructor(@InjectModel(User.name) private userModel: Model<UserDoc>) {}

  async create(
    user: UserCreateDto,
  ): Promise<{ message: string; response: any }> {
    try {
      const newUser: User = await this.userModel.create({
        user_name: user.user_name,
        user_email: user.user_email,
        user_password: bcrypt.hashSync(
          user.user_password,
          bcrypt.genSaltSync(),
        ),
        user_createdAt: new Date(),
        user_verifiedEmail: makeCodeEmail,
        user_address: user.user_address,
        user_hasInitialDiscount: false,
        user_imageProfile: user.user_imageProfile,
        // user_cart: user.hasOwnProperty('user_cart') &&
        // await cartDao.create(user._id, props.user_cart)
      });

      return new CustomResponse(
        'User has been create.',
        Adapter.User(newUser),
      ).success();
    } catch (err) {
      throw new CustomException(
        'We found errors in this fields, please check it',
        err,
      );
    }
  }

  login(
    name: string,
    password: string,
  ): Promise<{ message: string; user?: User }> {
    return this.userModel
      .findOne({ user_name: name })
      .then((doc: User) => {
        const userPassword = bcrypt.compareSync(password, doc.user_password);
        if (!userPassword)
          return new CustomException('Password has not match, please retry.');
        return new CustomResponse(
          'User has been logging',
          Adapter.User(doc),
        ).success();
      })
      .catch(
        (error) =>
          new CustomException('Username or password is incorrect.', error),
      );
  }

  async get(id: UserGetDto): Promise<{ message: string; user?: User }> {
    return await this.userModel
      .findById(id)
      .then((doc: User) =>
        new CustomResponse('Request succesfully', Adapter.User(doc)).success(),
      )
      .catch(
        () =>
          new CustomException('This username is not exist in the database.'),
      );
  }

  async getAll(): Promise<any> {
    return await this.userModel
      .find()
      .then(
        (docs) =>
          new CustomResponse('All users in database', adapterAllElements(docs)),
      )
      .catch((err) => new CustomException('Something happend', err));
  }
}

const adapterAllElements = (docs: Array<UserCreateDto>) => {
  const usersAdapted = [] as Array<any>;
  docs.map((user: UserCreateDto) => usersAdapted.push(Adapter.User(user)));

  return usersAdapted;
};
