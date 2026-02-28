/**
 * Product domain types
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl?: string;
  category: string;
  inStock: boolean;
  rating?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  productCount?: number;
}
