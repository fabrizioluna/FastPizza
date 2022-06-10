export interface InitialLog {
  _id: string;
  log_action: string;
  log_description: string;
  log_table: string;
  log_controller: string;
  log_timestamps: Date;
  log_data: string;
}

export interface LogAdapted {
  id: string;
  action: string;
  description: string;
  table: string;
  controller: string;
  timestamps: string;
  data: string;
}
