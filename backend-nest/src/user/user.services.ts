import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CustomException } from 'src/utils/responses/custom-exception/error.response';
import {
  CustomResponse,
  ResponseHttp,
} from 'src/utils/responses/custom-success/success.response';
import { UserCreateDto, UserGetDto } from './dto/user.dto';
import { User, UserDoc } from './schema/user.schema';
const bcrypt = require('bcryptjs/dist/bcrypt');
import { makeCodeEmail } from './utils/createCode.utils';
import { MailServices } from 'src/service/mails/mail.services';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserServices {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDoc>,
    private mailService: MailServices,
    private jwtService: JwtService
  ) {}

  async create(user: UserCreateDto): Promise<ResponseHttp> {
    try {
      const createCode: String = makeCodeEmail;
      const newUser: User = await this.userModel.create({
        user_name: user.user_name,
        user_email: user.user_email,
        user_password: bcrypt.hashSync(
          user.user_password,
          bcrypt.genSaltSync(),
        ),
        user_createdAt: new Date(),
        user_verifiedEmail: createCode,
        user_address: user.user_address,
        user_hasInitialDiscount: false,
        user_imageProfile: user.user_imageProfile,
      });

      await this.mailService.sendUserConfirmation(
        newUser.user_name,
        newUser.user_email,
        createCode,
      );

      return CustomResponse.success('User has been create.', newUser);
    } catch (err) {
      console.log(err);
      throw new CustomException(
        'We found errors in this fields, please check it',
        err,
      );
    }
  }

  login(name: string, password: string): Promise<ResponseHttp> {
    return this.userModel
      .findOne({ user_name: name })
      .then((doc: User) => {
        const userPassword = bcrypt.compareSync(password, doc.user_password);
        if (!userPassword)
          return new CustomException(
            'Password has not match, please retry.',
          ) as unknown as ResponseHttp;

        if (doc.user_verifiedEmail.length > 0) {
          return new CustomException(
            'This user has a pending email confirmation',
          ) as unknown as ResponseHttp;
        }

        const payload = { name: doc.user_name, email: doc.user_email }
        const jwToken = this.jwtService.sign(payload);

        const data = {
          user: doc,
          token: jwToken
        }

        return CustomResponse.success('User has been logging', data);
      })
      .catch(
        (error) =>
          new CustomException(
            'Username or password is incorrect.',
            error,
          ) as unknown as ResponseHttp,
      );
  }

  confirmEmail(id: ObjectId, code: string) {
    return this.userModel.findById(id).then(async (user: User) => {
      if (user.user_verifiedEmail === code) {
        const userUpdated: UserCreateDto =
          await this.userModel.findByIdAndUpdate(
            id,
            { user_verifiedEmail: '' },
            { new: true },
          );
        return CustomResponse.success(
          'This user has been confirm',
          userUpdated,
        );
      }
      new CustomException(
        'The code has been received is not valid',
      ) as unknown as ResponseHttp;
    });
  }

  async get(id: UserGetDto): Promise<ResponseHttp> {
    return await this.userModel
      .findById(id)
      .then((doc: User) => CustomResponse.success('Request succesfully', doc))
      .catch(
        () =>
          new CustomException(
            'This username is not exist in the database.',
          ) as unknown as ResponseHttp,
      );
  }

  async getAll(): Promise<ResponseHttp> {
    return await this.userModel
      .find()
      .then((docs) => CustomResponse.success('All users in database', docs))
      .catch(
        (err) =>
          new CustomException(
            'Something happend',
            err,
          ) as unknown as ResponseHttp,
      );
  }
}

// const adapterAllElements = (docs: Array<UserCreateDto>) => {
//   const usersAdapted = [] as Array<any>;
//   docs.map((user: UserCreateDto) => usersAdapted.push(Adapter.User(user)));

//   return usersAdapted;
// };
