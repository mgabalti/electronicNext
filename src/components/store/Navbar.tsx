"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ROUTES } from "@/core/constants/routes";

const MENU_ITEMS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "TV & Audio", href: ROUTES.CATALOG },
  { label: "Smart Phones", href: ROUTES.CATALOG },
  { label: "Laptops & Desktops", href: ROUTES.CATALOG },
  { label: "Gadgets", href: ROUTES.CATALOG },
  { label: "GPS & Car", href: ROUTES.CATALOG },
  { label: "Cameras & Accessories", href: ROUTES.CATALOG },
  { label: "Movies & Games", href: ROUTES.CATALOG },
];

export function Navbar() {
  return (
    <nav className="bg-[#fed700] dark:bg-gray-900">
      <div className="container mx-auto px-0 sm:px-4">
        <ul className="divide-x divide-[#e6c200] dark:divide-gray-700 flex items-center  px-2 sm:px-0  whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]">
          {MENU_ITEMS.map((item) => (
            <li key={item.label} className="shrink-0">
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-semibold px-3 py-3 text-gray-800 dark:text-gray-100 font-semibold text-sm hover:bg-[#e6c200] dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
