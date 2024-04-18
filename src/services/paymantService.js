import http from "./httpService";

export function addOff(couponCode) {
    return http
      .post(`/cart/coupon`, couponCode )
      .then(({ data }) => data.data);
  }
  