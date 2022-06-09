import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistics, StatisticsDoc } from './schema/statistics.schema';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDoc>, // private orderLog: OrderLog,
  ) {}

  public getLogToday() {
    const today = new Date();
    return this.statisticsModel.findOne({
      statistics_completeDate: `${today.getDate}/${today.getMonth}/${today.getFullYear}`,
    });
  }
}
