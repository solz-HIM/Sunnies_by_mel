import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { SITE, abs } from "@/lib/seo";

/**
 * Canonical, indexable URLs only. /cart is excluded (robots-disallowed, no
 * indexable content) and every entry here matches the `alternates.canonical`
 * declared on the corresponding page — a mismatch was previously telling Google
 * that /sunnies and /tiny-treasures were duplicates of the homepage.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, priority: 1, changeFrequency: "weekly" },
    { url: abs("/sunnies"), lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: abs("/tiny-treasures"), lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: abs("/privacy"), lastModified: now, priority: 0.2, changeFrequency: "yearly" },
    { url: abs("/terms"), lastModified: now, priority: 0.2, changeFrequency: "yearly" },
  ];

  const productRoutes: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: abs(`/product/${product.id}`),
    lastModified: now,
    priority: 0.8,
    changeFrequency: "weekly",
    // Image sitemap entries help Google discover product photography that the
    // client-side gallery only paints one frame of at a time.
    images: (product.images?.length ? product.images : [product.image]).map(abs),
  }));

  return [...staticRoutes, ...productRoutes];
}
