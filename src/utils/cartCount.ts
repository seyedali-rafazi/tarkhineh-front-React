import type { Cart } from "../types";

export function getCartItemCount(cart: Cart | null | undefined): number {
  if (!cart?.productDetail?.length) return 0;
  return cart.productDetail.reduce(
    (sum, item) => sum + (item.quantity?.quantity || 0),
    0
  );
}
