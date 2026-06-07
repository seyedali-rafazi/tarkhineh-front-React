export type ProductCategory = "mainFood" | "appetizer" | "dessert" | "drinks";

export type FoodGroup =
  | "all"
  | "persianFood"
  | "notPersianFood"
  | "pizza"
  | "sandawich";

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  offPrice: number;
  discount: number;
  category: ProductCategory;
  foodGroup: FoodGroup;
  imageLink: string;
}

export interface CartQuantity {
  quantity: number;
}

export interface CartProduct extends Omit<Product, "foodGroup"> {
  quantity: CartQuantity;
}

export interface Cart {
  productDetail: CartProduct[];
}

export interface CartProductRef {
  productId: string;
}

export interface UserCartSummary {
  products: CartProductRef[];
}

export interface User {
  phoneNumber: string;
  password: string;
  name: string;
  email: string;
  address: string;
  avatarUrl?: string;
  favoriteProduct: Product[];
  cart: UserCartSummary;
}

export interface FilterGroup {
  text: string;
  foodGroup: string;
  url: string;
  id: number;
}

export type PaymentStatus = "COMPLETED" | "FAILED" | string;

export interface Payment {
  _id: string;
  status: PaymentStatus;
  createdAt: string;
  cart: Cart;
}

export interface UserProfileResponse {
  user: User | null;
  cart: Cart;
  payments: Payment[];
}

export interface AppState {
  currentUserPhone: string | null;
  users: Record<string, Omit<User, "cart">>;
  carts: Record<string, Cart>;
  payments: Record<string, Payment[]>;
}

export interface ApiMessage {
  message: string;
}

export interface LoginCredentials {
  phoneNumber: string;
  password: string;
}

export interface CouponPayload {
  couponCode: string;
}

export interface DeleteCartPayload {
  productId: string;
}

export interface ProductListResponse {
  products: Product[];
}

export interface ProductDetailResponse {
  product: Product;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  address?: string;
  phoneNumber?: string;
}

export interface AppError {
  message: string;
}
