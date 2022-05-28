import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  defaultMonths,
  defaultYears,
} from 'src/order/utils/defaultPropsStadistics';
import { Logs, LogsDoc } from './schema/logs.schema';
import { defaultActions, defultTables } from './utils/defaultProps';

interface LogModel {
  data: object;
  action: string;
  description: string;
  table: string;
  controller: string;
}

interface LogModelSave {
  log_data: string;
  log_action: string;
  log_description: string;
  log_table: string;
  log_controller: string;
  log_timestamps: Date;
}

@Injectable()
export class LogsService {
  constructor(@InjectModel(Logs.name) private logsModel: Model<LogsDoc>) {}

  static model(logModel: LogModel): LogModelSave {
    return {
      log_data: JSON.stringify(logModel.data),
      log_table: logModel.table,
      log_timestamps: new Date(),
      log_action: logModel.action,
      log_controller: logModel.controller,
      log_description: logModel.description,
    };
  }
  public trigger(logModel: LogModelSave) {
    return this.logsModel.create(logModel);
  }

  getAll() {
    return this.logsModel.find();
  }

  getByDate(date: Date) {
    return this.logsModel.find().where('log_timestamps').equals(date);
  }

  getByTableOrAction(table: string = 'all', action: string = 'all') {
    return this.logsModel
      .find()
      .where('log_table')
      .equals(table !== 'all' ? table : defultTables)
      .where('log_action')
      .equals(action !== 'all' ? action : defaultActions);
  }
}
