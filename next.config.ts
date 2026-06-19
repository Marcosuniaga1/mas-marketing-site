import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async () => [
    {
      source: "/casos",
      destination: "/testimonios",
      permanent: true,
    },
  ],
};

export default nextConfig;
