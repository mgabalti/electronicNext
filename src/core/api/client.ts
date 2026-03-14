/**
 * API client for backend requests
 * Uses NEXT_PUBLIC_API_URL (set in .env.local / environment)
 */
const getBaseUrl = () => process.env.NEXT_PUBLIC_API_URL ?? "";

export async function apiClient<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const base = getBaseUrl();
  const res = await fetch(`${base}api/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}
