import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { DiscountModule } from './discounts/discount.module';
import { EmployeeModule } from './employee/employee.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/FastPizza_Database'),
    // ScheduleModule.forRoot(),
    UserModule,
    ProductModule,
    OrderModule,
    EmployeeModule,
    CartModule,
    DiscountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
