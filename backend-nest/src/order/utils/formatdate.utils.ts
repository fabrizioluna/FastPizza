export class FormatDate {
  constructor() {}

  static getRealDate() {
    let getRealDate = new Date();
    let getComptDate =
      getRealDate.getDate() +
      ' de ' +
      formatMonth() +
      ' ' +
      getRealDate.getFullYear();
    let getComptTime = getRealDate.getHours() + ':' + getRealDate.getMinutes();

    return getComptDate + ' ' + getComptTime;
  }
}

export function formatTime(): string {
  const getTime = new Date();
  return getTime.getHours() + ':' + getTime.getMinutes();
}

export function formatMonth(): string {
  let getRealDate = new Date();
  let month = getRealDate.getMonth() + 1;

  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  for (let m = 0; m < 12; m++) {
    if (m === month) return months[m - 1];
  }
}
