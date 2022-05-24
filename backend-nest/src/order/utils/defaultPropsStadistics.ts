export const defaultMonths: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Noviembre',
  'Diciembre',
];

export function defaultYears(): number[] {
  const getYear: number = new Date().getFullYear();
  const initialYear: number = 2020;
  const years: number[] = [];
  for (let year = initialYear; year <= getYear; year++) {
    years.push(year);
  }
  return years;
}
