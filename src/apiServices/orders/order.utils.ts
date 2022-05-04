export const invoiceCodeGenerator = () =>
  Math.random().toString(19).slice(-8).toUpperCase();
