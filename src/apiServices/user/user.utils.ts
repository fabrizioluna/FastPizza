export const createVerificationCode = Math.random()
  .toString(19)
  .slice(-8)
  .toUpperCase();
