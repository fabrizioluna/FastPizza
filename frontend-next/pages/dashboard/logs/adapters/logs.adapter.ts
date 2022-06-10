import { InitialLog } from "../types/logs.types";

export const logsAdapter = (logsObject: InitialLog) => {
    return {
      id: logsObject._id,
      action: logsObject.log_action,
      description: logsObject.log_description,
      data: logsObject.log_data,
      table: logsObject.log_table,
      timestamps: logsObject.log_timestamps,
      controller: logsObject.log_controller,
    };
  };