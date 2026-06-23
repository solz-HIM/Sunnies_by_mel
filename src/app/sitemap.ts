import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";

const BASE = "https://sunniesbymel.co.zw";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, priority: 1, changeFrequency: "weekly" },
    { url: `${BASE}/sunnies`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/tiny-treasures`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, priority: 0.3 },
  ];
  const productRoutes: MetadataRoute.Sitemap = getAllProducts().map((p) => ({
    url: `${BASE}/product/${p.id}`,
    lastModified: now,
    priority: 0.7,
    changeFrequency: "monthly",
  }));
  return [...staticRoutes, ...productRoutes];
}
