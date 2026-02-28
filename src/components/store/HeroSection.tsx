"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ROUTES } from "@/core/constants/routes";
import { HERO_SLIDES } from "./heroSlides";

function SlideContent({
  slide,
}: {
  slide: (typeof HERO_SLIDES)[number];
}) {
  return (
    <>
      <div
        className="absolute inset-0  bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${slide.bgImage})` }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-28 py-8 md:py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[300px] md:min-h-[380px]">
          <div className="order-2 lg:order-1">
            <p className="text-sm md:text-lg text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold mb-2">
              {slide.subtitle}
            </p>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-tight mb-4">
              {slide.title}
            </h1>
            {slide.price && (
              <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {slide.price}
              </p>
            )}
            <Link
              href={ROUTES.CATALOG}
              className="inline-flex items-center justify-center rounded-3xl bg-[#fed700] px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-medium text-gray-800 hover:bg-[#e6c200] transition-colors shadow-md hover:shadow-lg"
            >
              {slide.ctaText}
            </Link>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[220px] sm:max-w-xs md:max-w-md aspect-square">
              <img
                src={slide.productImage}
                alt={slide.productAlt}
                className="w-full h-full object-contain drop-shadow-2xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="relative min-w-0 flex-[0_0_100%]">
          <SlideContent slide={HERO_SLIDES[0]} />
        </div>
        <div className="flex justify-center gap-2 py-4">
          {HERO_SLIDES.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                index === 0 ? "bg-[#fed700]" : "bg-gray-300"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "hero-pagination-bullet",
          bulletActiveClass: "hero-pagination-bullet-active",
        }}
        navigation
        onBeforeInit={(swiper: SwiperType) => {
          if (!swiper.params.navigation || typeof swiper.params.navigation === "boolean") {
            return;
          }
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              <SlideContent slide={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        type="button"
        className="hero-prev flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-md items-center justify-center text-gray-800 dark:text-gray-100 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextRef}
        type="button"
        className="hero-next flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 shadow-md items-center justify-center text-gray-800 dark:text-gray-100 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
