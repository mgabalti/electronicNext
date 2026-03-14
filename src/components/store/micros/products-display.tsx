import { HomepageProduct } from '@/core/types/Product-detail.types';
import Image from 'next/image';
import Link from 'next/link';

type Product = HomepageProduct;

function removeTsSize(url: string): string {
    return url.replace(/TS\d+x\d+~/, '');
  }
const ProductDisplay_V = ({ product }: { product: Product }) => {
 
    return (
        <Link href={`/catalog/${product.slug}`} style={{height: '330px'}} className="flex flex-col  justify-between group cursor-pointer bg-white dark:bg-gray-950 h-full">
        <div className="mt-4 px-3">
            <p className="text-xs text-slate-400 font-medium dark:text-gray-500">
                {product.brand}
            </p>
            <h3 className="mt-1 font-semibold text-sky-600 dark:text-sky-400 text-sm line-clamp-2 min-h-[2.5rem]">
                {product.name}
            </h3>
        </div>
        <div className="relative h-48 bg-white dark:bg-gray-900">
            {product.thumbnail.src ? (
                <img
                    src={removeTsSize(product.thumbnail.src)}
                    alt={product.thumbnail.alt}
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain w-full h-full p-6 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-200 dark:text-gray-700" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
                    </svg>
                </div>
            )}
        </div>
        <div className="mt-1 px-4 pb-4 flex items-center justify-around">
            <p className="text-lg font-medium text-slate-500 dark:text-gray-400">
                {product.price.sale}
            </p>
            <span className="bg-slate-300 dark:bg-gray-700 w-7 h-7 rounded-full p-1.5 opacity-60 hover:opacity-100 hover:bg-[#fed700] dark:hover:bg-[#fed700] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z"/></svg>
            </span>
        </div>
    </Link>
    )
}

export default ProductDisplay_V;