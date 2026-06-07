import { applyCoupon, createPayment } from "../store/localStore";
import type { CouponPayload, Payment } from "../types";

export function addOff(couponCode: CouponPayload): Promise<{ message: string }> {
  return applyCoupon(couponCode);
}

export function userPayment(): Promise<{ message: string; payment: Payment }> {
  return createPayment();
}

export default { addOff, userPayment };
