import type { Metadata } from "next";
import Link from "next/link";
import {
  Banknote,
  Car,
  Clock,
  Glasses,
  MapPin,
  MessageCircle,
  Phone,
  Truck,
} from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { sunniesProducts, tinyTreasuresProducts } from "@/lib/products";
import { OG_IMAGE, SITE, abs, clampDescription, jsonLd, waLink } from "@/lib/seo";

/**
 * Dedicated location page.
 *
 * A standalone page for the physical shop is the strongest on-site local
 * ranking asset available to a single-location retailer, and the site had none
 * — the map was only a strip on the homepage. This page targets the explicitly
 * city-named queries ("sunglasses shop in Harare", "eyewear in Harare") that
 * the website can actually win, as opposed to the "near me" map-pack queries
 * that are decided by the Google Business Profile.
 *
 * It also carries the word "eyewear", which appeared exactly once across the
 * whole site despite being half of the target keyword set.
 */

/** 57 chars — fits the SERP display budget with the brand intact. */
const TITLE = "Sunglasses & Eyewear Shop in Harare | Sunnies by Mel";
const DESCRIPTION = clampDescription(
  "Visit Sunnies by Mel at 78 East Road, Belgravia, Harare. Try on polarized, photochromic and blue-light eyewear before you buy. Open Mon–Fri 8:30–5, Sat 9–1."
);

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "sunglasses shop in Harare",
    "eyewear in Harare",
    "sunglasses store Belgravia",
    "where to buy sunglasses in Harare",
    "eyewear shop Zimbabwe",
    "sunglasses Harare opening hours",
  ],
  alternates: { canonical: "/visit-us" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: abs("/visit-us"),
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE.url] },
};

/**
 * Directions written from the suburbs our customers actually travel from.
 * Road names are the ones shown on the shop's own Google Maps pin.
 */
const ROUTES = [
  {
    from: "From Avondale",
    body: "Head south into Belgravia and find East Road, which runs parallel to Lincoln Road. We're along the stretch near KFC Belgravia, a few blocks up from the Embassy of India.",
  },
  {
    from: "From Harare CBD",
    body: "Take Josiah Tongogara Avenue north-west out of town toward Belgravia. It's a short run — under ten minutes outside peak traffic, longer at 5pm.",
  },
  {
    from: "From Borrowdale & Mt Pleasant",
    body: "Come down Borrowdale Road toward Avondale, then cut through to Belgravia. Parking is on the street directly outside the shop.",
  },
  {
    from: "By kombi or taxi",
    body: "Anything heading to Avondale drops you within walking distance. Tell the driver East Road, Belgravia, and we're a short walk from the British Council.",
  },
];

const FAQS = [
  {
    q: "Where is Sunnies by Mel in Harare?",
    a: "78 East Road, Belgravia, Harare. We're a few minutes from Avondale shopping centre and a short drive north-west of the Harare CBD, on the same stretch as the Indian Embassy and the British Council.",
  },
  {
    q: "What are your opening hours?",
    a: "Monday to Friday 8:30am to 5:00pm, and Saturday 9:00am to 1:00pm. We're closed on Sundays and public holidays. If you're travelling in from outside Harare, send a WhatsApp message first and we'll confirm we're open.",
  },
  {
    q: "Can I try sunglasses on before buying?",
    a: "Yes, and we'd rather you did. Every frame on the site is physically in the shop, so you can try the fit, check the hinges and test a polarized lens against a phone screen before you pay for it.",
  },
  {
    q: "Do you do eye tests or prescription lenses?",
    a: "No. We are a sunglasses, eyewear and jewellery retailer, not an optometrist. We don't test eyes and we don't fit prescription lenses. If you need a prescription you'll want an optician — but our anti-blue-light glasses need no prescription and can be worn straight away.",
  },
  {
    q: "How do I pay?",
    a: "Cash in USD, EcoCash, or bank transfer. There's no card machine and no online checkout — orders placed through the site are confirmed over WhatsApp and settled on collection or delivery.",
  },
  {
    q: "Can you deliver instead?",
    a: "Yes. Delivery within Harare is usually same day, and we ship countrywide to Bulawayo, Mutare, Gweru, Victoria Falls and everywhere between. Message us with your location for the cost.",
  },
];

