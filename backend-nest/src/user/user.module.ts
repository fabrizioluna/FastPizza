import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserServices } from './user.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserServices],
})
export class UserModule {}
