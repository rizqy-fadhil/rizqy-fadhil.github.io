import type { NextConfig } from "next";

// Static export for GitHub Pages (user site → served from the root domain, no basePath).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
