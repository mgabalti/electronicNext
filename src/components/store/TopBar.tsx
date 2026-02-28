"use client";

import Link from "next/link";
import { MapPin, Package, ShoppingBag, User } from "lucide-react";
import { ROUTES } from "@/core/constants/routes";

export function TopBar() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-4 py-2.5 text-sm">
          <p className="text-gray-700 dark:text-gray-200 font-medium text-center sm:text-left">
            Welcome to Worldwide Electronics Store
          </p>
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-gray-700 dark:text-gray-300">
            <Link
              href="#"
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Store Locator</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Package className="w-4 h-4 shrink-0" />
              <span>Track Your Order</span>
            </Link>
            <Link
              href={ROUTES.CATALOG}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Shop</span>
            </Link>
            <Link
              href={ROUTES.ACCOUNT}
              className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <User className="w-4 h-4 shrink-0" />
              <span>My Account</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
