import type { CartProduct } from "../types";

export function totalPrice(products: CartProduct[]): number {
  return products.reduce(
    (total, product) =>
      total + parseInt(String(product.offPrice * product.quantity.quantity)),
    0
  );
}

export function totalGrossPrice(products: CartProduct[]): number {
  return products.reduce(
    (total, product) =>
      total + parseInt(String(product.price * product.quantity.quantity)),
    0
  );
}

export function totalOffAmount(products: CartProduct[]): number {
  return products.reduce(
    (total, product) =>
      total +
      parseInt(
        String((product.price - product.offPrice) * product.quantity.quantity)
      ),
    0
  );
}
