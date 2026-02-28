"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Always force light on mount — toggle controls dark
    document.documentElement.classList.remove("dark");
    setIsDark(false);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  if (!mounted) return null;

  return (
    <div className="fixed right-4 bottom-4 lg:right-auto lg:left-4 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-2 p-2 rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-lg">
        <span className="text-[10px] font-medium text-gray-500 dark:text-gray-300 uppercase">
          {isDark ? "Dark" : "Light"}
        </span>
        <button
          type="button"
          onClick={toggleTheme}
          className="relative w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fed700] focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          role="switch"
          aria-checked={isDark}
        >
          <span
            className={`absolute top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#fed700] text-gray-800 shadow transition-transform ${
              isDark ? "translate-x-6" : "translate-x-1"
            }`}
          >
            {isDark ? (
              <Moon className="w-3 h-3" />
            ) : (
              <Sun className="w-3 h-3" />
            )}
          </span>
        </button>
        <span className="text-[10px] font-medium text-gray-500 dark:text-gray-300 uppercase">
          {isDark ? "Light" : "Dark"}
        </span>
      </div>
    </div>
  );
}
