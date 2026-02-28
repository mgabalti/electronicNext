import Link from "next/link";
import type { Product } from "@/core/types";
import { ROUTES } from "@/core/constants/routes";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const href = ROUTES.PRODUCT.replace("[slug]", product.slug);
  return (
    <div className="card h-100 shadow-sm">
      <Link href={href} className="text-decoration-none text-dark">
        <div className="ratio ratio-1x1 bg-light rounded-top overflow-hidden">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="object-fit-cover"
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <span className="text-muted">No image</span>
            </div>
          )}
        </div>
        <div className="card-body">
          <h6 className="card-title text-truncate">{product.name}</h6>
          <p className="card-text text-muted small mb-2 text-truncate">
            {product.description}
          </p>
          <p className="fw-bold mb-0">
            {product.currency} {product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}
