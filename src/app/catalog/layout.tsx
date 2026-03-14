import type { Metadata } from "next";
import { appConfig } from "@/core/config/app.config";
import { TopBar, Header, Navbar, StoreFooter, ThemeToggle } from "@/components/store";

export const metadata: Metadata = {
  title: `Catalog | ${appConfig.name}`,
};

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1 relative">
        <ThemeToggle />
        {children}
      </main>

      <StoreFooter />
    </div>
  );
}
