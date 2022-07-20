export class FormCondition {
  static hasFile(value: any): boolean {
    // Return true if all has correct... if not, true.
    return typeof value == 'object' && value.length <= 0 ? true : false;
  }
}
