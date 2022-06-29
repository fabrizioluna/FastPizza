import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Today } from 'src/utils/today.utils';
import { Statistics, StatisticsDoc } from './schema/statistics.schema';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectModel(Statistics.name) private statisticsModel: Model<StatisticsDoc>,
  ) {}

  get() {
    return this.statisticsModel.find();
  }

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

  getLogYear(year: number) {
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
              $sum: '$statistics_totalOrders',
            },
          },
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
          totalEarnedYear: '$totalAmount',
        },
      },
    ]);
  }

  getAllStatistics() {
    return this.statisticsModel.aggregate([
      {
        $match: {
          statistics_collectionYear: Today.year(),
        },
      },
      {
        $group: {
          _id: '$statistics_collectionMonthNumber',
          month: {
            $push: {
              day: '$statistics_collectionDay',
              monthString: '$statistics_collectionMonth',
              totalOrdersByDay: {
                $sum: {
                  $sum: '$statistics_totalOrders',
                },
              },
              totalEarnedByDay: {
                $sum: {
                  $sum: '$statistics_totalEarned',
                },
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          month: '$_id',
          totalOrdersByMonth: '$month',
          totalOrdersThisMonth: {
            $sum: {
              $sum: '$month.totalOrdersByDay',
            },
          },
          totalEarnedThisMonth: {
            $sum: {
              $sum: '$month.totalEarnedByDay',
            },
          },
        },
      },
    ]);
  }
}
