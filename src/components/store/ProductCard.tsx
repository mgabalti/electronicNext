import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";

export type ProductCardItem = {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
};

export function ProductCard({ item }: { item: ProductCardItem }) {
  return (
    <Link
      href={ROUTES.CATALOG}
      className="p-3 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors min-w-0 block"
    >
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
        {item.category}
      </p>
      <p className="text-[#0b4a77] dark:text-sky-300 font-semibold leading-tight mb-2 min-h-10 text-sm">
        {item.name}
      </p>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-contain mb-3 mt-3"
        width={320}
        height={260}
      />
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className={
            item.oldPrice
              ? "text-rose-500 text-xl sm:text-2xl font-semibold"
              : "text-gray-700 dark:text-gray-100 text-xl sm:text-2xl font-semibold"
          }
        >
          {item.price}
        </span>
        {item.oldPrice && (
          <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
            {item.oldPrice}
          </span>
        )}
      </div>
    </Link>
  );
}
