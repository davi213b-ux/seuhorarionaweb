import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // CSS atômico do Tailwind é pequeno: inline no HTML elimina uma requisição bloqueante
    inlineCss: true,
  },
};

export default nextConfig;
