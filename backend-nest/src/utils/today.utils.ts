import { getCurrentMonth } from "src/statistics/utils/stadistics.util";

export class Today {
  constructor() {}

  static now() {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
  }

  static day() {
    return new Date().getDate();
  }

  static month() {
    return new Date().getMonth();
  }

  static monthAsString(month?: number) {
    return getCurrentMonth(!!month ? month : new Date().getMonth());
  }

  static year() {
    return new Date().getFullYear();
  }
}
