export const calcMinPricePizzas = (sizes, doughs) => {
  const priceMinSizes = sizes.toSorted((a, b) => a.price - b.price)[0].price;
  const priceyMinDoughs = doughs.toSorted((a, b) => a.price - b.price)[0].price;

  const calcMinPrice = priceMinSizes + priceyMinDoughs;

  return calcMinPrice;
};
