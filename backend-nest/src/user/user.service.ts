import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserCreateDto, UserGetDto } from './dto/user.dto';
import { User, UserDoc } from './schema/user.schema';
import { makeCodeEmail } from './utils/createCode.utils';
import { MailServices } from 'src/service/mails/mail.services';
import { JwtService } from '@nestjs/jwt';
import { compareSync, hashSync } from 'bcryptjs';
import { UserLog } from './user.log';

@Injectable()
export class UserServices {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDoc>,
    private mailService: MailServices,
    private jwtService: JwtService,
    private userLog: UserLog,
  ) {}

  async create(userObject: UserCreateDto) {
    const { user_password, user_name, user_email } = userObject;
    const hashPassword = await hashSync(user_password, 12);
    const createCode: string = makeCodeEmail;

    userObject = {
      ...userObject,
      user_password: hashPassword,
      user_verifiedEmail: createCode,
    };
    // Send the code confirm to the email user
    await this.mailService.sendUserConfirmation(
      user_name,
      user_email,
      createCode,
    );

    this.userLog.triggerLog(
      'INSERT',
      `Se creo una nuevo usuario con el nombre ${userObject.user_name}`,
      userObject,
    );

    return this.userModel.create(userObject);
  }

  async login(name: string, password: string) {
    const User = await this.userModel.findOne({ user_name: name });
    const { user_password, user_verifiedEmail, user_name, user_email } = User;

    if (!compareSync(password, user_password))
      throw new HttpException('INVALID_PASSWORD', 400);
    if (user_verifiedEmail.length > 0)
      throw new HttpException('USER_NOT_VEFIRIED', 401);

    const payload = { name: user_name, email: user_email };
    const jwToken = this.jwtService.sign(payload);

    const data = {
      user: User,
      token: jwToken,
    };
    return data;
  }

  async confirmEmail(id: ObjectId, code: string) {
    const userEmail = await this.userModel.findById(id);
    const { user_verifiedEmail } = userEmail;
    if (user_verifiedEmail === code) {
      const userUpdate = await this.userModel.findByIdAndUpdate(
        id,
        { user_verifiedEmail: '' },
        { new: true },
      );

      return {
        message: 'User has been confirm',
        user: userUpdate,
      };
    } else {
      throw new HttpException('INVALID_CODE', 400);
    }
  }

  async get(id: UserGetDto): Promise<User[]> {
    return await this.userModel.findById(id);
  }

  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }
}
