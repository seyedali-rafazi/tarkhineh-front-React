import http from "./httpService";

export function getMainFood(qs) {
  return http
    .get(`/product/list${qs ? qs : "?category=mainFood"}`)
    .then(({ data }) => data.data);
}

export function getApptizer(qs) {
  return http
    .get(`/product/list${qs ? qs : "?category=appetizer"}`)
    .then(({ data }) => data.data);
}

export function getDessert(qs) {
  return http
    .get(`/product/list${qs ? qs : "?category=dessert"}`)
    .then(({ data }) => data.data);
}

export function getDrink(qs) {
  return http
    .get(`/product/list${qs ? qs : "?category=drinks"}`)
    .then(({ data }) => data.data);
}