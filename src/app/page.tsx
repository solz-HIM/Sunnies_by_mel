import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// Statically imported so Next emits AVIF/WebP srcsets, intrinsic dimensions and
// a blur placeholder — the remote Unsplash URL this replaced was an 11s mobile
// LCP and the single biggest Core Web Vitals problem on the site.
import heroImage from "../../public/hero-sunglasses-harare.jpg";
import { ArrowRight, Eye, Gem, MapPin, ShieldCheck, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import StoreLocation from "@/components/StoreLocation";
import { sunniesProducts, tinyTreasuresProducts } from "@/lib/products";
import { OG_IMAGE, SITE, clampDescription, jsonLd, waLink } from "@/lib/seo";

const TITLE = "Sunglasses & Jewellery Store in Harare | Sunnies by Mel";
const DESCRIPTION = clampDescription(
  "Sunnies by Mel is a sunglasses and jewellery store in Belgravia, Harare. Polarized, photochromic and blue-light glasses from $10, non-tarnish jewellery from $5."
);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "sunglasses Harare",
    "sunglasses Zimbabwe",
    "jewellery Harare",
    "polarized sunglasses Zimbabwe",
    "blue light glasses Zimbabwe",
    "sunglasses shop Belgravia",
    "Sunnies by Mel",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

const featuredProducts = [...sunniesProducts.slice(0, 3), tinyTreasuresProducts[0]];

const TRUST_SIGNALS = [
  {
    icon: MapPin,
    title: "A real shop, not a page",
    body: "Walk into 78 East Road, Belgravia and try frames on before you pay.",
  },
  {
    icon: ShieldCheck,
    title: "UV400 on every pair",
    body: "Genuine polarized and photochromic lenses — test them in store.",
  },
  {
    icon: Truck,
    title: "Countrywide delivery",
    body: "Same-day inside Harare, and we ship anywhere in Zimbabwe.",
  },
  {
    icon: Gem,
    title: "Non-tarnish jewellery",
    body: "Stainless steel and titanium gold-tone that survives daily wear.",
  },
];

const FAQS = [
  {
    q: "What is Sunnies by Mel?",
    a: "Sunnies by Mel is a sunglasses and jewellery store located in Belgravia, Harare, Zimbabwe. We stock over 100 products — polarized, photochromic and anti-blue-light sunglasses alongside the Tiny Treasures range of non-tarnish jewellery, watches and accessories.",
  },
  {
    q: "Where is Sunnies by Mel located?",
    a: "78 East Road, Belgravia, Harare, Zimbabwe — minutes from Avondale and the Harare CBD, with parking outside. Opening hours are 8:30am–5:00pm Monday to Friday and 9:00am–1:00pm on Saturday.",
  },
  {
    q: "How do I order from Sunnies by Mel?",
    a: "Browse the catalogue on this site, then tap Enquire on WhatsApp on any product. Message +263 78 318 0745 and we will confirm stock, price and delivery. You can also add items to the cart and send the whole list at once.",
  },
  {
    q: "How much are sunglasses and jewellery at Sunnies by Mel?",
    a: "Sunglasses run from $10 to $40 USD depending on lens technology, and jewellery in the Tiny Treasures range starts at $5. Prices are shown on every product page and there is no hidden markup.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: TITLE,
    description: DESCRIPTION,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#store` },
    primaryImageOfPage: { "@id": `${SITE.url}/#logo` },
  };

  return (
    <>
      <script {...jsonLd(homeSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* ─────────────────────────────────────────────────────────── Hero ── */}
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-black">
        <Image
          src={heroImage}
          alt="Sunglasses displayed at the Sunnies by Mel store in Belgravia, Harare"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 text-center sm:px-6 lg:px-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            78 East Road, Belgravia · Harare
          </p>

          {/* Single H1 carrying brand + category + location, as Google reads it */}
          <h1
            className="text-4xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Sunnies by Mel
            </span>
            <span className="mt-3 block text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
              A sunglasses &amp; jewellery store in Harare
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-white/75 sm:text-xl">
            Over 100 pieces in stock — polarized, photochromic and anti-blue-light
            eyewear from $10, and non-tarnish Tiny Treasures jewellery from $5.
            Try them on in Belgravia, or order on WhatsApp for delivery anywhere in
            Zimbabwe.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              href="/sunnies"
              prefetch={false}
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-[0_0_20px_rgba(255,145,0,0.3)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(255,145,0,0.5)] active:scale-[0.98]"
            >
              Shop sunglasses
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/tiny-treasures"
              prefetch={false}
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            >
              Shop jewellery
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/75">
            {sunniesProducts.length + tinyTreasuresProducts.length} products in stock today ·{" "}
            <a
              href={waLink("Hi Sunnies by Mel! I have a question about your range.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              WhatsApp {SITE.telephone}
            </a>
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────── Trust strip ── */}
      <section aria-label="Why shop with Sunnies by Mel" className="border-y border-white/5 bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {TRUST_SIGNALS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4">
              <Icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="mb-1 font-semibold text-foreground">{title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────── Categories ── */}
      <section className="bg-background py-24" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2
              id="categories-heading"
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Two collections, one shop
            </h2>
            <p className="mb-12 max-w-2xl text-lg text-muted-foreground">
              Eyewear that protects your eyes, and jewellery that outlasts the season.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Link
                href="/sunnies"
                prefetch={false}
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <Eye className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary">
                  Sunnies — {sunniesProducts.length} sunglasses
                </h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  Polarized, photochromic and anti-blue-light lenses in aviator,
                  cat-eye, retro, square, octagon and frameless shapes, for men and
                  women. UV400 on every pair, from $10.
                </p>
                <span className="inline-flex items-center font-semibold text-primary">
                  Browse sunglasses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <Link
                href="/tiny-treasures"
                prefetch={false}
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <Gem className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary">
                  Tiny Treasures — {tinyTreasuresProducts.length} pieces
                </h3>
                <p className="mb-6 flex-1 leading-relaxed text-muted-foreground">
                  Non-tarnish stainless steel and gold-tone necklaces, bracelets,
                  anklets, earrings and rings, plus watches, straps, wallets and
                  glasses cases. From $5.
                </p>
                <span className="inline-flex items-center font-semibold text-primary">
                  Browse jewellery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────── Featured ── */}
      <section className="border-t border-white/5 bg-background py-24" aria-labelledby="featured-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2
                id="featured-heading"
                className="mb-3 text-3xl font-bold text-foreground sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Best sellers this month
              </h2>
              <p className="text-lg text-muted-foreground">
                The frames and pieces Harare keeps coming back for.
              </p>
            </div>
            <Link
              href="/sunnies"
              className="group inline-flex items-center font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all {sunniesProducts.length + tinyTreasuresProducts.length} products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────── About ── */}
      <section className="border-t border-border/50 bg-background py-24" aria-labelledby="about-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="about-heading"
            className="mb-6 text-3xl font-bold text-foreground sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Details matter
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sunnies by Mel started as a small stand of carefully chosen frames and
              grew into a shop on East Road in Belgravia, Harare. The idea has never
              changed: sunglasses and jewellery should be affordable without feeling
              cheap, and you should be able to hold a pair before you buy it.
            </p>
            <p>
              Every frame is checked in person before it goes on the shelf — hinges,
              lens tint, polarizing filter, the lot. The Tiny Treasures range is held
              to the same standard: if a piece tarnishes in testing, we do not stock
              it. That is what &quot;details matter&quot; means to us.
            </p>
            <p>
              Come and see us in Belgravia, or send a WhatsApp message and we will
              send more photos, check sizing and arrange delivery anywhere in
              Zimbabwe.
            </p>
          </div>

          <h2 className="mb-8 mt-16 text-3xl font-bold text-foreground sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <dt className="mb-2 text-lg font-semibold text-foreground">{faq.q}</dt>
                <dd className="leading-relaxed text-muted-foreground">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <StoreLocation />

      {/* ───────────────────────────────────────────────────── Final CTA ── */}
      <section className="border-t border-border/50 bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-bold text-foreground sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Ready to find your pair?
          </h2>
          <p className="mb-9 text-lg text-muted-foreground">
            Send us a message and we will check stock, share more photos and hold
            your frames until you can collect them.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            <a
              href={waLink("Hi Sunnies by Mel! I'd like help choosing a pair.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-8 text-lg font-semibold text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
            >
              Message us on WhatsApp
            </a>
            <Link
              href="/sunnies"
              className="inline-flex min-h-14 items-center justify-center rounded-lg border border-border px-8 text-lg font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
            >
              Browse the catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
