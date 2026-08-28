import type { NextConfig } from "next";
import { getArchivedProducts } from "./src/lib/products";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

/**
 * Auto-numbered product ids (`sun-1`, `tt-2`, …) were replaced with descriptive
 * slugs. Google has these URLs in its "Discovered" queue, so they redirect
 * permanently rather than starting to 404.
 */
const legacyProductSlugs: Record<string, string> = {
  "sun-1": "advanced-polarized-sunglasses",
  "sun-2": "anti-blue-polarized-sunglasses",
  "sun-4": "double-beam-hexagonal-sunglasses",
  "sun-5": "double-bridge-sunglasses",
  "tt-1": "hannah-martin-watch",
  "tt-2": "heiheipi-ladies-watch",
  "tt-3": "skmei-mens-watch",
};

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      // Legacy product photography still lives on the Hostinger CDN.
      { protocol: "https", hostname: "horizons-cdn.hostinger.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Explicitly permit indexing and large image previews on the indexable
      // routes, so a stray host-level X-Robots-Tag can never quietly deindex
      // the catalogue. /cart is deliberately excluded — it is noindex.
      ...["/", "/sunnies", "/tiny-treasures", "/privacy", "/terms", "/product/:id"].map(
        (source) => ({
          source,
          headers: [
            {
              key: "X-Robots-Tag",
              value:
                "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
            },
          ],
        })
      ),
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
    ];
  },
  async redirects() {
    return [
      ...Object.entries(legacyProductSlugs).map(([from, to]) => ({
        source: `/product/${from}`,
        destination: `/product/${to}`,
        permanent: true,
      })),
      // Archived products (legacy imports whose photography 404s) consolidate
      // into their category page rather than 404ing on URLs Google already has.
      ...getArchivedProducts().map((product) => ({
        source: `/product/${product.id}`,
        destination:
          product.category === "tiny-treasures" ? "/tiny-treasures" : "/sunnies",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
