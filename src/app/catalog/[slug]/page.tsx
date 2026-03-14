"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Heart, GitCompare, Star, StarHalf, ShoppingCart,
  ChevronRight, Tag, ExternalLink,
} from "lucide-react";
import { ROUTES } from "@/core/constants/routes";
import { useCameraDetail } from "@/hooks/useCameraDetail";
import { removeTsPrefix } from "@/core/services/cameras.service";
import ImageSample from "./components/image-sample";
import Specification from "./components/spec";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function StarRating({ rating, count }: { rating: number; count?: number }) {
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

function SkeletonDetail() {
  return (
    <div className="animate-pulse flex gap-6">
      <div className="hidden lg:block w-72 shrink-0 space-y-3">
        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded" />
        <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="h-72 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded" />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-7 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-3 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-20 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-8 w-36 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";

  const { camera, loading, error } = useCameraDetail(slug);

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"specification" | "description" | "reviews" | "gallery">("specification");
  const [wishlisted, setWishlisted] = useState(false);

  // ── Derived from API response ──────────────────────────────────────────────
  const sortedImages = camera
    ? [...camera.images].sort((a, b) => a.displayOrder - b.displayOrder)
    : [];
  const imageUrls = sortedImages.map(img => removeTsPrefix(img.url));

  const msrp = camera?.specGroups
    .find(g => g.groupName === "Price")
    ?.items.find(i => i.key === "MSRP")?.value ?? null;

  const awardScore = camera?.review?.awardScore
    ? parseFloat(camera.review.awardScore) / 20
    : null;

  const shortDescItems: string[] = camera ? [
    camera.announcedDate ? `Announced: ${camera.announcedDate}` : "",
    camera.specGroups.find(g => g.groupName === "Body type")?.items[0]?.value ?? "",
    camera.specGroups.find(g => g.groupName === "Sensor")
      ?.items.find(i => i.key === "Effective pixels")?.value
      ? `Effective pixels: ${camera.specGroups.find(g => g.groupName === "Sensor")!.items.find(i => i.key === "Effective pixels")!.value}`
      : "",
    camera.specGroups.find(g => g.groupName === "Sensor")
      ?.items.find(i => i.key === "Sensor size")?.value
      ? `Sensor: ${camera.specGroups.find(g => g.groupName === "Sensor")!.items.find(i => i.key === "Sensor size")!.value}`
      : "",
    camera.specGroups.find(g => g.groupName === "Photography features")
      ?.items.find(i => i.key === "Continuous drive")?.value
      ? `Continuous drive: ${camera.specGroups.find(g => g.groupName === "Photography features")!.items.find(i => i.key === "Continuous drive")!.value}`
      : "",
  ].filter(Boolean) : [];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <main className="flex-1">

        {/* Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 flex-wrap">
              <Link href={ROUTES.HOME} className="hover:text-[#0b4a77] dark:hover:text-sky-400">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={ROUTES.CATALOG} className="hover:text-[#0b4a77] dark:hover:text-sky-400">Cameras</Link>
              {camera && (
                <>
                  <ChevronRight className="w-3 h-3" />
                  <Link href={ROUTES.CATALOG} className="hover:text-[#0b4a77] dark:hover:text-sky-400">{camera.brandName}</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{camera.productName}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">

          {loading && <SkeletonDetail />}

          {error && (
            <div className="flex flex-col items-center gap-3 py-24 text-gray-400 dark:text-gray-600">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p className="font-medium">Could not load product</p>
              <p className="text-sm">
                Make sure the API is running at{" "}
                <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">localhost:7195</code>
              </p>
            </div>
          )}

          {!loading && !error && camera && (
            <div className="flex gap-6">

              {/* ── Sidebar ── */}
              <aside className="hidden lg:flex flex-col gap-4 w-72 shrink-0">

                {/* Award / review score card */}
                {camera.review && (
                  <div className="rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                      Review Score
                    </div>
                    <div className="p-3 bg-white dark:bg-gray-900 flex items-center gap-3">
                      <div className="text-center shrink-0">
                        <p className="text-3xl font-black text-[#fed700]">{camera.review.awardScore}</p>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">{camera.review.awardTitle}</p>
                      </div>
                      <div className="flex-1 space-y-1">
                        {camera.review.scores.slice(0, 5).map(s => (
                          <div key={s.category} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <span className="truncate flex-1 text-[10px]">{s.category}</span>
                            <div className="w-14 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0">
                              <div className="h-full rounded-full bg-[#fed700]" style={{ width: `${s.score}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {camera.review.awardReviewLink && (
                      <a
                        href={camera.review.awardReviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 text-xs text-sky-600 dark:text-sky-400 hover:underline border-t border-gray-100 dark:border-gray-800"
                      >
                        Read full review <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}

                {/* Good for / Not good for */}
                {camera.review && (camera.review.goodFor.length > 0 || camera.review.notGoodFor.length > 0) && (
                  <div className="rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {camera.review.goodFor.length > 0 && (
                      <div className="p-3 bg-white dark:bg-gray-900">
                        <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1.5">Good for</p>
                        <ul className="space-y-1">
                          {camera.review.goodFor.map((item, i) => (
                            <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-300">
                              <span className="text-green-500 shrink-0">✓</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {camera.review.notGoodFor.length > 0 && (
                      <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs font-semibold text-rose-500 mb-1.5">Not ideal for</p>
                        <ul className="space-y-1">
                          {camera.review.notGoodFor.map((item, i) => (
                            <li key={i} className="flex gap-2 text-xs text-gray-600 dark:text-gray-300">
                              <span className="text-rose-400 shrink-0">✗</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Promo banner */}
                <div className="rounded overflow-hidden bg-gray-900 text-white p-4 relative min-h-[160px] flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
                  {imageUrls[0] && (
                    <img src={imageUrls[0]} alt="" className="absolute inset-0 w-full h-full object-contain opacity-25 p-4" />
                  )}
                  <div className="relative z-20">
                    <p className="text-[10px] uppercase tracking-widest text-gray-300">{camera.brandName}</p>
                    <p className="text-lg font-black text-white leading-tight">{camera.productName}</p>
                    {msrp && <p className="text-base font-black text-[#fed700] mt-1">{msrp}</p>}
                  </div>
                </div>
              </aside>

              {/* ── Center + Right ── */}
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Image gallery */}
                  <div className="flex flex-col gap-3">
                    <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded flex items-center justify-center overflow-hidden group min-h-[300px]">
                      {imageUrls[activeImage] ? (
                        <Image
                          src={imageUrls[activeImage]}
                          alt={camera.productName}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="text-gray-300 dark:text-gray-700 text-sm">No image</div>
                      )}
                    </div>
                    {imageUrls.length > 1 && (
                      <div className="flex gap-2 flex-wrap">
                        {imageUrls.map((src, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={`shrink-0 w-14 h-14 border-2 rounded bg-white dark:bg-gray-900 overflow-hidden transition-colors relative ${activeImage === i
                                ? "border-[#fed700]"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-400"
                              }`}
                          >
                            <img src={src} alt="dfs" className="object-contain p-1" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs text-sky-600 dark:text-sky-400">
                      <Link href={ROUTES.CATALOG} className="hover:underline">{camera.brandName}</Link>
                    </p>

                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
                      {camera.productName}
                    </h1>

                    {awardScore !== null && (
                      <StarRating rating={awardScore} count={camera.review?.scores.length} />
                    )}

                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-3">
                      <button
                        onClick={() => setWishlisted(v => !v)}
                        className={`flex items-center gap-1.5 transition-colors ${wishlisted ? "text-rose-500" : "hover:text-rose-500"}`}
                      >
                        <Heart className={`w-4 h-4 ${wishlisted ? "fill-rose-500" : ""}`} />
                        Wishlist
                      </button>
                      <span className="text-gray-200 dark:text-gray-700">|</span>
                      <button className="flex items-center gap-1.5 hover:text-[#0b4a77] dark:hover:text-sky-400 transition-colors">
                        <GitCompare className="w-4 h-4" />
                        Compare
                      </button>
                    </div>

                    <div className="border-b border-slate-100 dark:border-gray-800 pb-4">
                      <h5 className="flex items-center gap-1.5 font-bold mb-1.5 text-slate-700 dark:text-gray-200">
                        <Tag className="w-4 h-4 text-[#fed700]" />
                        5 offers Available
                      </h5>
                      <div className="flex gap-3 items-center">
                        <span className="text-sky-400 font-semibold border border-sky-400 border-dashed px-3 py-1.5 rounded-md text-sm whitespace-nowrap">OFFER 40</span>
                        <div className="text-xs">
                          <p className="font-bold text-slate-700 dark:text-gray-200">Get extra $40 off on first Orders</p>
                          <p className="text-slate-500 dark:text-gray-400 font-light mt-0.5">Use code "OFFER40" Min. Cart Value $99</p>
                        </div>
                      </div>
                    </div>

                    {shortDescItems.length > 0 && (
                      <ul className="space-y-1">
                        {shortDescItems.map(item => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex items-baseline gap-3 pt-1">
                      {msrp ? (
                        <span className="text-2xl font-bold text-rose-500">{msrp}</span>
                      ) : (
                        <span className="text-sm text-gray-400 dark:text-gray-500 italic">Price on request</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                        className="w-20 px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#fed700] focus:border-[#fed700] rounded"
                      />
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-[#fed700] hover:bg-[#e6c200] text-gray-800 font-semibold text-sm rounded transition-colors shadow-sm">
                        <ShoppingCart className="w-4 h-4" />
                        Add to cart
                      </button>
                    </div>



                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      SKU: <span className="text-gray-600 dark:text-gray-400">{camera.cameraId}</span>
                    </p>
                  </div>
                </div>

                {/* ── Tabs ── */}
                <div className="mt-8">
                  <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                    {(["specification", "description", "reviews", "gallery"] as const).map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-3 text-sm font-semibold capitalize whitespace-nowrap transition-colors border-b-2 -mb-px ${activeTab === tab
                            ? "border-[#fed700] text-gray-900 dark:text-gray-100"
                            : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          }`}
                      >
                        {tab === "gallery" ? "Sample Gallery" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-950">

                    {/* Specification */}
                    {activeTab === "specification" && (
                      <Specification data={camera.specGroups} />
                    )}

                    {/* Description */}
                    {activeTab === "description" && (
                      <div className="max-w-3xl space-y-4">
                        {camera.review?.description ? (
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{camera.review.description}</p>
                        ) : (
                          <p className="text-sm text-gray-400 italic">No description available.</p>
                        )}
                        {shortDescItems.length > 0 && (
                          <ul className="space-y-2">
                            {shortDescItems.map(item => (
                              <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fed700] shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {activeTab === "reviews" && (
                      <div className="max-w-2xl">
                        {camera.review ? (
                          <>
                            <div className="flex items-start gap-6 mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded">
                              <div className="text-center shrink-0">
                                <p className="text-5xl font-black text-[#fed700]">{camera.review.awardScore}</p>
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">{camera.review.awardTitle}</p>
                                {awardScore !== null && <StarRating rating={awardScore} />}
                              </div>
                              <div className="flex-1 space-y-1.5">
                                {camera.review.scores.map(s => (
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
                            {camera.review.awardReviewLink && (
                              <a
                                href={camera.review.awardReviewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-sky-600 dark:text-sky-400 hover:underline"
                              >
                                Read the full review on DPReview <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </>
                        ) : (
                          <p className="text-sm text-gray-400 italic">No review data available.</p>
                        )}
                      </div>
                    )}

                    {activeTab === "gallery" && (
                      <>
                        <ImageSample data={camera.sampleGalleries} />
                      </>

                    )}

                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
    </div>
  );
}
