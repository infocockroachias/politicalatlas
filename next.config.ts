import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard output — Vercel-optimised. No server components, no API routes:
  // the entire atlas is a static frontend with all data bundled locally.
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
