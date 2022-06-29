import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { OrderServices } from 'src/order/order.service';
import { OrderDoc } from 'src/order/schema/order.schema';
import { Statistics, StatisticsDoc } from '../schema/statistics.schema';
import { DateCron } from '../types/cron.types';
import { getCurrentMonth } from '../utils/stadistics.util';

@Injectable()
export class StatisticsCron {
  constructor(
    @InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDoc>,
    private orderService: OrderServices,
  ) {}

  private logger = new Logger(StatisticsCron.name);

  @Cron(CronExpression.EVERY_30_MINUTES)
  async recordEvery30Minutes() {
    const todayDateForSave = this.getCurrentDateToFind();
    this.logger.debug(
      'The statistics cron has registered all data in the db successfully.',
    );
    await this.statisticsModel.findOneAndUpdate(
      { statistics_completeDate: `${todayDateForSave.day}/${todayDateForSave.month}/${todayDateForSave.year}` },
      await this.statisticsRegisterModel(),
      {
        upsert: true,
        returnOriginal: false,
      },
    );
  }

  private async statisticsRegisterModel() {
    const todayDate = this.getCurrentDate();
    const todayDateForSave = this.getCurrentDateToFind();
    const orderData = await this.recoverDataOrders(
      todayDate.day,
      todayDate.month,
      todayDate.year,
    );
    const allStatistics = await this.productsStatistics(orderData);

    return {
      statistics_completeDate: `${todayDateForSave.day}/${todayDateForSave.month}/${todayDateForSave.year}`,
      statistics_lastUpdate: todayDate.now,
      statistics_collectionDay: todayDate.day,
      statistics_collectionMonth: todayDate.month,
      statistics_collectionMonthNumber: todayDate.monthNum, 
      statistics_collectionYear: todayDate.year,
      statistics_totalAmount: allStatistics.totalAmount,
      statistics_soldProducts: allStatistics.productsSold,
      statistics_totalOrders: allStatistics.totalOrders,
      statistics_totalEarned: allStatistics.totalEarned,
    };
  }

  private recoverDataOrders(day: number, month: string, year: number) {
    return this.orderService.getStadistics(day, month, year);
  }

  private recoverProductsSold(day: number, month: string, year: number) {
    return this.orderService.getProductsSold(day, month, year);
  }

  private getCurrentDateToFind() {
    const currentDate = new Date();
    return {
      day: currentDate.getDate(),
      month: currentDate.getMonth()+1,
      year: currentDate.getFullYear(),
    };
  }

  private getCurrentDate(): DateCron {
    const currentDate = new Date();
    return {
      day: currentDate.getDate(),
      month: getCurrentMonth(currentDate.getMonth()),
      year: currentDate.getFullYear(),
      now: Date.now(),
      monthNum: currentDate.getMonth()+1
    };
  }

  private async productsStatistics(orderData: OrderDoc[]) {
    const todayDate = this.getCurrentDate();
    let totalAmount: number = 0;
    const productsSold = await this.recoverProductsSold(
      todayDate.day,
      todayDate.month,
      todayDate.year,
    );

    orderData.filter((order) => (totalAmount += order.order_totalAmount));

    return {
      totalOrders: orderData.length,
      totalAmount,
      totalEarned: totalAmount,
      productsSold,
    };
  }
}
