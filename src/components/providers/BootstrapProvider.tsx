"use client";

import { useEffect } from "react";

/**
 * Loads Bootstrap JavaScript for components (navbar toggler, modals, etc.)
 */
export function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void import("bootstrap");
  }, []);
  return <>{children}</>;
}
