import { Injectable } from "@nestjs/common";
import { LogsService } from "src/log/logs.service";

@Injectable()
export class DiscountLog {
  constructor(private logsService: LogsService) {}

  public async triggerLog(action: string, description: string, data: any) {
    const Log = LogsService.model({
      action: action,
      controller: 'Discount',
      description: description,
      table: 'Discounts',
      data: data,
    });

    await this.logsService.trigger(Log);
  }
}
