/**
 * Hero carousel slide data from demo.html
 * Place images in public/images/ to match these paths.
 */
export interface HeroSlideData {
  id: string;
  subtitle: string;
  title: string;
  price?: string;
  ctaText: string;
  bgImage: string;
  productImage: string;
  productAlt: string;
}

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: "slide-1",
    subtitle: "SHOP TO GET WHAT YOU LOVE",
    title: "TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF",
    ctaText: "Start Buying",
    bgImage: "/images/background.jpg",
    productImage: "/images/Sounddevice.webp",
    productAlt: "Sound device",
  },
  {
    id: "slide-2",
    subtitle: "UNDER FAVORABLE SMARTWATCHES",
    title: "THE NEW STANDARD",
    price: "$749.99",
    ctaText: "Start Buying",
    bgImage: "/images/HomeV3ProductBackground.jpg",
    productImage: "/images/Smartwatchess.webp",
    productAlt: "Smartwatches",
  },
  {
    id: "slide-3",
    subtitle: "SHOP TO GET WHAT YOU LOVE",
    title: "TIMEPIECES THAT MAKE A STATEMENT UP TO 40% OFF",
    ctaText: "Start Buying",
    bgImage: "/images/background.jpg",
    productImage: "/images/Smartphones.webp",
    productAlt: "Smartphones",
  },
];
