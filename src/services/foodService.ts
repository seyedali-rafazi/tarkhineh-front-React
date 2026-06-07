import { filterProducts, getProductById } from "../data/products";
import type { ProductListResponse, ProductDetailResponse } from "../types";

export function getAllFood(qs?: string): Promise<ProductListResponse> {
  return Promise.resolve({ products: filterProducts(qs) });
}

export function getMainFood(qs?: string): Promise<ProductListResponse> {
  const query = qs || "?category=mainFood";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getApptizer(qs?: string): Promise<ProductListResponse> {
  const query = qs || "?category=appetizer";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getDessert(qs?: string): Promise<ProductListResponse> {
  const query = qs || "?category=dessert";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getDrink(qs?: string): Promise<ProductListResponse> {
  const query = qs || "?category=drinks";
  return Promise.resolve({ products: filterProducts(query) });
}

export function getFoodById(id: string): Promise<ProductDetailResponse> {
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
