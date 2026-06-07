export function getCartItemCount(cart) {
  if (!cart?.productDetail?.length) return 0;
  return cart.productDetail.reduce(
    (sum, item) => sum + (item.quantity?.quantity || 0),
    0
  );
}
