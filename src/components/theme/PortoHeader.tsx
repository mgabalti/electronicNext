"use client";

import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";
import { appConfig } from "@/core/config/app.config";

export function PortoHeader() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href={ROUTES.HOME} className="flex items-center">
            <img
              src="/images/logo-white.png"
              alt={`${appConfig.name} Logo`}
              width={111}
              height={44}
              className="h-10 w-auto dark:invert"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/logo-placeholder.svg";
              }}
            />
          </Link>

          <form action={ROUTES.CATALOG} method="get" className="hidden lg:flex flex-1 max-w-xl mx-4">
            <div className="flex w-full rounded-lg border border-gray-300 overflow-hidden">
              <input
                type="search"
                name="q"
                id="q"
                placeholder="I'm searching for..."
                className="flex-1 px-3 py-2 border-0 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <select name="cat" id="cat" className="border-l border-gray-300 px-3 py-2 text-sm bg-gray-50">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="smartphones">Smartphones</option>
                <option value="audio">Audio</option>
                <option value="computers">Computers</option>
              </select>
              <button type="submit" className="px-4 bg-gray-900 text-white hover:bg-gray-800" title="Search">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4">
            <Link href={ROUTES.ACCOUNT} className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <i className="fas fa-user text-lg" />
              <span className="hidden sm:inline">My Account</span>
            </Link>
            <Link href="/wishlist" className="text-gray-700 hover:text-gray-900" title="Wishlist">
              <i className="fas fa-heart text-lg" />
            </Link>
            <Link href={ROUTES.CART} className="relative text-gray-700 hover:text-gray-900" title="Cart">
              <i className="fas fa-shopping-cart text-lg" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] text-white">0</span>
            </Link>
          </div>
        </div>

        <nav className="flex items-center gap-6 py-3 border-t border-gray-100">
          <Link href={ROUTES.HOME} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href={ROUTES.CATALOG} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Categories
          </Link>
          <Link href={ROUTES.CATALOG} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href={ROUTES.CART} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Cart
          </Link>
          <Link href={ROUTES.ACCOUNT} className="text-sm font-medium text-gray-700 hover:text-gray-900">
            My Account
          </Link>
          <Link href={ROUTES.LOGIN} className="text-sm font-medium text-gray-700 hover:text-gray-900 ml-auto">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
