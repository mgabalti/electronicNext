"use client";

import Link from "next/link";
import { Menu, GitCompare, Heart, User, ShoppingBag } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { ROUTES } from "@/core/constants/routes";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-950 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6">
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <button
              type="button"
              className="p-2 -ml-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href={ROUTES.HOME} className="flex items-baseline font-bold text-2xl text-gray-800 dark:text-gray-100 hover:opacity-90 transition-opacity">
              electro<span className="text-[#fed700]">.</span>
            </Link>
            <button
              type="button"
              className="p-2 -mr-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors hidden lg:block"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 w-full lg:max-w-2xl">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <Link href="#" className="relative p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Compare">
              <GitCompare className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#fed700] text-[10px] font-semibold text-gray-800">0</span>
            </Link>
            <Link href="#" className="p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href={ROUTES.ACCOUNT} className="p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="My account">
              <User className="w-5 h-5" />
            </Link>
            <Link href={ROUTES.CART} className="flex items-center gap-1.5 p-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Cart">
              <span className="relative inline-block">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#fed700] text-[10px] font-semibold text-gray-800">0</span>
              </span>
              <span className="hidden sm:inline text-sm font-medium text-gray-800 dark:text-gray-100">$0.00</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
