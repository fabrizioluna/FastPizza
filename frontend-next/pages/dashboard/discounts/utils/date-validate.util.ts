export const dateValidate = (date: string): boolean => {
  const todayDate = new Date();
  const timeZone = todayDate.toISOString().slice(0, 10);
  return date == timeZone ? true : false;
};
