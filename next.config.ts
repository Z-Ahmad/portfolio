import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [{ source: "/projects/:slug", destination: "/work/:slug", permanent: true }];
  },
};

export default nextConfig;
