import { CameraReview } from "@/core/types/Product-detail.types";
import StarRating from "./starRating";


const ProductReview = ({data}: {data: CameraReview }) => {
    return (
        <div className="max-w-2xl">
            {data ? (
                <>
                    <div className="flex items-start gap-6 mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded">
                        <div className="text-center shrink-0">
                            <p className="text-5xl font-black text-[#fed700]">{data.awardScore}</p>
                            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">{data.awardTitle}</p>
                            {data.awardScore !== null && <StarRating rating={Number(data.awardScore)} />}
                        </div>
                        <div className="flex-1 space-y-1.5">
                            {data.scores.map(s => (
                                <div key={s.category} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <span className="w-40 truncate">{s.category}</span>
                                    <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        <div className="h-full rounded-full bg-[#fed700]" style={{ width: `${s.score}%` }} />
                                    </div>
                                    <span className="w-10 text-right">{s.score.toFixed(0)}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {data.awardReviewLink && (
                        <a
                            href={data.awardReviewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-sky-600 dark:text-sky-400 hover:underline"
                        >
                        </a>
                    )}
                </>
            ) : (
                <p className="text-sm text-gray-400 italic">No review data available.</p>
            )}
        </div>
    );
}

export default ProductReview;