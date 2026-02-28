/**
 * Shared utilities and helpers
 * Add formatPrice, formatDate, etc. here
 */
export function formatPrice(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}
