import type { NextConfig } from "next";

const oneYear = 60 * 60 * 24 * 365;

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: oneYear,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "embla-carousel-react"],
  },

  // Long-cache static media — filenames are stable / immutable after publish.
  async headers() {
    const immutable = [
      { key: "Cache-Control", value: `public, max-age=${oneYear}, immutable` },
    ];
    return [
      { source: "/video/:path*", headers: immutable },
      { source: "/gallery/:path*", headers: immutable },
      { source: "/posters/:path*", headers: immutable },
    ];
  },
};

export default nextConfig;
