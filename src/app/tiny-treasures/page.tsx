import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGrid from "@/components/ProductGrid";
import Reveal from "@/components/Reveal";
import StoreLocation from "@/components/StoreLocation";
import { tinyTreasuresProducts } from "@/lib/products";
import { OG_IMAGE, SITE, abs, clampDescription, jsonLd } from "@/lib/seo";

/** 45 chars — fits Google's ~60 char SERP budget with the brand intact. */
const TITLE = "Jewellery in Harare, Zimbabwe | Sunnies by Mel";
const DESCRIPTION = clampDescription(
  "Non-tarnish stainless steel and gold-tone jewellery in Harare from $5 — necklaces, bracelets, anklets, earrings, rings and watches. Collect in Belgravia or order on WhatsApp."
);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "jewellery Harare",
    "jewellery Zimbabwe",
    "non tarnish jewellery Zimbabwe",
    "stainless steel jewellery Harare",
    "gold necklaces Harare",
    "anklets Zimbabwe",
    "affordable jewellery Harare",
  ],
  alternates: { canonical: "/tiny-treasures" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: abs("/tiny-treasures"),
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

const RANGE_GUIDE = [
  {
    heading: "Necklaces & chains",
    body: "Stainless steel and gold-tone chains that keep their colour through sweat, showers and Harare humidity — plus sentimental pieces like the mom-and-child and Best Mom necklaces. From $10.",
  },
  {
    heading: "Bracelets, anklets & rings",
    body: "Chunky statement bracelets, delicate water-drop chains, handmade retro pieces and anklets that layer with everything. Sized to fit most wrists and ankles without a clasp fight. From $10.",
  },
  {
    heading: "Earrings",
    body: "Silver studs, handcrafted teardrops and the five-style Ear Candy set — the easiest $5 upgrade to an everyday outfit. From $5.",
  },
  {
    heading: "Watches & straps",
    body: "Casio, SKMEI, Hannah Martin and IEKE watches for men and women, plus replacement leather and metal straps when your favourite watch outlives its band. From $10.",
  },
];

const FAQS = [
  {
    q: "Where can I buy affordable jewellery in Harare?",
    a: "Tiny Treasures is our jewellery range at Sunnies by Mel, 78 East Road, Belgravia, Harare. Pieces start at $5 and everything is in stock in the shop — no pre-ordering, no waiting.",
  },
  {
    q: "Will this jewellery tarnish or turn my skin green?",
    a: "The stainless steel and titanium gold-tone pieces are specifically chosen because they do not tarnish. They handle sweat, hand-washing and the rainy season without discolouring or marking your skin.",
  },
  {
    q: "Do you have jewellery for men?",
    a: "Yes — the men's range covers stainless steel neck chains, bracelets and a six-piece stainless set, alongside men's watches and leather wallets.",
  },
  {
    q: "Can I buy jewellery as a gift?",
    a: "Most pieces arrive gift-ready, and sets like the four-piece gold jewellery set and the mom-and-child necklace are our most-bought gifts. Message us on WhatsApp and we will help you pick.",
  },
  {
    q: "Do you deliver jewellery across Zimbabwe?",
    a: "Yes. We deliver to Bulawayo, Mutare, Gweru, Victoria Falls and everywhere in between, usually same day within Harare. Send a WhatsApp message for the delivery cost to your area.",
  },
];

export default function TinyTreasuresPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tiny Treasures", path: "/tiny-treasures" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${abs("/tiny-treasures")}#collection`,
    name: TITLE,
    description: DESCRIPTION,
    url: abs("/tiny-treasures"),
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#store` },
    mainEntity: {
      "@type": "ItemList",
      name: "Tiny Treasures jewellery catalogue",
      numberOfItems: tinyTreasuresProducts.length,
      itemListElement: tinyTreasuresProducts.map((product, index) => ({
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

  const priceFrom = Math.min(...tinyTreasuresProducts.map((p) => p.price));
  const priceTo = Math.max(...tinyTreasuresProducts.map((p) => p.price));

  return (
    <>
      <script {...jsonLd(collectionSchema)} />
      <script {...jsonLd(faqSchema)} />

      <div className="min-h-screen bg-background pb-20 pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={crumbs} />

          <header className="mb-12 border-b border-border/50 pb-10">
            <h1
              className="mb-6 max-w-4xl text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tiny Treasures — Jewellery in Harare
            </h1>
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                {tinyTreasuresProducts.length} pieces of non-tarnish jewellery and
                accessories at{" "}
                <strong className="text-foreground">Sunnies by Mel</strong> in
                Belgravia, Harare, priced from ${priceFrom.toFixed(0)} to $
                {priceTo.toFixed(0)} USD. Stainless steel and gold-tone necklaces,
                bracelets, anklets, earrings and rings, plus watches, straps,
                wallets and glasses cases.
              </p>
              <p>
                Everything here is picked to survive daily wear — no green wrists,
                no flaking after two weeks. Collect in the shop or order on
                WhatsApp for delivery anywhere in Zimbabwe.
              </p>
            </div>
          </header>

          <h2 className="sr-only">All jewellery and accessories in stock</h2>
          <ProductGrid
            products={tinyTreasuresProducts}
            searchPlaceholder="Search treasures…"
            columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />

          <Reveal as="section" className="mt-24 border-t border-border/50 pt-16">
            <h2
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              What&apos;s in the Tiny Treasures range
            </h2>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
              Small pieces, chosen carefully. Details matter.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {RANGE_GUIDE.map((item) => (
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

          <Reveal as="section" className="mt-24 border-t border-border/50 pt-16">
            <h2
              className="mb-10 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Buying jewellery in Zimbabwe — common questions
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
              After eyewear instead?{" "}
              <Link href="/sunnies" className="font-semibold text-primary hover:underline">
                Browse the sunglasses catalogue
              </Link>{" "}
              — polarized, photochromic and blue-light frames from $10.
            </p>
          </Reveal>
        </div>

        <StoreLocation className="mt-24" heading="Pick your pieces up in Belgravia, Harare" />
      </div>
    </>
  );
}
