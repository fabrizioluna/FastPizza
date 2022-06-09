import { Get, Injectable } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Injectable()
export class StatisticsController {
  constructor(private statisticsServices: StatisticsService) {}

  @Get('/getlog')
  getLogsToday() {
    return this.statisticsServices.getLogToday();
  }
}
