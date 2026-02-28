"use client";

import Link from "next/link";
import { PortoHeader } from "./PortoHeader";
import { PortoFooter } from "./PortoFooter";
import { ROUTES } from "@/core/constants/routes";

export function PortoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PortoHeader />
      <main className="flex-1">{children}</main>
      <PortoFooter />

      <a
        href="#top"
        id="scroll-top"
        title="Top"
        role="button"
        className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 z-40"
      >
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
}
