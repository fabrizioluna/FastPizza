import { Controller, Get, Query } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('/statistics')
export class StatisticsController {
  constructor(private statisticsServices: StatisticsService) {}

  @Get('/getlog')
  getLogsThisDay() {
    return this.statisticsServices.getLogToday();
  }

  @Get('/getlog_month')
  async getLogsThisMonth(
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    return await this.statisticsServices.getLogMonth(month, parseInt(year));
  }

  @Get('/getlog_month_earned')
  async getLogsThisMonthEarned(
    @Query('month') month: string,
    @Query('year') year: string,
  ) {
    return await this.statisticsServices.getTotalEarnedMonth(
      month,
      parseInt(year),
    );
  }

  @Get('/getlog_year_earned')
  async getLogsThisYEarEarned(@Query('year') year: string) {
    return await this.statisticsServices.getTotalEarnedYear(parseInt(year));
  }
}
