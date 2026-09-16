import type { NextConfig } from "next";

// Repositório ithormb.github.io: o site é servido na raiz do domínio,
// então não há basePath. Se um dia mudar para um repositório de projeto,
// volte a declarar basePath com o nome dele.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
