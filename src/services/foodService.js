import { filterProducts, getProductById } from "../data/products";

export function getAllFood(qs) {
  return Promise.resolve({ products: filterProducts(qs) });
}

export function getMainFood(qs) {
  const query = qs || "?category=mainFood";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getApptizer(qs) {
  const query = qs || "?category=appetizer";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getDessert(qs) {
  const query = qs || "?category=dessert";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getDrink(qs) {
  const query = qs || "?category=drinks";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getFoodById(id) {
  const product = getProductById(id);
  if (!product) return Promise.reject({ message: "محصول یافت نشد" });
  return Promise.resolve({ product });
}

export {
  toggleFavorite as getUserFavourit,
  addToCart as addToCard,
  removeFromCart as removeOneCard,
  deleteProductFromCart as deleteFromCart,
} from "../store/localStore";
