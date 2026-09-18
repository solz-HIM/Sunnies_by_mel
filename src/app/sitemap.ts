import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/products";
import { CONTENT_UPDATED, SITE, abs } from "@/lib/seo";

/**
 * Canonical, indexable URLs only. /cart is excluded (robots-disallowed, no
 * indexable content) and every entry here matches the `alternates.canonical`
 * declared on the corresponding page — a mismatch was previously telling Google
 * that /sunnies and /tiny-treasures were duplicates of the homepage.
 *
 * `lastModified` comes from the hand-maintained CONTENT_UPDATED constants, not
 * from the clock. Stamping every URL with the build time meant a deploy that
 * only changed CSS still announced all 88 pages as modified, which is exactly
 * the pattern that teaches Google to ignore a site's lastmod values.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: CONTENT_UPDATED.pages,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: abs("/sunnies"),
      lastModified: CONTENT_UPDATED.catalogue,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: abs("/tiny-treasures"),
      lastModified: CONTENT_UPDATED.catalogue,
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      url: abs("/visit-us"),
      lastModified: CONTENT_UPDATED.pages,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: abs("/privacy"),
      lastModified: CONTENT_UPDATED.legal,
      priority: 0.2,
      changeFrequency: "yearly",
    },
    {
      url: abs("/terms"),
      lastModified: CONTENT_UPDATED.legal,
      priority: 0.2,
      changeFrequency: "yearly",
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: abs(`/product/${product.id}`),
    lastModified: CONTENT_UPDATED.catalogue,
    priority: 0.8,
    changeFrequency: "weekly",
    // Image sitemap entries help Google discover product photography that the
    // client-side gallery only paints one frame of at a time.
    images: (product.images?.length ? product.images : [product.image]).map(abs),
  }));

  return [...staticRoutes, ...productRoutes];
}
