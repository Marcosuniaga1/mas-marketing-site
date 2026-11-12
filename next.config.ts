import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  rewrites: async () => [
    {
      source: "/propuestas/:slug",
      destination: "/propuestas/:slug.html",
    },
  ],
  // Propuestas: accesibles por enlace directo, pero ocultas para buscadores.
  headers: async () => [
    {
      source: "/propuestas/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    },
  ],
  redirects: async () => [
    {
      source: "/casos",
      destination: "/testimonios",
      permanent: true,
    },
  ],
};

export default nextConfig;
