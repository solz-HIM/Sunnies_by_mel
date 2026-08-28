import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/**
 * AI answer engines are an explicit acquisition channel for this shop, so every
 * major assistant crawler is named and allowed rather than left to the wildcard
 * rule — several of them ignore `User-agent: *` when deciding what to train or
 * cite from.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — ChatGPT training
  "OAI-SearchBot", // OpenAI — ChatGPT Search index
  "ChatGPT-User", // OpenAI — live browsing on a user's behalf
  "ClaudeBot", // Anthropic — Claude index
  "Claude-User", // Anthropic — live browsing
  "Claude-SearchBot", // Anthropic — search
  "anthropic-ai",
  "Google-Extended", // Gemini / AI Overviews grounding
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended", // Apple Intelligence
  "Amazonbot",
  "Bytespider",
  "CCBot", // Common Crawl — feeds many downstream models
  "cohere-ai",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The cart is per-visitor state with no indexable content.
        disallow: ["/cart", "/api/", "/_next/static/chunks/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
