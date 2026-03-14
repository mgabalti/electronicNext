import { apiClient } from '@/core/api/client';
import { Camera, CameraDetail, HomepageProduct, HomepageResponse } from '../types/Product-detail.types';

export function removeTsPrefix(url: string): string {
    return url.replace(/T[SC]\d+x\d+[^~]*~/, '');
}


function toHomepageProduct(cam: Camera, idx: number): HomepageProduct {
    const sorted = [...cam.images].sort((a, b) => a.displayOrder - b.displayOrder);
    return {
        id: idx,
        name: cam.productName,
        slug: cam.slug,
        brand: cam.brandName,
        thumbnail: {
            src: sorted[0]?.url ?? '',
            alt: cam.productName,
            width: 300,
            height: 300,
        },
        price: { sale: cam.price ?? 'N/A' },
        onSale: false,
        stockStatus: 'instock',
        rating: cam.awardScore
            ? { average: parseFloat(cam.awardScore) / 20, count: 0 }
            : undefined,
        shortDescription: [
            cam.announcedDate ? `Announced: ${cam.announcedDate}` : '',
            cam.awardTitle ?? '',
        ].filter(Boolean),
        sku: cam.cameraId,
    };
}

export interface HomepageData {
    products: HomepageProduct[];
    brands: string[];
}

export async function fetchHomepageProducts(signal?: AbortSignal): Promise<HomepageData> {
    const data = await apiClient<HomepageResponse>('cameras/homepage', { signal });
    const products: HomepageProduct[] = [];
    let idx = 0;
    for (const section of data.sections) {
        for (const cam of section.cameras) {
            products.push(toHomepageProduct(cam, idx++));
        }
    }
    const brands = Array.from(new Set(data.sections.map(s => s.brandName)));
    return { products, brands };
}


export async function fetchCameraDetail(slug: string, signal?: AbortSignal): Promise<CameraDetail> {
    return apiClient<CameraDetail>(`cameras/${slug}`, { signal });
}
