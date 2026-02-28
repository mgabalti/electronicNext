/**
 * Application route constants
 */
export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  PRODUCT: "/catalog/[slug]",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ACCOUNT: "/account",
  ACCOUNT_ORDERS: "/account/orders",
  ACCOUNT_PROFILE: "/account/profile",
  LOGIN: "/account",
  REGISTER: "/account/register",
} as const;
