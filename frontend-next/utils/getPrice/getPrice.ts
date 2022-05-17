export const getPriceWithDiscount = (price: number, discount: number) => {
  const getResult = (discount / 100) * price;
  return price - getResult;
};
