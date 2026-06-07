import { getProductById } from "../data/products";

const STORAGE_KEY = "tarkhineh_app";

function defaultState() {
  return {
    currentUserPhone: null,
    users: {},
    carts: {},
    payments: {},
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function delay(result, ms = 80) {
  return new Promise((resolve) => setTimeout(() => resolve(result), ms));
}

function reject(message) {
  return Promise.reject({ message });
}

function getCart(state, phone) {
  if (!state.carts[phone]) {
    state.carts[phone] = { productDetail: [] };
  }
  return state.carts[phone];
}

function buildUserResponse(state) {
  const phone = state.currentUserPhone;
  if (!phone) {
    return { user: null, cart: { productDetail: [] }, payments: [] };
  }

  const userData = state.users[phone];
  const cart = getCart(state, phone);
  const payments = state.payments[phone] || [];

  const user = {
    ...userData,
    favoriteProduct: userData.favoriteProduct || [],
    cart: {
      products: cart.productDetail.map((p) => ({ productId: p._id })),
    },
  };

  return { user, cart, payments };
}

function toCartItem(product, quantity) {
  return {
    _id: product._id,
    title: product.title,
    description: product.description,
    price: product.price,
    offPrice: product.offPrice,
    discount: product.discount,
    imageLink: product.imageLink,
    category: product.category,
    quantity: { quantity },
  };
}

export function getProfile() {
  const state = loadState();
  return delay(buildUserResponse(state));
}

export function loginUser({ phoneNumber, password }) {
  const state = loadState();
  const phone = String(phoneNumber).trim();

  if (!phone || !password) {
    return reject("شماره تلفن و رمز عبور الزامی است");
  }

  if (!state.users[phone]) {
    state.users[phone] = {
      phoneNumber: phone,
      password,
      name: "",
      email: "",
      address: "",
      favoriteProduct: [],
    };
    getCart(state, phone);
    state.payments[phone] = [];
  } else if (state.users[phone].password !== password) {
    return reject("رمز عبور اشتباه است");
  }

  state.currentUserPhone = phone;
  saveState(state);

  return delay({
    message: "ورود با موفقیت انجام شد",
    ...buildUserResponse(state),
  });
}

export function logoutUser() {
  const state = loadState();
  state.currentUserPhone = null;
  saveState(state);
  return delay({ message: "با موفقیت خارج شدید" });
}

export function updateUserProfile(data) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  state.users[phone] = { ...state.users[phone], ...data };
  saveState(state);

  return delay({
    message: "اطلاعات با موفقیت بروزرسانی شد",
    ...buildUserResponse(state),
  });
}

export function addToCart(productId) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const product = getProductById(productId);
  if (!product) return reject("محصول یافت نشد");

  const cart = getCart(state, phone);
  const existing = cart.productDetail.find((p) => p._id === productId);

  if (existing) {
    existing.quantity.quantity += 1;
  } else {
    cart.productDetail.push(toCartItem(product, 1));
  }

  saveState(state);
  return delay({ message: "به سبد خرید اضافه شد" });
}

export function removeFromCart(productId) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const cart = getCart(state, phone);
  const item = cart.productDetail.find((p) => p._id === productId);

  if (!item) return reject("محصول در سبد خرید نیست");

  if (item.quantity.quantity <= 1) {
    cart.productDetail = cart.productDetail.filter((p) => p._id !== productId);
  } else {
    item.quantity.quantity -= 1;
  }

  saveState(state);
  return delay({ message: "از سبد خرید کم شد" });
}

export function deleteProductFromCart({ productId }) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const cart = getCart(state, phone);
  cart.productDetail = cart.productDetail.filter((p) => p._id !== productId);

  saveState(state);
  return delay({ message: "محصول از سبد خرید حذف شد" });
}

export function toggleFavorite(productId) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const product = getProductById(productId);
  if (!product) return reject("محصول یافت نشد");

  const user = state.users[phone];
  const favorites = user.favoriteProduct || [];
  const index = favorites.findIndex((f) => f._id === productId);

  if (index >= 0) {
    favorites.splice(index, 1);
    saveState(state);
    return delay({ message: "از علاقه‌مندی‌ها حذف شد" });
  }

  user.favoriteProduct = [...favorites, { ...product }];
  saveState(state);
  return delay({ message: "به علاقه‌مندی‌ها اضافه شد" });
}

const VALID_COUPONS = {
  tarkhineh10: 10,
  off10: 10,
  welcome: 15,
};

export function applyCoupon({ couponCode }) {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const code = (couponCode || "").trim().toLowerCase();
  if (!VALID_COUPONS[code]) {
    return reject("کد تخفیف نامعتبر است");
  }

  return delay({ message: `کد تخفیف ${VALID_COUPONS[code]}٪ اعمال شد` });
}

export function createPayment() {
  const state = loadState();
  const phone = state.currentUserPhone;

  if (!phone) return reject("لطفا وارد حساب کاربری شوید");

  const cart = getCart(state, phone);
  if (!cart.productDetail.length) {
    return reject("سبد خرید خالی است");
  }

  if (!state.payments[phone]) state.payments[phone] = [];

  const payment = {
    _id: `pay_${Date.now()}`,
    status: "COMPLETED",
    createdAt: new Date().toISOString(),
    cart: {
      productDetail: cart.productDetail.map((p) => ({
        ...p,
        quantity: { quantity: p.quantity.quantity },
      })),
    },
  };

  state.payments[phone].unshift(payment);
  cart.productDetail = [];
  saveState(state);

  return delay({ message: "پرداخت با موفقیت انجام شد", payment });
}
