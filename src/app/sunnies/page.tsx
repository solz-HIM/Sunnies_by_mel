import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import StoreLocation from "@/components/StoreLocation";
import { sunniesProducts } from "@/lib/products";
import { OG_IMAGE, SITE, abs, clampDescription, jsonLd } from "@/lib/seo";

/** 47 chars — fits Google's ~60 char SERP budget with the brand intact. */
const TITLE = "Sunglasses in Harare, Zimbabwe | Sunnies by Mel";
const DESCRIPTION = clampDescription(
  "Browse 70+ sunglasses in Harare from $10: polarized, photochromic, anti-blue-light, retro and aviator frames. Try them on in Belgravia or order on WhatsApp."
);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "sunglasses Zimbabwe",
    "sunglasses Harare",
    "polarized sunglasses Zimbabwe",
    "blue light glasses Harare",
    "photochromic sunglasses Zimbabwe",
    "where to buy sunglasses in Harare",
    "cheap sunglasses Harare",
  ],
  alternates: { canonical: "/sunnies" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: abs("/sunnies"),
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

/** Lens-technology entry points — these double as internal links and as the
 *  non-brand keyword targets the site currently ranks 7–9.5 for. */
const LENS_GUIDE = [
  {
    heading: "Polarized sunglasses",
    body: "A polarizing filter cancels the flat, horizontal glare thrown off tarmac, water and bonnets. If you drive the Harare–Bulawayo road, fish, or spend all day outside, polarized is the single biggest comfort upgrade you can make. From $15.",
  },
  {
    heading: "Photochromic (transition) lenses",
    body: "Photochromic lenses read the UV around them and darken outdoors, then clear again inside. One pair covers the whole day, which is why they are the most popular lens we sell to commuters. From $15.",
  },
  {
    heading: "Anti-blue-light glasses",
    body: "If your eyes burn after eight hours on a laptop, a blue-light filter is the fix. These are clear-lens glasses you can wear at a desk all day, with no prescription needed. From $15.",
  },
  {
    heading: "Retro & statement frames",
    body: "Cat-eye, octagon, clubmaster, frameless and Y2K shapes for people buying sunglasses as an outfit decision rather than eye protection. From $10.",
  },
];

const FAQS = [
  {
    q: "Where can I buy sunglasses in Harare?",
    a: "Sunnies by Mel is at 78 East Road, Belgravia, Harare — a few minutes from Avondale and the CBD. You can try any frame on in person, or send us a WhatsApp message on +263 78 318 0745 and we will deliver anywhere in Zimbabwe.",
  },
  {
    q: "How much do sunglasses cost in Zimbabwe?",
    a: "Our sunglasses run from $10 to $40 USD. Basic retro and square frames start at $10, polarized and photochromic lenses sit around $15–$20, and premium polarized outdoor and titanium anti-blue-light frames go up to $40.",
  },
  {
    q: "Are your sunglasses actually polarized?",
    a: "Yes — every pair listed as polarized carries a genuine polarizing filter, and you are welcome to test it in the shop against a phone screen or a reflective surface before you pay.",
  },
  {
    q: "Do blue light glasses really help?",
    a: "They filter part of the high-energy visible light emitted by phones and laptops, which most of our customers report as noticeably less eye strain and easier sleep after evening screen use. They need no prescription.",
  },
  {
    q: "Do you deliver outside Harare?",
    a: "Yes. We deliver countrywide in Zimbabwe, including Bulawayo, Mutare, Gweru and Victoria Falls. Message us on WhatsApp with your location for the delivery cost and timing.",
  },
];

export default function SunniesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Sunnies", path: "/sunnies" },
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${abs("/sunnies")}#collection`,
    name: TITLE,
    description: DESCRIPTION,
    url: abs("/sunnies"),
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#store` },
    mainEntity: {
      "@type": "ItemList",
      name: "Sunglasses catalogue",
      numberOfItems: sunniesProducts.length,
      itemListElement: sunniesProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: abs(`/product/${product.id}`),
        name: product.name,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const priceFrom = Math.min(...sunniesProducts.map((p) => p.price));
  const priceTo = Math.max(...sunniesProducts.map((p) => p.price));

  return (
    <>
      <script {...jsonLd(itemListSchema)} />
      <script {...jsonLd(faqSchema)} />

      <div className="min-h-screen bg-background pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={crumbs} />

          <header className="mb-12 border-b border-border/50 pb-10">
            <h1
              className="mb-6 max-w-4xl text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Sunglasses in Harare, Zimbabwe
            </h1>
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                {sunniesProducts.length} frames in stock right now at{" "}
                <strong className="text-foreground">Sunnies by Mel</strong>, the
                sunglasses and jewellery store on East Road in Belgravia, Harare —
                priced from ${priceFrom.toFixed(0)} to ${priceTo.toFixed(0)} USD.
                Polarized, photochromic and anti-blue-light lenses, plus retro,
                aviator, cat-eye and frameless shapes for men and women.
              </p>
              <p>
                Every pair carries UV400 protection. Try frames on in the shop, or
                send a WhatsApp message and we will deliver anywhere in Zimbabwe —
                usually same day inside Harare.
              </p>
            </div>
          </header>

          <h2 className="sr-only">All sunglasses in stock</h2>
          <ProductGrid products={sunniesProducts} searchPlaceholder="Search sunnies…" />

          {/* Lens buying guide — the non-brand content signal for category terms */}
          <Reveal as="section" className="mt-24 border-t border-border/50 pt-16">
            <h2
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Which lens should you buy?
            </h2>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
              Frame shape is taste. Lens technology is the part that changes how
              your day actually feels. Here is the short version.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {LENS_GUIDE.map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{item.heading}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* FAQ — objection handling and FAQ rich results */}
          <Reveal as="section" className="mt-24 border-t border-border/50 pt-16">
            <h2
              className="mb-10 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Buying sunglasses in Zimbabwe — common questions
            </h2>
            <dl className="max-w-3xl space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <dt className="mb-2 text-lg font-semibold text-foreground">{faq.q}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{faq.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-muted-foreground">
              Looking for jewellery instead?{" "}
              <Link href="/tiny-treasures" className="font-semibold text-primary hover:underline">
                Browse Tiny Treasures
              </Link>{" "}
              — non-tarnish necklaces, bracelets, anklets and earrings from $5.
            </p>
          </Reveal>
        </div>

        <StoreLocation className="mt-24" heading="Try frames on in Belgravia, Harare" />
      </div>
    </>
  );
}
