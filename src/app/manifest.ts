import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/**
 * Web app manifest. Gives Android/Chrome a proper icon and name when the site
 * is added to a home screen, and provides one more machine-readable statement
 * of the brand identity alongside the favicon and Organization schema.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Sunglasses & Jewellery in Harare`,
    short_name: SITE.name,
    description:
      "Sunglasses and jewellery store in Belgravia, Harare. Polarized, photochromic and blue-light eyewear plus non-tarnish jewellery.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f1a",
    theme_color: "#0b0f1a",
    lang: "en-ZW",
    categories: ["shopping", "lifestyle"],
    icons: [
      { src: "/icon.png", sizes: "96x96", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