export default function VisitUsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Visit us", path: "/visit-us" },
  ];

  const totalProducts = sunniesProducts.length + tinyTreasuresProducts.length;
  const sunniesFrom = Math.min(...sunniesProducts.map((p) => p.price));
  const treasuresFrom = Math.min(...tinyTreasuresProducts.map((p) => p.price));

  /**
   * ContactPage pointing at the Store entity already declared in SiteSchema
   * rather than redeclaring it. A second Store node with the same NAP would be
   * a duplicate entity, and duplicated local markup is worth less than one
   * well-referenced one.
   */
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${abs("/visit-us")}#webpage`,
    url: abs("/visit-us"),
    name: TITLE,
    description: DESCRIPTION,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#store` },
    mainEntity: { "@id": `${SITE.url}/#store` },
    significantLink: [abs("/sunnies"), abs("/tiny-treasures")],
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

  return (
    <>
      <script {...jsonLd(pageSchema)} />
      <script {...jsonLd(faqSchema)} />

      <div className="min-h-screen bg-background pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={crumbs} />

          <header className="mb-14 border-b border-border/50 pb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              78 East Road · Belgravia · Harare
            </p>
            <h1
              className="mb-6 max-w-4xl text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Visit our sunglasses &amp; eyewear shop in Harare
            </h1>
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Sunnies by Mel</strong> is a
                sunglasses, eyewear and jewellery shop on East Road in Belgravia,
                Harare. Everything you see on this site is physically on the shelf
                here — {totalProducts} products, so you can try a frame on, check
                how it sits, and test a polarized lens before you spend anything.
              </p>
              <p>
                Walk-ins are welcome during shop hours. If you can&apos;t get to
                Belgravia, send a WhatsApp message and we&apos;ll deliver anywhere
                in Zimbabwe.
              </p>
            </div>
          </header>

          {/* ───────────────────────────────────────── Facts + map ── */}
          <section aria-labelledby="details-heading" className="mb-20">
            <h2 id="details-heading" className="sr-only">
              Shop address, opening hours and contact details
            </h2>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div>
                <address className="not-italic space-y-7 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="mb-1 block font-semibold text-foreground">Address</span>
                      {SITE.address.street}
                      <br />
                      {SITE.address.suburb}, {SITE.address.city}
                      <br />
                      {SITE.address.countryName}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="mb-1 block font-semibold text-foreground">Opening hours</span>
                      Monday – Friday: 8:30am – 5:00pm
                      <br />
                      Saturday: 9:00am – 1:00pm
                      <br />
                      Sunday &amp; public holidays: closed
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="mb-1 block font-semibold text-foreground">Phone &amp; WhatsApp</span>
                      <a
                        href={`tel:${SITE.telephone}`}
                        className="inline-block min-h-11 py-1.5 transition-colors hover:text-primary"
                      >
                        {SITE.telephone}
                      </a>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Banknote className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="mb-1 block font-semibold text-foreground">Payment</span>
                      Cash (USD), EcoCash, bank transfer
                    </span>
                  </div>
                </address>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={waLink(
                      "Hi Sunnies by Mel! I'd like to visit the shop — are you open today?"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Check we&apos;re open
                  </a>
                  <a
                    href={SITE.mapsPlaceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
                  >
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                    Get directions
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
                <iframe
                  src={SITE.mapsEmbedSrc}
                  title="Map showing Sunnies by Mel at 78 East Road, Belgravia, Harare"
                  className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </section>

          {/* ────────────────────────────────────────── Directions ── */}
          <section aria-labelledby="directions-heading" className="mb-20 border-t border-border/50 pt-14">
            <h2
              id="directions-heading"
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Getting to the shop
            </h2>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
              Belgravia sits between Avondale and the city centre, so most of
              Harare is a short drive away.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {ROUTES.map((route) => (
                <div
                  key={route.from}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
                >
                  <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
                    <Car className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {route.from}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">{route.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ─────────────────────────────────────── What's in store ── */}
          <section aria-labelledby="instore-heading" className="mb-20 border-t border-border/50 pt-14">
            <h2
              id="instore-heading"
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              What you&apos;ll find in the shop
            </h2>
            <p className="mb-10 max-w-3xl text-lg text-muted-foreground">
              Two ranges under one roof, both priced for everyday buying rather
              than special occasions.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/sunnies"
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <Glasses className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary">
                  Sunglasses &amp; eyewear
                </h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {sunniesProducts.length} frames on the shelf, from $
                  {sunniesFrom.toFixed(0)}. Polarized lenses for driving, photochromic
                  lenses that darken outdoors and clear inside, and anti-blue-light
                  eyewear for screen work — no prescription needed. Aviator, cat-eye,
                  clubmaster, octagon, frameless and retro shapes for men and women,
                  every pair UV400.
                </p>
                <span className="mt-6 inline-flex items-center font-semibold text-primary">
                  Browse the eyewear range →
                </span>
              </Link>

              <Link
                href="/tiny-treasures"
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
              >
                <Truck className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary">
                  Tiny Treasures jewellery
                </h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {tinyTreasuresProducts.length} pieces from ${treasuresFrom.toFixed(0)}.
                  Non-tarnish stainless steel and gold-tone necklaces, bracelets,
                  anklets, earrings and rings, plus watches, replacement straps,
                  leather wallets and glasses cases. Chosen to survive daily wear
                  rather than sit in a drawer.
                </p>
                <span className="mt-6 inline-flex items-center font-semibold text-primary">
                  Browse the jewellery range →
                </span>
              </Link>
            </div>

            {/* Being explicit about what we are not is both honest and a clean
                entity signal: we are a retailer, not an optometry practice. */}
            <div className="mt-8 rounded-xl border border-border/50 bg-card/30 p-6">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                One thing we don&apos;t do
              </h3>
              <p className="max-w-3xl leading-relaxed text-muted-foreground">
                We&apos;re a retailer, not an optometrist. We don&apos;t test eyes
                and we don&apos;t fit prescription lenses, so if you need a
                prescription you&apos;ll want an optician first. Everything we sell
                is ready to wear off the shelf, including the anti-blue-light
                glasses, which need no prescription at all.
              </p>
            </div>
          </section>

          {/* ───────────────────────────────────────────────── FAQ ── */}
          <section aria-labelledby="faq-heading" className="border-t border-border/50 pt-14">
            <h2
              id="faq-heading"
              className="mb-10 text-3xl font-bold text-foreground sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Before you visit
            </h2>
            <dl className="max-w-3xl space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.q}>
                  <dt className="mb-2 text-lg font-semibold text-foreground">{faq.q}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{faq.a}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 rounded-2xl border border-border/50 bg-card/50 p-8 text-center sm:p-10">
              <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
                Come and try a pair on
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
                We&apos;re open six days a week on East Road. Message ahead and
                we&apos;ll put frames aside for you to look at when you arrive.
              </p>
              <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row">
                <a
                  href={waLink(
                    "Hi Sunnies by Mel! Could you put some frames aside for me to try on?"
                  )}
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
                  Browse before you come
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
