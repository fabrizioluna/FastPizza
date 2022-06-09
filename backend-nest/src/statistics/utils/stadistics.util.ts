export default function getDateFormatted(): string {
  const curretDate = new Date();

  return `${curretDate.getDate()}/${curretDate.getMonth()}/${curretDate.getFullYear()}`;
}

export function getCurrentMonth(month): string {
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
    if (m === month+1) return months[m - 1];
  }
}