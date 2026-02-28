import type { Metadata } from "next";
import { appConfig } from "@/core/config/app.config";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`,
  },
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="min-h-screen antialiased bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-100 transition-colors"
      >
        {children}
      </body>
    </html>
  );
}
