"use client";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import ProductDisplay_V from './micros/products-display';
import { useHomepageProducts } from '@/hooks/useHomepageProducts';

// ── Skeleton ──────────────────────────────────────────────────────────────────
function SkeletonCard() {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-950 h-[330px] animate-pulse">
            <div className="mt-4 px-3 space-y-2">
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
            <div className="flex-1 mx-6 mt-4 bg-gray-100 dark:bg-gray-800 rounded" />
            <div className="px-4 pb-4 pt-3 flex justify-between">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
                <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-800" />
            </div>
        </div>
    );
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function RecentlyAdded() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [activeBrand, setActiveBrand] = useState<string>('All');

    const { products, brands, loading, error } = useHomepageProducts();

    const visibleProducts = activeBrand === 'All'
        ? products
        : products.filter(p => p.brand === activeBrand);

    return (
        <div className="py-8 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Recently Added
                    </h2>
                    <div className="flex items-center gap-2">
                        <button
                            ref={prevRef}
                            type="button"
                            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#fed700] hover:bg-[#fed700] hover:text-gray-800 transition-colors"
                            aria-label="Previous products"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            ref={nextRef}
                            type="button"
                            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#fed700] hover:bg-[#fed700] hover:text-gray-800 transition-colors"
                            aria-label="Next products"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Brand filter tabs */}
                {!error && brands.length > 0 && (
                    <div className="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-thin">
                        {['All', ...brands].map(brand => (
                            <button
                                key={brand}
                                onClick={() => setActiveBrand(brand)}
                                className={`px-4 py-1.5 text-sm rounded-full whitespace-nowrap border transition-colors ${
                                    activeBrand === brand
                                        ? 'bg-[#fed700] border-[#fed700] text-gray-800 font-semibold'
                                        : 'bg-gray-100 dark:bg-gray-800 border-transparent text-gray-600 dark:text-gray-300 hover:border-[#fed700]'
                                }`}
                            >
                                {brand}
                            </button>
                        ))}
                    </div>
                )}

                {/* Products carousel */}
                <div className="bg-slate-100 dark:bg-gray-800" style={{ gap: '1px' }}>
                    {loading ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px">
                            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                        </div>
                    ) : error ? (
                        <div className="py-16 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-600">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                            <p className="text-sm font-medium">Could not load products</p>
                            <p className="text-xs">Make sure the API server is running at <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">localhost:7195</code></p>
                        </div>
                    ) : (
                        <Swiper
                            key={activeBrand}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper: SwiperType) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }
                            }}
                            slidesPerView={2}
                            spaceBetween={1}
                            breakpoints={{
                                480:  { slidesPerView: 3 },
                                768:  { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                                1280: { slidesPerView: 6 },
                            }}
                        >
                            {visibleProducts.map((product, index) => (
                                <SwiperSlide key={`${activeBrand}-${index}`}>
                                    <ProductDisplay_V product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
}
