export interface CameraImage {
    id: string;
    url: string;
    displayOrder: number;
}

export interface Camera {
    cameraId: string;
    brandName: string;
    productName: string;
    slug: string;
    announcedDate: string;
    price: string | null;
    awardScore: string | null;
    awardTitle: string | null;
    images: CameraImage[];
}

export interface CameraSection {
    brandName: string;
    cameras: Camera[];
}

export interface HomepageResponse {
    sections: CameraSection[];
}

// ── Local product shape (used by UI components) ───────────────────────────────
export interface ProductThumbnail {
    src: string;
    alt: string;
    width: number;
    height: number;
}



// ── Camera detail types ───────────────────────────────────────────────────────
export interface SpecItem {
    id: number;
    key: string;
    value: string;
    displayOrder: number;
}

export interface SpecGroup {
    id: number;
    groupName: string;
    displayOrder: number;
    items: SpecItem[];
}

export interface ReviewScore {
    category: string;
    score: number;
    displayOrder: number;
}

export interface CameraReview {
    id: string;
    url: string;
    description: string;
    awardScore: string;
    awardTitle: string;
    awardReviewLink: string;
    fullReviewLink: string;
    scores: ReviewScore[];
    goodFor: string[];
    notGoodFor: string[];
}

export interface SampleGalleryImage {
    id: number;
    url: string;
    displayOrder: number;
}

export interface SampleGallery {
    id: number;
    galleryId: string;
    title: string;
    imageCount: number;
    postedDate: string;
    galleryLink: string;
    displayOrder: number;
    images: SampleGalleryImage[];
}

export interface CameraDetail {
    cameraId: string;
    brandId: string;
    brandName: string;
    slug: string;
    productName: string;
    announcedDate: string;
    overviewTitle: string;
    totalImages: number;
    specGroupsTotal: number;
    scrapedAt: string;
    images: CameraImage[];
    specGroups: SpecGroup[];
    review: CameraReview | null;
    sampleGalleries: SampleGallery[];
}



export interface HomepageProduct {
    id: number;
    name: string;
    slug: string;
    brand: string;
    thumbnail: ProductThumbnail;
    price: { regular?: string; sale: string };
    onSale: boolean;
    stockStatus: 'instock' | 'outofstock';
    rating?: { average: number; count: number };
    shortDescription: string[];
    sku: string;
}
