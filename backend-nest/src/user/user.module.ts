import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartServices } from 'src/cart/cart.services';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';
import { MailModule } from 'src/service/mails/mail.module';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserServices } from './user.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    MailModule,
  ],
  controllers: [UserController],
  providers: [UserServices, CartServices],
})
export class UserModule {}
