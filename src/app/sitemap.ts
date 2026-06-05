import type { MetadataRoute } from "next";

const base = "https://masmarketingagency.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/politica-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/eliminacion-de-datos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
