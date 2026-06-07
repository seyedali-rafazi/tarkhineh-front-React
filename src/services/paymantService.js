import { applyCoupon, createPayment } from "../store/localStore";

export function addOff(couponCode) {
  return applyCoupon(couponCode);
}

export function userPayment() {
  return createPayment();
}

export default { addOff, userPayment };
