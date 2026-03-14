import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.img-dpreview.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1.img-dpreview.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img-dpreview.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
