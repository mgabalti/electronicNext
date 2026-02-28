// components/FeaturedProductsSection.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import UnderlineTitle from './micros/titles';
// types.ts (or inside your component file)
export interface Product {
    category: 'featured' | 'top-selling' | 'on-sale';
    title: string;
    price: string;
    originalPrice?: string;     // optional – only when there's a discount/strike-through
    imageUrl: string;
    rating?: number | null;     // null = no stars shown, number = 1–5
}

// data/products.ts
export const products: Product[] = [
    // Featured Products
    {
        category: 'featured',
        title: 'Tablet Thin EliteBook Revolve 810 G6',
        price: '$1,300.00',
        originalPrice: '$1,300.00',
        imageUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
        rating: null,
    },
    {
        category: 'featured',
        title: 'Notebook Widescreen Z51-70 40K6013UPB',
        price: '$1,100.00',
        originalPrice: '$1,100.00',
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        rating: null,
    },
    {
        category: 'featured',
        title: 'Smartphone 6S 128GB LTE',
        price: '$750.00',
        originalPrice: '$780.00',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
        rating: null,
    },

    // Top Selling Products
    {
        category: 'top-selling',
        title: 'Game Console Controller + USB 3.0 Cable',
        price: '$99.00',
        imageUrl: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=400',
        rating: 4,
    },
    {
        category: 'top-selling',
        title: 'Universal Headphones Case in Black',
        price: '$159.00',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400',
        rating: null,
    },
    {
        category: 'top-selling',
        title: 'Tablet Thin EliteBook Revolve 810 G6',
        price: '$1,300.00',
        imageUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400',
        rating: null,
    },

    // On-sale Products
    {
        category: 'on-sale',
        title: 'Apple MacBook Pro MF841HN/A 13-inch Laptop',
        price: '$1,500.00',
        originalPrice: '$1,800.00',
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
        rating: 4,
    },
    {
        category: 'on-sale',
        title: 'Smartwatch 2.0 LTE Wifi Waterproof',
        price: '$700.00',
        originalPrice: '$725.00',
        imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
        rating: 5,
    },
    {
        category: 'on-sale',
        title: 'Ultrabook UX305CA-FC050T',
        price: '$1,200.00',
        originalPrice: '$1,218.00',
        imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
        rating: 5,
    },
];
export default function FeaturedProductsSection() {
    return (
        <div className="w-full xl:px-20 lg:px-16 mx-auto  py-10 bg-white dark:bg-gray-950">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
                {/* Featured */}
                <div className="space-y-6">
                    <UnderlineTitle title="Featured Products" />
                    <div className="space-y-3">
                        {products
                            .filter(p => p.category === 'featured')
                            .map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                    </div>
                </div>

                {/* Top Selling */}
                <div className="space-y-6">
                    <UnderlineTitle title="Top Selling Products" />
                    <div className="space-y-3">
                        {products
                            .filter(p => p.category === 'top-selling')
                            .map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                    </div>
                </div>

                {/* On-sale */}
                <div className="space-y-6">
                    <UnderlineTitle title="On-sale Products" />
                    <div className="space-y-3">
                        {products
                            .filter(p => p.category === 'on-sale')
                            .map((product, idx) => (
                                <ProductCard key={idx} {...product} />
                            ))}
                    </div>
                </div>
                <div>
                    <img className='mt-10' src="https://electro.madrasthemes.com/wp-content/uploads/2019/04/footer-widget-img-01.jpg" alt="" />
                </div>
            </div>

            {/* Right side promotional banner */}

        </div>
    );
}

// Reusable small product card
type ProductCardProps = {
    title: string;
    price: string;
    originalPrice?: string;
    rating?: number | null;
    imageUrl: string;
};


function ProductCard({ title, price, originalPrice, rating, imageUrl }: ProductCardProps) {
    return (
        <div className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 rounded-lg transition-colors mb-0">
            {/* Image placeholder */}
            <div className="w-20 h-20 sm:w-18 sm:h-18 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-sm font-bold text-sky-600  line-clamp-2">
                    {title}
                </h4>
                {rating !== null && rating !== undefined && (
                    <div className=" flex items-center ">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <span key={i} className="text-yellow-400 flex my-1">
                                    <FontAwesomeIcon className='text-xs leading-none' icon={i < rating ? faStar : faStarEmpty} />
                                </span>
                            ))}
                    </div>
                )}
                <div className=" flex items-baseline  gap-2">
                    <span className={originalPrice && originalPrice !== price ? "text-sm font-medium text-rose-700" : "text-sm font-medium text-slate-500 dark:text-gray-400"}>{price}</span>
                    {originalPrice && originalPrice !== price && (
                        <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
                    )}
                </div>


            </div>
        </div>
    );
}