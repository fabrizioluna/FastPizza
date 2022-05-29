import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CartServices } from 'src/cart/cart.services';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';
import { LogsService } from 'src/log/logs.service';
import { Logs, LogsSchema } from 'src/log/schema/logs.schema';
import { MailModule } from 'src/service/mails/mail.module';
import { JwtStrategy } from './jwt_strategy';
import { User } from './schema/user.schema';
import { UserSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserLog } from './user.log';
import { UserServices } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    MongooseModule.forFeature([{ name: Logs.name, schema: LogsSchema }]),
    JwtModule.register({
      secret: 'MY_JSONWEB_TOKEN_SECRET9900019887272',
      signOptions: { expiresIn: '4h' },
    }),
    MailModule,
  ],
  controllers: [UserController],
  providers: [UserServices, CartServices, JwtStrategy, LogsService, UserLog],
})
export class UserModule {}
