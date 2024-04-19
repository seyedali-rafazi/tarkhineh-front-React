export function totalPrice(products) {
  const totalPrice = products.reduce((total, product) => {
    return total + parseInt(product.offPrice * product.quantity.quantity);
  }, 0);
  return totalPrice;
}

export function totalGrossPrice(products) {
  const totalGrossPrice = products.reduce((total, product) => {
    return total + parseInt(product.price * product.quantity.quantity);
  }, 0);
  return totalGrossPrice;
}

export function totalOffAmount(products) {
  const totalOffAmount = products.reduce((total, product) => {
    return (
      total +
      parseInt((product.price - product.offPrice) * product.quantity.quantity)
    );
  }, 0);
  return totalOffAmount;
}

