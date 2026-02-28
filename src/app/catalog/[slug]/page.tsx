"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Heart, GitCompare, Star, StarHalf, ShoppingCart,
  ChevronRight, Search, ZoomIn,
} from "lucide-react";
import { ROUTES } from "@/core/constants/routes";
import { TopBar, Header, Navbar, StoreFooter } from "@/components/store";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SIDEBAR_CATEGORIES = [
  {
    name: "Laptops & Computers", count: 12, slug: "laptops",
    children: [
      { name: "Accessories", count: 2 },
      { name: "All in One", count: 1 },
      { name: "Gaming", count: 1 },
      { name: "Laptops", count: 5, active: true },
      { name: "Mac Computers", count: 1 },
      { name: "Peripherals", count: 1 },
      { name: "Servers", count: 1 },
      { name: "Ultrabooks", count: 1 },
    ],
  },
];

const PRODUCTS: Record<string, {
  id: string; slug: string; name: string; sku: string;
  breadcrumb: string[]; price: number; oldPrice?: number;
  rating: number; reviewCount: number;
  inStock: boolean; stockCount: number;
  images: string[];
  shortDescription: string[];
  description: string;
  specs: { label: string; value: string }[];
  accessories: { id: string; name: string; category: string; price: number; image: string }[];
}> = {
  "tablet-red-elitebook": {
    id: "4", slug: "tablet-red-elitebook",
    name: "Tablet Red EliteBook Revolve 810 G2",
    sku: "5487FB8/41",
    breadcrumb: ["Laptops", "Laptops & Computers", "Ultrabooks"],
    price: 2100, oldPrice: 2299,
    rating: 3.33, reviewCount: 3,
    inStock: true, stockCount: 8,
    images: [
      "https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    ],
    shortDescription: [
      "Intel Core i5 processors (13-inch model)",
      "Intel Iris Graphics 6100 (13-inch model)",
      "Flash storage",
      "Up to 10 hours of battery life (13-inch model)",
      "Force Touch trackpad (13-inch model)",
    ],
    description: "The EliteBook Revolve 810 G2 is a premium convertible business tablet built for professionals on the move. Featuring an Intel Core i5 processor and Intel Iris Graphics, it delivers reliable performance for everyday business tasks.",
    specs: [
      { label: "Processor", value: "Intel Core i5 (13-inch model)" },
      { label: "Graphics", value: "Intel Iris Graphics 6100" },
      { label: "Storage", value: "Flash storage SSD" },
      { label: "Battery", value: "Up to 10 hours" },
      { label: "Trackpad", value: "Force Touch trackpad" },
      { label: "SKU", value: "5487FB8/41" },
      { label: "Weight", value: "1.4 kg" },
      { label: "Warranty", value: "1 year" },
    ],
    accessories: [
      { id: "a1", name: "Tablet Red EliteBook Revolve 810 G2", category: "Laptops, Laptops &", price: 2100, image: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png" },
      { id: "a2", name: "Apple MacBook Pro MF841HN/A 13-inch Laptop", category: "Laptops, Laptops &", price: 1500, image: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png" },
    ],
  },
  "wireless-headphones": {
    id: "1", slug: "wireless-headphones",
    name: "White Solo 2 Wireless Headphones",
    sku: "BT-WH-S2-WH",
    breadcrumb: ["Accessories", "Headphones"],
    price: 248.99, oldPrice: 299.99,
    rating: 4.5, reviewCount: 128,
    inStock: true, stockCount: 12,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=600",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600",
    ],
    shortDescription: [
      "Active Noise Cancellation (ANC)",
      "Transparency mode for ambient awareness",
      "24-hour battery life with quick charge",
      "Built-in microphone for calls",
      "Multi-device pairing (up to 2 devices)",
    ],
    description: "Experience premium sound with the Solo 2 Wireless headphones. Featuring advanced noise-cancellation technology, these headphones deliver crisp highs, powerful lows, and rich mids.",
    specs: [
      { label: "Driver Size", value: "40mm" },
      { label: "Frequency", value: "20Hz – 20kHz" },
      { label: "Impedance", value: "32 Ω" },
      { label: "Connectivity", value: "Bluetooth 5.2, 3.5mm jack" },
      { label: "Battery", value: "Up to 24 hours" },
      { label: "Charging", value: "USB-C fast charge" },
      { label: "Weight", value: "240g" },
      { label: "Warranty", value: "2 years" },
    ],
    accessories: [
      { id: "a1", name: "White Solo 2 Wireless Headphones", category: "Accessories, Headphones", price: 248.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
      { id: "a2", name: "Universal Headphones Case in Black", category: "Accessories", price: 159, image: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png" },
    ],
  },
  "smartwatch-pro": {
    id: "2", slug: "smartwatch-pro",
    name: "Smartwatch Pro LTE Wifi Waterproof",
    sku: "TW-SP-01-BK",
    breadcrumb: ["Wearables", "Smartwatches"],
    price: 700, oldPrice: 725,
    rating: 5, reviewCount: 87,
    inStock: true, stockCount: 5,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    ],
    shortDescription: [
      "Always-on AMOLED display",
      "Built-in LTE – leave your phone behind",
      "GPS tracking for runs, hikes & cycling",
      "50m waterproof – swim with confidence",
      "Health suite: ECG, SpO2, sleep tracking",
    ],
    description: "The Smartwatch Pro is your ultimate fitness companion. With built-in LTE, GPS, heart rate monitoring, and 50m water resistance.",
    specs: [
      { label: "Display", value: "1.9\" AMOLED, 410×502px" },
      { label: "Connectivity", value: "LTE, Wi-Fi, Bluetooth 5.0" },
      { label: "GPS", value: "Built-in GPS + GLONASS" },
      { label: "Water Resistance", value: "50m (5ATM)" },
      { label: "Battery Life", value: "Up to 18 hours" },
      { label: "Sensors", value: "Heart rate, SpO2, Accelerometer" },
      { label: "Compatibility", value: "iOS 14+ / Android 8+" },
      { label: "Warranty", value: "1 year" },
    ],
    accessories: [
      { id: "a1", name: "Smartwatch Pro LTE", category: "Wearables", price: 700, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300" },
      { id: "a2", name: "Sport Band Black", category: "Accessories", price: 49, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
    ],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function StarRating({ rating, count }: { rating: number; count: number }) {
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
      <span className="text-xs text-sky-600 dark:text-sky-400 hover:underline cursor-pointer">
        ({count} customer reviews)
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "tablet-red-elitebook";
  const product = PRODUCTS[slug] ?? PRODUCTS["tablet-red-elitebook"];

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"accessories" | "description" | "specification" | "reviews" | "more">("accessories");
  const [wishlisted, setWishlisted] = useState(false);
  const [allSelected, setAllSelected] = useState([true, true]);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const bundleTotal = product.accessories
    .filter((_, i) => allSelected[i])
    .reduce((sum, a) => sum + a.price, 0);
  const bundleCount = allSelected.filter(Boolean).length;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb bar */}
        <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 flex-wrap">
              <Link href={ROUTES.HOME} className="hover:text-[#0b4a77] dark:hover:text-sky-400">Home</Link>
              <ChevronRight className="w-3 h-3" />
              {product.breadcrumb.map((crumb, i) => (
                <span key={crumb} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3" />}
                  <Link href={ROUTES.CATALOG} className="hover:text-[#0b4a77] dark:hover:text-sky-400">{crumb}</Link>
                </span>
              ))}
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{product.name}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-16 py-6">
          {/* ── 3-column layout: Sidebar | Image | Info ── */}
          <div className="flex gap-6">

            {/* ── Sidebar ── */}
            <aside className="hidden lg:flex flex-col gap-4 w-80 shrink-0">
              {/* Show All Categories */}
              <div className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden">
                <button className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  Show All Categories
                  <ChevronRight className="w-4 h-4" />
                </button>

                {SIDEBAR_CATEGORIES.map(cat => (
                  <div key={cat.name}>
                    {/* Parent category */}
                    <div className="px-3 py-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                      <Link
                        href={ROUTES.CATALOG}
                        className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-[#0b4a77] dark:hover:text-sky-400 flex items-center justify-between"
                      >
                        {cat.name}
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-normal">({cat.count})</span>
                      </Link>
                    </div>
                    {/* Children */}
                    <ul className="bg-white dark:bg-gray-900 pb-1">
                      {cat.children.map(child => (
                        <li key={child.name}>
                          <Link
                            href={ROUTES.CATALOG}
                            className={`flex items-center justify-between px-5 py-1 text-xs transition-colors ${child.active
                              ? "font-bold text-gray-800 dark:text-gray-100"
                              : "text-gray-500 dark:text-gray-400 hover:text-[#0b4a77] dark:hover:text-sky-400"
                              }`}
                          >
                            {child.name}
                            <span className="text-gray-400 dark:text-gray-500 font-normal">({child.count})</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Promo banner */}
              <div className="rounded overflow-hidden bg-gray-900 text-white p-4 relative min-h-[180px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
                  alt="Promo"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="relative z-20">
                  <p className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">All-New Sport</p>
                  <p className="text-2xl font-black text-white leading-none">4K</p>
                  <p className="text-sm font-bold text-white uppercase">Cameras</p>
                  <p className="text-[10px] text-gray-300 mt-1">Starting at</p>
                  <p className="text-lg font-black text-[#fed700]">$79<sup className="text-xs">99</sup></p>
                </div>
              </div>
            </aside>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {/* ── Center: Image gallery ── */}
                <div className="flex flex-col gap-3 w-full  shrink-0">
                  {/* Main image */}
                  <div className="relative bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden group">
                    {discount && (
                      <span className="absolute top-2 left-2 z-10 bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                        -{discount}%
                      </span>
                    )}
                    <button className="absolute top-2 right-2 z-10 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <img
                      src={product.images[activeImage]}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`shrink-0 w-16 h-16 border-2 bg-white dark:bg-gray-900 overflow-hidden transition-colors ${activeImage === i
                          ? "border-[#fed700]"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-400"
                          }`}
                      >
                        <img src={src} alt="" className="w-full h-full object-contain p-1" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Right: Product info ── */}
                <div className="flex-1 min-w-0 flex flex-col gap-3">
                  {/* Category breadcrumb */}
                  <p className="text-xs text-sky-600 dark:text-sky-400">
                    {product.breadcrumb.map((c, i) => (
                      <span key={c}>
                        {i > 0 && ", "}
                        <Link href={ROUTES.CATALOG} className="hover:underline">{c}</Link>
                      </span>
                    ))}
                  </p>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-snug">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <StarRating rating={product.rating} count={product.reviewCount} />

                  {/* Wishlist + Compare */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-3">
                    <button
                      onClick={() => setWishlisted(v => !v)}
                      className="flex items-center gap-1.5 hover:text-rose-500 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${wishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
                      Wishlist
                    </button>
                    <span className="text-gray-200 dark:text-gray-700">|</span>
                    <button className="flex items-center gap-1.5 hover:text-[#0b4a77] dark:hover:text-sky-400 transition-colors">
                      <GitCompare className="w-4 h-4" />
                      Compare
                    </button>
                  </div>

                  {/* Short description */}
                  <ul className="space-y-1">
                    {product.shortDescription.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-2xl font-bold text-rose-500">
                      ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                    {product.oldPrice && (
                      <span className="text-base text-gray-400 dark:text-gray-500 line-through">
                        ${product.oldPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    )}
                  </div>

                  {/* Qty + Add to cart */}
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={product.stockCount}
                      value={quantity}
                      onChange={e => setQuantity(Math.max(1, Math.min(product.stockCount, Number(e.target.value))))}
                      className="w-20 px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#fed700] focus:border-[#fed700] rounded"
                    />
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#fed700] hover:bg-[#e6c200] text-gray-800 font-semibold text-sm rounded transition-colors shadow-sm">
                      <ShoppingCart className="w-4 h-4" />
                      Add to cart
                    </button>
                  </div>

                  {/* Pay with Link */}
                  <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Pay with link
                  </button>

                  {/* Stock info */}
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    SKU: <span className="text-gray-600 dark:text-gray-400">{product.sku}</span>
                  </p>
                </div>
              </div>
              <div className="mt-8  overflow-hidden">
                {/* Tab headers */}
                <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  {(["accessories", "description", "specification", "reviews", "more"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-3 text- font-semibold capitalize whitespace-nowrap transition-colors border-b-2 -mb-px ${activeTab === tab
                        ? "border-[#fed700] text-gray-900 dark:text-gray-100"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        }`}
                    >
                      {tab === "more" ? "More Products" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab body */}
                <div className="p-6 bg-white dark:bg-gray-950">

                  {/* ── Accessories tab ── */}
                  {activeTab === "accessories" && (
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                      {/* Product bundle */}
                      <div className="flex items-center gap-3 flex-wrap flex-1">
                        {product.accessories.map((acc, i) => (
                          <div key={acc.id} className="flex items-center gap-3">
                            {i > 0 && <span className="text-2xl text-gray-400 font-light">+</span>}
                            <div className="flex flex-col items-center gap-1">
                              <label className="flex flex-col items-center gap-1.5 cursor-pointer">
                                <div className={`relative border-2 rounded p-2 transition-colors ${allSelected[i] ? "border-[#fed700]" : "border-gray-200 dark:border-gray-700"}`}>
                                  <input
                                    type="checkbox"
                                    checked={allSelected[i]}
                                    onChange={() => setAllSelected(prev => prev.map((v, idx) => idx === i ? !v : v))}
                                    className="absolute top-1 left-1 w-3 h-3 accent-[#fed700]"
                                  />
                                  <img src={acc.image} alt={acc.name} className="w-20 h-20 object-contain" />
                                </div>
                                <p className="text-xs text-sky-600 dark:text-sky-400 font-medium text-center max-w-[90px] line-clamp-2">{acc.name}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{acc.category}</p>
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">${acc.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bundle total + CTA */}
                      <div className="flex flex-col items-start gap-3 min-w-[160px]">
                        <p className="text-2xl font-bold text-rose-500">
                          ${bundleTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">for {bundleCount} item(s)</p>
                        <button className="px-5 py-2 border border-gray-300 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors font-medium">
                          Add all to cart
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ── Description tab ── */}
                  {activeTab === "description" && (
                    <div className="max-w-3xl space-y-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{product.description}</p>
                      <ul className="space-y-2 mt-3">
                        {product.shortDescription.map(item => (
                          <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fed700] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── Specification tab ── */}
                  {activeTab === "specification" && (
                    <div className="max-w-2xl">
                      <table className="w-full text-sm">
                        <tbody>
                          {product.specs.map(({ label, value }, i) => (
                            <tr key={label} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-950"}>
                              <td className="py-2.5 px-4 font-medium text-gray-500 dark:text-gray-400 w-44">{label}</td>
                              <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200">{value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* ── Reviews tab ── */}
                  {activeTab === "reviews" && (
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-6 mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded">
                        <div className="text-center">
                          <p className="text-5xl font-bold text-gray-900 dark:text-gray-100">{product.rating.toFixed(1)}</p>
                          <StarRating rating={product.rating} count={product.reviewCount} />
                        </div>
                        <div className="flex-1 space-y-1.5">
                          {[5, 4, 3, 2, 1].map(star => {
                            const pct = star === 5 ? 40 : star === 4 ? 20 : star === 3 ? 30 : star === 2 ? 5 : 5;
                            return (
                              <div key={star} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                <span className="w-3">{star}</span>
                                <Star className="w-3 h-3 fill-[#fed700] text-[#fed700]" />
                                <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                  <div className="h-full rounded-full bg-[#fed700]" style={{ width: `${pct}%` }} />
                                </div>
                                <span className="w-8 text-right">{pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-5">
                        {[
                          { name: "Alex M.", date: "Jan 15, 2026", rating: 4, text: "Great product, works exactly as described. Build quality is solid and delivery was fast." },
                          { name: "Sarah K.", date: "Dec 28, 2025", rating: 3, text: "Decent for the price. A few minor quirks but overall satisfied with the purchase." },
                          { name: "James R.", date: "Nov 10, 2025", rating: 4, text: "Excellent value. Would recommend to anyone looking for a reliable option in this category." },
                        ].map(r => (
                          <div key={r.name} className="border-b border-gray-100 dark:border-gray-800 pb-5 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-[#fed700]/20 flex items-center justify-center text-xs font-bold text-[#c9a900]">{r.name[0]}</div>
                                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{r.name}</span>
                              </div>
                              <span className="text-xs text-gray-400">{r.date}</span>
                            </div>
                            <div className="flex gap-0.5 mb-1.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "fill-[#fed700] text-[#fed700]" : "text-gray-200 dark:text-gray-700"}`} />
                              ))}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{r.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ── More Products tab ── */}
                  {activeTab === "more" && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {[
                        { name: "Laptop Screener CX70 17.3″", price: "$2,399.00", image: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png", cat: "Laptops" },
                        { name: "Smartphone 6S 128GB LTE", price: "$750.00", oldPrice: "$780.00", image: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png", cat: "Smart Phones" },
                        { name: "Purple NX Mini Camera", price: "$559.00", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300", cat: "Cameras" },
                        { name: "Game Console Controller", price: "$99.00", image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=300", cat: "Gaming" },
                      ].map((item, i) => (
                        <Link
                          key={i}
                          href={ROUTES.CATALOG}
                          className="group border border-gray-100 dark:border-gray-800 rounded p-3 hover:border-[#fed700]/50 hover:shadow-sm transition-all"
                        >
                          <div className="aspect-square bg-gray-50 dark:bg-gray-900 mb-2 flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform" />
                          </div>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{item.cat}</p>
                          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 line-clamp-2 mb-1">{item.name}</p>
                          <div className="flex items-baseline gap-1.5 flex-wrap">
                            <span className={`text-sm font-bold ${item.oldPrice ? "text-rose-500" : "text-gray-800 dark:text-gray-100"}`}>{item.price}</span>
                            {item.oldPrice && <span className="text-xs text-gray-400 line-through">{item.oldPrice}</span>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Tabs ── */}

        </div>
      </main>

      <StoreFooter />
    </div>
  );
}
