import type { NextConfig } from "next";

// O GitHub Pages serve este repositório em /my_portfolio/.
// Se um dia o repositório virar `ithormb.github.io`, apague o basePath.
const basePath = "/my_portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
