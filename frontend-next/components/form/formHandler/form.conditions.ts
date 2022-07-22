/* 
    Handler 'class' all the conditions we need.
      It only returns true or false.
*/
export class ValidationForm {
  static hasFile(value: any): boolean {
    return typeof value == 'object' && value.length <= 0;
  }
  static sameType(value: any, type: string): boolean {
    return type !== typeof value;
  }
  static isNumOrString(type: string): boolean {
    return type == 'string' || type == 'number';
  }
  static isNum(type: string): boolean {
    return type == 'number';
  }
  static numRange(value: any, max: number, min: number): boolean {
    return value <= max && value >= min;
  }
  static stringRange(value: any, max: number, min: number): boolean {
    return value.length <= max && value.length >= min;
  }
}
