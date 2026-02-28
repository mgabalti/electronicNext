/**
 * Application configuration
 * Centralize env-based and app-wide settings here
 */
export const appConfig = {
  name: "ElectroShop",
  description: "Online electronics e-commerce",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  features: {
    cart: true,
    wishlist: true,
    reviews: true,
  },
} as const;
