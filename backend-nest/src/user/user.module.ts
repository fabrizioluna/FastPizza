import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CartServices } from 'src/cart/cart.services';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';
import { MailModule } from 'src/service/mails/mail.module';
import { JwtStrategy } from './jwt_strategy';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserServices } from './user.services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    JwtModule.register({
      secret: 'MY_JSONWEB_TOKEN_SECRET9900019887272',
      signOptions: { expiresIn: '4h' },
    }),
    MailModule,
  ],
  controllers: [UserController],
  providers: [UserServices, CartServices, JwtStrategy],
})
export class UserModule {}
