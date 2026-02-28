"use client";
// components/RecentlyAdded.tsx
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import ProductDisplay_V from './micros/products-display';

interface Product {
    id: number;                    // post ID from class/post-*
    name: string;
    slug: string;                  // derived from URL
    categories: string[];          // main + sub-categories
    thumbnail: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    price: {
        regular?: string;            // if on sale
        sale: string;
    };
    onSale: boolean;
    stockStatus: 'instock' | 'outofstock';
    rating?: {
        average: number;
        count: number;
    };
    shortDescription: string[];    // bullet points as array
    sku: string;
    addToCart: {
        text: 'Add to cart' | 'Read more';
        url: string;                 // relative or full add-to-cart link
        productId: number;
    };
    actions: {
        wishlist: boolean;           // has wishlist button
        compare: boolean;
    };
}

const products: Product[] = [
    {
        id: 2628,
        name: "Powerbank 1130 mAh Blue",
        slug: "powerbank-1130-mah-blue",
        categories: ["Accessories", "Power Banks"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png",
            alt: "Powerbank 1130 mAh Blue",
            width: 300,
            height: 300
        },
        price: {
            regular: "$210.00",
            sale: "$200.00"
        },
        onSale: true,
        stockStatus: "instock",
        rating: {
            average: 0,
            count: 0
        },
        shortDescription: [
            "11300 mAh",
            "LED Indicator",
            "5V",
            "2.0A Output"
        ],
        sku: "5487FB8/09",
        addToCart: {
            text: "Add to cart",
            url: "/?add-to-cart=2628",
            productId: 2628
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2613,
        name: "Laptop Screener CX70 2QF-621XPL 17.3″ 4210",
        slug: "laptop-screener-cx70-2qf-621xpl-17-3-4210",
        categories: ["Laptops", "Laptops & Computers"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png",
            alt: "Laptop Screener CX70 2QF-621XPL 17.3\" 4210",
            width: 300,
            height: 300
        },
        price: {
            sale: "$2,399.00"   // no regular price → not on sale
        },
        onSale: false,
        stockStatus: "outofstock",
        rating: {
            average: 4.67,
            count: 3
        },
        shortDescription: [
            "Intel Core i5 processors (13-inch model)",
            "Intel Iris Graphics 6100 (13-inch model)",
            "Flash storage",
            "Up to 10 hours of battery life2 (13-inch model)",
            "Force Touch trackpad (13-inch model)"
        ],
        sku: "5487FB8/04",
        addToCart: {
            text: "Read more",
            url: "https://electro.madrasthemes.com/product/laptop-screener-cx70-2qf-621xpl-17-3-4210/",
            productId: 2613
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2715,
        name: "GameConsole Destiny Special Edition",
        slug: "gameconsole-destiny-special-edition-2",
        categories: ["Game Consoles", "Video Games & Consoles"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png",
            alt: "GameConsole Destiny Special Edition",
            width: 300,
            height: 300
        },
        price: {
            sale: "$789.00"
        },
        onSale: false,
        stockStatus: "instock",
        rating: {
            average: 0,
            count: 0
        },
        shortDescription: [
            "Play online with your friends, get free games, save games online and more with PlayStation",
            "Cutting edge graphics bring game worlds to life like never before, and next gen",
            "Connect with your friends to broadcast and celebrate your epic moments",
            "Perfect for both new players and players new to PS4"
        ],
        sku: "5487FB8/40",
        addToCart: {
            text: "Add to cart",
            url: "/?add-to-cart=2715",
            productId: 2715
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2628,
        name: "Powerbank 1130 mAh Blue",
        slug: "powerbank-1130-mah-blue",
        categories: ["Accessories", "Power Banks"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/powerbank-300x300.png",
            alt: "Powerbank 1130 mAh Blue",
            width: 300,
            height: 300
        },
        price: {
            regular: "$210.00",
            sale: "$200.00"
        },
        onSale: true,
        stockStatus: "instock",
        rating: {
            average: 0,
            count: 0
        },
        shortDescription: [
            "11300 mAh",
            "LED Indicator",
            "5V",
            "2.0A Output"
        ],
        sku: "5487FB8/09",
        addToCart: {
            text: "Add to cart",
            url: "/?add-to-cart=2628",
            productId: 2628
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2613,
        name: "Laptop Screener CX70 2QF-621XPL 17.3″ 4210",
        slug: "laptop-screener-cx70-2qf-621xpl-17-3-4210",
        categories: ["Laptops", "Laptops & Computers"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/applap-300x300.png",
            alt: "Laptop Screener CX70 2QF-621XPL 17.3\" 4210",
            width: 300,
            height: 300
        },
        price: {
            sale: "$2,399.00"   // no regular price → not on sale
        },
        onSale: false,
        stockStatus: "outofstock",
        rating: {
            average: 4.67,
            count: 3
        },
        shortDescription: [
            "Intel Core i5 processors (13-inch model)",
            "Intel Iris Graphics 6100 (13-inch model)",
            "Flash storage",
            "Up to 10 hours of battery life2 (13-inch model)",
            "Force Touch trackpad (13-inch model)"
        ],
        sku: "5487FB8/04",
        addToCart: {
            text: "Read more",
            url: "https://electro.madrasthemes.com/product/laptop-screener-cx70-2qf-621xpl-17-3-4210/",
            productId: 2613
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2715,
        name: "GameConsole Destiny Special Edition",
        slug: "gameconsole-destiny-special-edition-2",
        categories: ["Game Consoles", "Video Games & Consoles"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/game1-300x300.png",
            alt: "GameConsole Destiny Special Edition",
            width: 300,
            height: 300
        },
        price: {
            sale: "$789.00"
        },
        onSale: false,
        stockStatus: "instock",
        rating: {
            average: 0,
            count: 0
        },
        shortDescription: [
            "Play online with your friends, get free games, save games online and more with PlayStation",
            "Cutting edge graphics bring game worlds to life like never before, and next gen",
            "Connect with your friends to broadcast and celebrate your epic moments",
            "Perfect for both new players and players new to PS4"
        ],
        sku: "5487FB8/40",
        addToCart: {
            text: "Add to cart",
            url: "/?add-to-cart=2715",
            productId: 2715
        },
        actions: {
            wishlist: true,
            compare: true
        }
    },
    {
        id: 2717,
        name: "Tablet Red EliteBook Revolve 810 G2",
        slug: "tablet-red-elitebook-revolve-810-g2",
        categories: ["Laptops", "Laptops & Computers", "Ultrabooks"],
        thumbnail: {
            src: "https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet-300x300.png",
            alt: "Tablet Red EliteBook Revolve 810 G2",
            width: 300,
            height: 300
        },
        price: {
            regular: "$2,299.00",
            sale: "$2,100.00"
        },
        onSale: true,
        stockStatus: "instock",
        rating: {
            average: 3.33,
            count: 3
        },
        shortDescription: [
            "Intel Core i5 processors (13-inch model)",
            "Intel Iris Graphics 6100 (13-inch model)",
            "Flash storage",
            "Up to 10 hours of battery life2 (13-inch model)",
            "Force Touch trackpad (13-inch model)"
        ],
        sku: "5487FB8/41",
        addToCart: {
            text: "Add to cart",
            url: "/?add-to-cart=2717",
            productId: 2717
        },
        actions: {
            wishlist: true,
            compare: true
        }
    }
];
export default function RecentlyAdded() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="py-8 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950">
            <div className=" mx-auto">
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

                {/* Category tags row */}
                <div className="flex gap-3 mb-5 overflow-x-auto pb-2 scrollbar-thin">
                    {["Accessories, Headphone", "Accessories, Headphones", "Ultra Wireless S50",
                        "Game Consoles, Video", "Audio Speakers, TV &", "Laptops, Laptops &",
                        "Accessories, Headphones"
                    ].map((cat, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full whitespace-nowrap"
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Products carousel */}
                <div className="bg-slate-100 dark:bg-gray-800" style={{ gap: '1px' }}>
                    <Swiper
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
                        {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <ProductDisplay_V product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}