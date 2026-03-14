import { Star, StarHalf } from "lucide-react";

export default function StarRating({ rating, count }: { rating: number; count?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map(i => {
          const filled = rating >= i;
          const half = !filled && rating >= i - 0.5;
          return filled ? (
            <Star key={i} className="w-3.5 h-3.5 fill-[#fed700] text-[#fed700]" />
          ) : half ? (
            <StarHalf key={i} className="w-3.5 h-3.5 fill-[#fed700] text-[#fed700]" />
          ) : (
            <Star key={i} className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" />
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-xs text-sky-600 dark:text-sky-400 hover:underline cursor-pointer">
          ({count} reviews)
        </span>
      )}
    </div>
  );
}