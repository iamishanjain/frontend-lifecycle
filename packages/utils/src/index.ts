export const currencyFormat = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    currency: "INR",
    style: "currency",
  }).format(amount);
};
