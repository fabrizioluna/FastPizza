import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { DiscountModule } from './discounts/discount.module';
import { EmployeeModule } from './employee/employee.module';
import { FinanceModule } from './finance/finance.module';
import { InventoryModule } from './inventory/inventory.module';
import { LogsModule } from './log/logs.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { RolesModule } from './roles/roles.module';
import { StatisticsModule } from './statistics/statistics.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Env configuration
    ConfigModule.forRoot({
      // Env accessible globally
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_DATABASE),
    // We use on it to get the static images
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/images',
      exclude: ['/**'],
    }),
    UserModule,
    ProductModule,
    OrderModule,
    EmployeeModule,
    DiscountModule,
    LogsModule,
    StatisticsModule,
    FinanceModule,
    RolesModule,
    InventoryModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
