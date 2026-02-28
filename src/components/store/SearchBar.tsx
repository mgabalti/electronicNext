"use client";

import { Search, ChevronDown } from "lucide-react";
import { ROUTES } from "@/core/constants/routes";

const CATEGORIES = [
  "All Categories",
  "TV & Audio",
  "Smart Phones",
  "Laptops & Desktops",
  "Gadgets",
  "GPS & Car",
  "Cameras & Accessories",
  "Movies & Games",
];

export function SearchBar() {
  return (
    <form
      action={ROUTES.CATALOG}
      method="get"
      className="flex w-full items-center rounded-3xl md:rounded-4xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-[#fed700] focus-within:border-[#fed700] transition-shadow hover:shadow-md"
    >
      <input
        type="search"
        name="q"
        placeholder="Search for Products"
        className="flex-1 min-w-0 px-3 sm:px-4 py-2 text-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none text-sm md:text-base"
        aria-label="Search for products"
      />
      <div className="hidden sm:flex items-center border-l border-gray-200 dark:border-gray-700">
        <select
          name="category"
          className="appearance-none pl-4 pr-8 py-2 text-sm text-gray-600 dark:text-gray-300 bg-transparent focus:outline-none cursor-pointer border-0"
          aria-label="Category"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat === "All Categories" ? "" : cat}>
              {cat}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 -ml-6 pointer-events-none shrink-0" />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-11 bg-[#fed700] text-gray-800 hover:bg-[#e6c200] transition-colors shrink-0"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}
