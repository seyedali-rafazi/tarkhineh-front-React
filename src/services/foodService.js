import http from "./httpService";

export function getAllFood(qs) {
  return http.get(`/product/list${qs}`).then(({ data }) => data.data);
}

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

export function getFoodById(id) {
  return http
    .get(`/product/${id}`)
    .then(({ data }) => data.data);
}

export function getUserFavourit(id) {
  return http
    .post(`/user/set-favorite-product/${id}`)
    .then(({ data }) => data.data);
}

export function addToCard(productId) {
  return http.post(`/cart/add`, { productId }).then(({ data }) => data.data);
}

export function removeOneCard(productId) {
  return http.post(`/cart/remove`, { productId }).then(({ data }) => data.data);
}

export function deleteFromCart(productId) {
  return http
    .post(`/cart/deleteProduct`, productId)
    .then(({ data }) => data.data);
}
