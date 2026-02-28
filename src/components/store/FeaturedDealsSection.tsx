import { ProductCard, type ProductCardItem } from "./ProductCard";

type DealItem = ProductCardItem;

const DEAL_ITEMS: DealItem[] = [
  {
    id: "speaker",
    name: "Wireless Audio System Multiroom 360",
    category: "Audio Speakers, TV & Audio",
    price: "$2,299",
    image: "/images/speaker.png",
  },
  {
    id: "tablet",
    name: "Tablet Red EliteBook Revolve 810 G2",
    category: "Laptops, Computers",
    price: "$2,100",
    oldPrice: "$2,299",
    image: "/images/tablet.png",
  },
  {
    id: "headphones",
    name: "White Solo 2 Wireless",
    category: "Accessories, Headphones",
    price: "$248.99",
    image: "/images/headphone.png",
  },
  {
    id: "phone",
    name: "Smartphone 6S 32GB LTE",
    category: "Smart Phones & Tablets",
    price: "$1,100",
    oldPrice: "$1,215",
    image: "/images/phone.png",
  },
  {
    id: "camera",
    name: "Purple NX Mini F1 Camera",
    category: "Cameras, Photography",
    price: "$559",
    image: "/images/camera.png",
  },
  {
    id: "printer",
    name: "Full Color LaserJet Pro M452dn",
    category: "Printers & Ink",
    price: "$1,050",
    image: "/images/printer.png",
  },
  {
    id: "console",
    name: "Game Console Destiny Special Edition",
    category: "Gaming, Laptops",
    price: "$150",
    image: "/images/console.png",
  },
  {
    id: "camcorder",
    name: "Camera C430W 4K Waterproof",
    category: "Cameras, Photography",
    price: "$590",
    image: "/images/camcorder.png",
  },
];

export function FeaturedDealsSection() {
  return (
    <section className="py-8 md:py-10 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <aside className="rounded-xl border-2 border-[#fed700] p-4 md:p-5 bg-white dark:bg-gray-900">
            <p className="text-2xl text-gray-600 dark:text-gray-200 mb-4">Special Offer</p>
            <img
              src="/images/console.png"
              alt="Special offer game controller"
              className="w-full h-auto object-contain mb-4"
              width={400}
              height={280}
            />
            <p className="text-[#0b4a77] dark:text-sky-300 font-semibold text-sm mb-5">
              Game Console Controller + USB 3.0 Cable
            </p>
            <p className="text-4xl font-medium text-gray-700 dark:text-gray-100">$99</p>
          </aside>

          <div className="xl:col-span-2 min-w-0">
            <div className="flex items-center gap-4 sm:gap-6 border-b border-gray-200 dark:border-gray-700 mb-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]">
              <button type="button" className="py-2 text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-[#fed700] shrink-0">
                Featured
              </button>
              <button type="button" className="py-2 text-base sm:text-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors shrink-0">
                On Sale
              </button>
              <button type="button" className="py-2 text-base sm:text-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors shrink-0">
                Top Rated
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 bg-slate-200" style={{ gap: "1px" }}>
              {DEAL_ITEMS.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
