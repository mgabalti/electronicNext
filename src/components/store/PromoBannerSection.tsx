import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";

type PromoBanner = {
  id: string;
  lines: Array<{ text: string; emphasis: boolean; small?: boolean }>;
  ctaLabel?: string;
  price?: { main: string; sup: string };
  highlight?: string;
  image: string;
  imageAlt: string;
};

const PROMO_BANNERS: PromoBanner[] = [
  {
    id: "cameras",
    lines: [
      { text: "CATCH THE", emphasis: false },
      { text: "HOTTEST", emphasis: true },
      { text: "DEALS", emphasis: true },
      { text: "IN CAMERAS", emphasis: false },
    ],
    ctaLabel: "Shop now",
    image: "/images/cameras-resized.webp",
    imageAlt: "Camera",
  },
  {
    id: "360-cameras-price",
    lines: [
      { text: "THE NEW", emphasis: false },
      { text: "360 CAMERAS", emphasis: true },
      { text: "FROM", emphasis: false },
    ],
    price: { main: "$749", sup: "99" },
    image: "/images/laptop.webp",
    imageAlt: "360 cameras",
  },
  {
    id: "tablets-phones",
    lines: [
      { text: "TABLETS,", emphasis: false },
      { text: "SMARTPHONES", emphasis: false },
      { text: "AND MORE", emphasis: false },
      { text: "UP TO", emphasis: false, small: true },
    ],
    highlight: "70%",
    image: "/images/cameras-resized.webp",
    imageAlt: "Tablets and smartphones",
  },
  {
    id: "360-cameras-off",
    lines: [
      { text: "THE NEW", emphasis: false },
      { text: "360 CAMERAS", emphasis: true },
      { text: "UP TO", emphasis: false, small: true },
    ],
    highlight: "70%",
    image: "/images/laptop.webp",
    imageAlt: "360 cameras",
  },
];



export function PromoBannerSection() {
  return (
    <section className="bg-[#f7f7f7] dark:bg-gray-900 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3  lg:divide-gray-300 dark:lg:divide-gray-700">
          {PROMO_BANNERS.map((banner) => (
            <Link
              key={banner.id}
              href={ROUTES.CATALOG}
              className="group flex bg-gray-200/70 items-center gap-4 lg:gap-6 px-4 lg:px-6 rounded-lg dark:bg-gray-900 transition-colors"
            >
              <div className="relative  w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 flex items-center justify-center">
                <img
                  src={banner.image}
                  alt={banner.imageAlt}
                  className="max-w-full max-h-full object-contain"
                  width={128}
                  height={128}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col">
                  {banner.lines.map((line, i) => (
                    <span
                      key={i}
                      className={
                        line.small
                          ? "text-xs md:text-sm uppercase text-gray-500 dark:text-gray-400"
                          : "text-sm md:text-base uppercase " +
                            (line.emphasis ? "font-bold text-gray-800 dark:text-gray-100" : "text-gray-500 dark:text-gray-400")
                      }
                    >
                      {line.text}
                    </span>
                  ))}
                  {banner.price && (
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-0.5">
                      {banner.price.main}
                      <sup className="text-lg md:text-xl font-bold align-super">{banner.price.sup}</sup>
                    </span>
                  )}
                  {banner.highlight && (
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-0.5">
                      {banner.highlight}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  {banner.ctaLabel && (
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{banner.ctaLabel}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
