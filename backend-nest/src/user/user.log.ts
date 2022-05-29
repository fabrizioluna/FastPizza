import { Injectable } from "@nestjs/common";
import { LogsService } from "src/log/logs.service";

@Injectable()
export class UserLog {
  constructor(private logsService: LogsService) {}

  public async triggerLog(action: string, description: string, data: any) {
    const Log = LogsService.model({
      action: action,
      controller: 'User',
      description: description,
      table: 'Users',
      data: data,
    });

    await this.logsService.trigger(Log);
  }
}
