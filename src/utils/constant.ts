export const accountMenuList: {
  menu: string;
  path: string;
}[] = [
  { menu: "Personal Center", path: "account-information" },
  { menu: "Address Book", path: "address-book" },
  { menu: "My Orders", path: "order-history" },
];

export const localStorageKeys = {
  AUTH_TOKEN: "auth_token",
  CART_ID: "cartId",
  CURRENT_CURRENCY: "current_currency",
  USER_EMAIL: "userEmail",
};

export const cookieStorageKey = {
  AUTH_TOKEN: "auth_token",
  IS_PLACE_ORDER: "order-placed",
  IS_CART_EMPTY: "empty-cart",
};

export type Tab = "login" | "register";

export const tabList: { label: string; value: Tab }[] = [
  {
    label: "LOGIN",
    value: "login",
  },
  {
    label: "REGISTER",
    value: "register",
  },
];
