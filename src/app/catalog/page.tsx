import { ROUTES } from "@/core/constants/routes";
import type { Product } from "@/core/types";

// Placeholder data – replace with API or CMS
const placeholderProducts: Product[] = [
  {
    id: "1",
    slug: "wireless-headphones",
    name: "Wireless Headphones",
    description: "Premium noise-cancelling wireless headphones.",
    price: 149.99,
    currency: "USD",
    category: "Audio",
    inStock: true,
  },
  {
    id: "2",
    slug: "smartwatch-pro",
    name: "Smartwatch Pro",
    description: "Fitness and health tracking smartwatch.",
    price: 299.99,
    currency: "USD",
    category: "Wearables",
    inStock: true,
  },
];

export default function CatalogPage() {
  return (
    <div>
      <h1 className="mb-4">Catalog</h1>
      <p className="text-muted">
        Replace this with <code>ProductCard</code> grid and real data from{" "}
        <code>@/core/api</code> or <code>@/features/catalog</code>.
      </p>
      <ul className="list-unstyled">
        {placeholderProducts.map((p) => (
          <li key={p.id}>
            <a href={ROUTES.PRODUCT.replace("[slug]", p.slug)}>
              {p.name} – {p.currency} {p.price.toFixed(2)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
