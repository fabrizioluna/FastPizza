import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Statistics, StatisticsDoc } from './schema/statistics.schema';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDoc>,
  ) {}

  async getLogToday() {
    const today = new Date();
    return await this.statisticsModel.findOne({
      statistics_completeDate: `${today.getDate()}/${
        today.getMonth() + 1
      }/${today.getFullYear()}`,
    });
  }

  async getTotalEarnedToday() {
    const today = new Date();
    return await this.statisticsModel.aggregate([
      {
        $match: {
          statistics_collectionDay: today.getDay(),
        },
      },
      {
        $group: {
          _id: 0,
          totalAmount: {
            $sum: {
              $sum: '$statistics_totalEarned',
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalEarnedMonth: '$totalAmount',
        },
      },
    ]);
  }

  getLogMonth(month: string, year: number) {
    return this.statisticsModel.aggregate([
      {
        $match: {
          statistics_collectionMonth: month,
          statistics_collectionYear: year,
        },
      },
    ]);
  }

  getTotalEarnedMonth(month: string, year: number) {
    return this.statisticsModel.aggregate([
      {
        $match: {
          statistics_collectionMonth: month,
          statistics_collectionYear: year,
        },
      },
      {
        $group: {
          _id: 0,
          totalAmount: {
            $sum: {
              $sum: '$statistics_totalEarned',
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalEarnedMonth: '$totalAmount',
        },
      },
    ]);
  }

  getTotalEarnedYear(year: number) {
    return this.statisticsModel.aggregate([
      {
        $match: {
          statistics_collectionYear: year,
        },
      },
      {
        $group: {
          _id: 0,
          totalAmount: {
            $sum: {
              $sum: '$statistics_totalEarned',
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalEarnedMonth: '$totalAmount',
        },
      },
    ]);
  }
}
