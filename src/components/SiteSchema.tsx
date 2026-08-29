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
        /**
         * The store's range, described WITHOUT emitting `Product` nodes.
         *
         * This previously used `makesOffer` with four bare
         * `{ "@type": "Product", name }` objects. Because this graph renders
         * from the root layout, those four appeared on every page of the site,
         * and Google's Product rich-result parser treats any `Product`-typed
         * node as a candidate — so all four were reported in Search Console as
         * "missing offers, review or aggregateRating" on every URL it crawled.
         *
         * These are merchandise categories, not purchasable items: they have no
         * single price, SKU or stock state, so there is nothing honest to put in
         * an `offers` block for them. `OfferCatalog` (an ItemList subtype)
         * carries the same "what we sell" signal, links the category pages, and
         * emits no Product nodes. Real Product markup belongs on — and lives
         * on — the individual product pages.
         */
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Sunnies by Mel product range",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Sunglasses — polarized, photochromic and anti-blue-light",
              url: abs("/sunnies"),
            },
            {
              "@type": "OfferCatalog",
              name: "Tiny Treasures — non-tarnish jewellery, watches and accessories",
              url: abs("/tiny-treasures"),
            },
          ],
        },
        knowsAbout: [
          "Polarized sunglasses",
          "Anti-blue-light glasses",
          "Photochromic sunglasses",
          "Non-tarnish jewellery",
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
