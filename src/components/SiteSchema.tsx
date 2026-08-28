import { SITE, abs, jsonLd } from "@/lib/seo";

/**
 * Site-wide identity graph: Organization + WebSite + Store, emitted once from
 * the root layout with stable @ids so per-page Product and Breadcrumb schema
 * can reference the same entities instead of redeclaring them.
 */
export default function SiteSchema() {
  const organisationId = `${SITE.url}/#organization`;
  const storeId = `${SITE.url}/#store`;
  const websiteId = `${SITE.url}/#website`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organisationId,
        name: SITE.name,
        legalName: SITE.legalName,
        slogan: SITE.tagline,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE.url}/#logo`,
          url: abs("/logo.png"),
          width: 512,
          height: 512,
          caption: SITE.name,
        },
        image: { "@id": `${SITE.url}/#logo` },
        email: SITE.email,
        telephone: SITE.telephone,
        sameAs: [...SITE.social],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: SITE.telephone,
          email: SITE.email,
          areaServed: "ZW",
          availableLanguage: ["en", "sn"],
        },
      },
      {
        "@type": ["Store", "LocalBusiness"],
        "@id": storeId,
        name: SITE.name,
        description:
          "Sunglasses and jewellery store in Belgravia, Harare. Polarized, photochromic and anti-blue-light eyewear plus non-tarnish stainless steel and gold-tone jewellery.",
        url: SITE.url,
        image: abs("/og-image.png"),
        logo: abs("/logo.png"),
        telephone: SITE.telephone,
        email: SITE.email,
        priceRange: SITE.priceRange,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, EcoCash, Bank Transfer",
        parentOrganization: { "@id": organisationId },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: `${SITE.address.suburb}, ${SITE.address.city}`,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        hasMap: SITE.mapsPlaceUrl,
        areaServed: [
          { "@type": "City", name: "Harare" },
          { "@type": "Country", name: "Zimbabwe" },
        ],
        openingHoursSpecification: SITE.openingHours.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...slot.days],
          opens: slot.opens,
          closes: slot.closes,
        })),
        sameAs: [...SITE.social],
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Polarized sunglasses" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Anti-blue-light glasses" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Photochromic sunglasses" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Product", name: "Non-tarnish jewellery" },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.url,
        name: SITE.name,
        description:
          "Shop sunglasses and jewellery online in Zimbabwe. Order on WhatsApp or collect in Belgravia, Harare.",
        inLanguage: "en-ZW",
        publisher: { "@id": organisationId },
      },
    ],
  };

  return <script {...jsonLd(graph)} />;
}
