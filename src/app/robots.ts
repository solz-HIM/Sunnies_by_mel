import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sunniesbymel.co.zw/sitemap.xml",
    host: "https://sunniesbymel.co.zw",
  };
}
