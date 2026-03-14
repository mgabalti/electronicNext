"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/core/constants/routes";

type CategoryProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  image: string;
};

type CategoryBlock = {
  id: string;
  title: string;
  featuredImage: string;
  featuredImageAlt: string;
  products: CategoryProduct[];
};

const CATEGORIES: CategoryBlock[] = [
  {
    id: "television",
    title: "Television Entertainment",
    featuredImage: "/images/television.webp",
    featuredImageAlt: "Television and soundbar",
    products: [
      {
        id: "t1",
        name: "Game Console Controller + USB 3.0",
        category: "Game Consoles, Video",
        price: "$99.00",
        image: "/images/console.png",
      },
      {
        id: "t2",
        name: "Universal Headphones Case in",
        category: "Accessories, Headphone",
        price: "$159.00",
        image: "/images/headphone.png",
      },
      {
        id: "t3",
        name: "Tablet Thin EliteBook Revolve 810 G6",
        category: "Smart Phones & Tablets",
        price: "$1,300.00",
        image: "/images/tablet.png",
      },
      {
        id: "t4",
        name: "Wireless Audio System Multiroom",
        category: "Audio Speakers, TV &",
        price: "$2,299.00",
        image: "/images/speaker.png",
      },
      {
        id: "t5",
        name: "Smartphone 6S 32GB LTE",
        category: "Smart Phones & Tablets",
        price: "$1,100.00",
        oldPrice: "$1,215.00",
        image: "/images/phone.png",
      },
      {
        id: "t6",
        name: "Camera C430W 4K Waterproof",
        category: "Cameras, Photography",
        price: "$590.00",
        image: "/images/camcorder.png",
      },
    ],
  },

];

function MiniProductCard({ product }: { product: CategoryProduct }) {
  return (
    <Link
      href={ROUTES.CATALOG}
      className="grid grid-cols-2 items-center gap-3 p-3 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors group border-b border-r border-gray-100 dark:border-gray-800"
    >
      <div className="shrink-0 w-full h-24 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          height={64}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-0.5 truncate">
          {product.category}
        </p>
        <p className="text-[#0b4a77] dark:text-sky-300 font-semibold text-sm leading-tight mb-1 line-clamp-2">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className={`font-semibold text-base ${product.oldPrice ? "text-rose-500" : "text-gray-700 dark:text-gray-100"}`}>
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 dark:text-gray-500 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>
          <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:bg-[#fed700] hover:border-[#fed700] hover:text-gray-800 transition-colors shrink-0">
            <ShoppingCart className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function CategoryRow({ block }: { block: CategoryBlock }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // chunk products into groups of 4 for each slide
  const slides: CategoryProduct[][] = [];
  for (let i = 0; i < block.products.length; i += 4) {
    slides.push(block.products.slice(i, i + 4));
  }

  return (
    <div className="mb-10">
      {/* Header */}


      {/* Body */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 dark:border-gray-800 items-center"
        style={{
          backgroundImage: "url('/images/HomeV3ProductBackground.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "380px",
        }}
      >
        {/* Left: featured image */}
        <div className="flex items-center justify-center p-6 ">
          <img
            src={block.featuredImage}
            alt={block.featuredImageAlt}
            className="max-w-full  object-contain"
            width={400}
            height={380}
          />
        </div>

        {/* Right: product card carousel */}
        <div className="relative p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-[#fed700] pb-1">
              {block.title}
            </h2>
            <div className="flex items-center gap-1">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous"
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-[#fed700] hover:border-[#fed700] hover:text-gray-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                ref={nextRef}
                type="button"
                aria-label="Next"
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-[#fed700] hover:border-[#fed700] hover:text-gray-800 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            loop={slides.length > 1}
            pagination={{
              clickable: true,
              bulletClass: "cat-bullet",
              bulletActiveClass: "cat-bullet-active",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="cat-swiper h-full"
          >
            {slides.map((group, si) => (
              <SwiperSlide key={si}>
                <div className="grid grid-cols-2 gap-2">
                  {group.map((product) => (
                    <MiniProductCard key={product.id} product={product} />
                  ))}
                  {/* fill empty slots if group < 4 */}
                  {Array.from({ length: 4 - group.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="border-b border-r border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950" />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export function CategoryShowcaseSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {CATEGORIES.map((block) => (
          <CategoryRow key={block.id} block={block} />
        ))}
      </div>

      <style jsx global>{`
        .cat-swiper .swiper-pagination {
          position: relative;
          margin-top: 8px;
          display: flex;
          justify-content: center;
          gap: 6px;
        }
        .cat-bullet {
          height: 8px;
          width: 8px;
          border-radius: 20px;
          background: #d1d5db;
          cursor: pointer;
          transition: all ease-in-out 0.5s;
        }
        .cat-bullet-active {
          background: #fed700;
          width: 28px;

        }
      `}</style>
    </section>
  );
}
