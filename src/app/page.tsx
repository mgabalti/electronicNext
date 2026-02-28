import { TopBar, Header, Navbar, HeroSection, PromoBannerSection, FeaturedDealsSection, CategoryShowcaseSection, StoreFooter, ThemeToggle } from "@/components/store";
import FeaturedProductsSection from "@/components/store/FeaturedProductsSection";
import RecentlyAdded from "@/components/store/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <TopBar />
      <Header />
      <Navbar />
      <main className="flex-1 relative">
        <ThemeToggle />
        <HeroSection />
        <PromoBannerSection />
        <FeaturedDealsSection />
        <CategoryShowcaseSection />
        <RecentlyAdded />
        <FeaturedProductsSection />
      </main>
      <StoreFooter />
    </div>
  );
}
