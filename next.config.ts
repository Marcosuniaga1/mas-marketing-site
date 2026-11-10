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
  redirects: async () => [
    {
      source: "/casos",
      destination: "/testimonios",
      permanent: true,
    },
  ],
};

export default nextConfig;
