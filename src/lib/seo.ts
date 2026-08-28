/**
 * Single source of truth for site-wide SEO constants and helpers.
 * Every canonical URL, schema block and metadata object should read from here
 * so the domain, NAP details and brand voice never drift between pages.
 */

export const SITE = {
  name: "Sunnies by Mel",
  legalName: "Sunnies by Mel & Tiny Treasures",
  tagline: "Details Matter",
  url: "https://sunniesbymel.co.zw",
  locale: "en_ZW",
  /** Short brand suffix appended to every <title>. */
  titleSuffix: "Sunnies by Mel",
  whatsapp: "263783180745",
  telephone: "+263783180745",
  email: "brendlync@gmail.com",
  priceRange: "$5–$60",
  currency: "USD",
  address: {
    street: "78 East Road",
    suburb: "Belgravia",
    city: "Harare",
    region: "Harare Province",
    country: "ZW",
    countryName: "Zimbabwe",
  },
  geo: { latitude: -17.7976872, longitude: 31.042594 },
  /** Google Maps place used by the store-location embed. */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.872524522162!2d31.042593999999998!3d-17.7976872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5f702e94a9d%3A0xec14e73d16a52a8d!2sSunnies%20by%20Mel!5e0!3m2!1sen!2szw!4v1787920788777!5m2!1sen!2szw",
  mapsPlaceUrl: "https://maps.app.goo.gl/?q=Sunnies+by+Mel+Harare",
  social: [
    "https://www.instagram.com/sunnies_by_mel",
    "https://www.facebook.com/share/1BZkprESF4/",
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "17:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
} as const;

export const OG_IMAGE = {
  url: `${SITE.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Sunnies by Mel — sunglasses and jewellery store in Harare, Zimbabwe",
};

/** Absolute URL for any site-relative path. */
export const abs = (path: string): string =>
  path.startsWith("http") ? path : `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/** WhatsApp deep link with a pre-filled enquiry message. */
export const waLink = (message: string): string =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

/**
 * Trims a title to Google's ~60 character display budget without cutting a word
 * in half. Falls back to the untruncated string when it already fits.
 */
export function clampTitle(title: string, max = 60): string {
  if (title.length <= max) return title;
  const cut = title.slice(0, max);
  const lastBreak = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf("|"), cut.lastIndexOf("—"));
  return cut.slice(0, lastBreak > 30 ? lastBreak : max).replace(/[\s|—·-]+$/, "");
}

/**
 * Picks the richest title that still fits the SERP budget. Candidates are
 * ordered most- to least-detailed; truncating mid-brand ("… | Sunnies") looks
 * broken in results, so we drop a whole segment instead of cutting characters.
 */
export function fitTitle(candidates: string[], max = 60): string {
  return (
    candidates.find((candidate) => candidate.length <= max) ??
    clampTitle(candidates[candidates.length - 1], max)
  );
}

/** Keeps meta descriptions inside the 150–160 character sweet spot. */
export function clampDescription(description: string, max = 158): string {
  const clean = description.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "")}…`;
}

type Crumb = { name: string; path: string };

/** schema.org BreadcrumbList built from an ordered list of crumbs. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/**
 * Renders any schema object as a JSON-LD script tag.
 *
 * `JSON.stringify` does not escape `<`, so a product name containing
 * `</script>` would terminate the tag early and let the remainder be parsed as
 * HTML. Today every value comes from the static catalogue, but escaping the
 * three HTML-significant sequences closes the injection path for good — the
 * escapes are valid JSON string escapes, so parsers still read the same data.
 */
export function jsonLd(schema: object) {
  const json = JSON.stringify(schema)
    .replaceAll("<", "\\u003c")
    .replaceAll(">", "\\u003e")
    .replaceAll("&", "\\u0026");

  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: json },
  };
}
