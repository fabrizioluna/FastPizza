import { Controller, Get, Query } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('/logs')
export class LogsController {
  constructor(private logsService: LogsService) {}

  @Get('/getlogs')
  getLogs(@Query('date') date: Date) {
    return this.logsService.getByDate(date);
  }

  @Get('/getall')
  getAll() {
    return this.logsService.getAll();
  }

  @Get('/getby')
  getBy(@Query('table') table: string, @Query('action') action: string) {
    return this.logsService.getByTableOrAction(table, action);
  }
}
