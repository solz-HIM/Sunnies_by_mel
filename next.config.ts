import type { NextConfig } from "next";
import { getArchivedProducts } from "./src/lib/products";

/**
 * Content Security Policy.
 *
 * Every asset the site loads is same-origin: next/font self-hosts the two
 * Google fonts at build time, and all product photography now lives in
 * public/. The single exception is the store-location map, which needs
 * frame-src for www.google.com.
 *
 * `script-src` keeps 'unsafe-inline' because the site is fully statically
 * generated — nonces require per-request rendering, which would give up SSG
 * for every page. Restricting the *origins* scripts may come from still
 * removes the exfiltration path that makes an injected script useful.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  // The embedded Google Map.
  "frame-src https://www.google.com",
  // No forms post anywhere; ordering happens over WhatsApp deep links.
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  // Deliberately 0, not "1; mode=block". The legacy XSS auditor is removed from
  // modern browsers and its filter was itself exploitable; CSP is the control
  // that matters here.
  { key: "X-XSS-Protection", value: "0" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), interest-cohort=()",
  },
  // The site is HTTPS-only on Vercel; two years with preload eligibility.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
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
  // Don't advertise the framework and version to scanners.
  poweredByHeader: false,
  images: {
    // No remote patterns: the Hostinger CDN this used to allow is dead (every
    // URL 404s) and all live product photography is served from public/.
    // Keeping the entry would leave an unnecessary external image origin open.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
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
