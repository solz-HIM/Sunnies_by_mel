import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { getAllProducts, getProductById } from "@/lib/products";
import { getProductCopy, getRelatedProducts } from "@/lib/product-copy";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductSchema from "@/components/ProductSchema";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductCard from "@/components/ProductCard";
import StoreLocation from "@/components/StoreLocation";
import { SITE, abs, waLink } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return { title: "Product not found", robots: { index: false, follow: true } };
  }

  const copy = getProductCopy(product);
  const url = abs(`/product/${product.id}`);
  const images = (product.images?.length ? product.images : [product.image]).map(abs);

  return {
    // `absolute` keeps the price inside the 60-char budget instead of the
    // template pushing " | Sunnies by Mel" past what Google will render.
    title: { absolute: copy.title },
    description: copy.metaDescription,
    keywords: copy.keywords,
    alternates: { canonical: `/product/${product.id}` },
    openGraph: {
      title: copy.title,
      description: copy.metaDescription,
      url,
      type: "website",
      images: images.slice(0, 4).map((src) => ({ url: src, alt: product.name })),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.metaDescription,
      images: [images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const copy = getProductCopy(product);
  const related = getRelatedProducts(product, getAllProducts());
  const images = product.images?.length ? product.images : [product.image];

  const crumbs = [
    { name: "Home", path: "/" },
    { name: copy.categoryLabel, path: copy.categoryPath },
    { name: product.name, path: `/product/${product.id}` },
  ];

  const enquiry = waLink(
    `Hi Sunnies by Mel! I'm interested in "${product.name}" ($${product.price.toFixed(2)}). Is it available?`
  );

  return (
    <>
      <ProductSchema product={product} copy={copy} />

      <div className="min-h-screen bg-background pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={crumbs} />

          <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-card">
              <ProductImageGallery
                images={images}
                productName={product.name}
                altContext={`— ${copy.productType} at Sunnies by Mel, Harare`}
                priority
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                {copy.productType}
              </p>
              <h1
                className="mb-4 text-3xl font-extrabold text-foreground sm:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                {product.name}
              </h1>

              <div className="mb-6 flex flex-wrap items-center gap-4">
                <p className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                  <span className="ml-1 text-base font-medium text-muted-foreground">USD</span>
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${
                    product.inStock
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  {product.inStock ? "In stock in Harare" : "Currently unavailable"}
                </span>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{copy.intro}</p>

              <ul className="mb-8 grid gap-2.5 sm:grid-cols-2">
                {copy.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href={enquiry}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-lg font-semibold text-primary-foreground transition-transform duration-300 active:scale-[0.98] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Replies usually within the hour during shop hours. No account, no checkout form.
              </p>

              <div className="mt-8 grid gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="flex gap-2">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>Checked in-store before it goes on the shelf</span>
                </div>
                <div className="flex gap-2">
                  <Truck className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>Same-day delivery in Harare, countrywide shipping</span>
                </div>
                <div className="flex gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>Collect free from Belgravia</span>
                </div>
              </div>
            </div>
          </div>

          {/* ───────────────────────────── Unique long-form product copy ── */}
          <section className="mt-20 grid gap-14 border-t border-border/50 pt-14 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
                About the {product.name.toLowerCase()}
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                {copy.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <h2 className="mb-4 mt-12 text-2xl font-bold text-foreground sm:text-3xl">
                How to order
              </h2>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  Tap <strong className="text-foreground">Enquire on WhatsApp</strong> — the message
                  is pre-filled with this product and price.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  We confirm stock and send extra photos if you want them.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  Collect from {SITE.address.street}, {SITE.address.suburb}, or we deliver anywhere in
                  Zimbabwe.
                </li>
              </ol>
            </div>

            <aside>
              <h2 className="mb-5 text-xl font-bold text-foreground">Specifications</h2>
              <dl className="divide-y divide-border/50 rounded-xl border border-border/50 bg-card/50 text-sm">
                {copy.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1 px-5 py-3.5">
                    <dt className="text-muted-foreground">{spec.label}</dt>
                    <dd className="font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </section>

          {/* ───────────────── Related products: internal-link depth fix ── */}
          {related.length > 0 && (
            <section className="mt-20 border-t border-border/50 pt-14">
              <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
                You might also like
              </h2>
              <p className="mb-10 text-muted-foreground">
                Similar {copy.categoryLabel === "Sunnies" ? "frames" : "pieces"} in the same price
                range, all in stock in Harare.
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
              <p className="mt-10">
                <Link
                  href={copy.categoryPath}
                  className="font-semibold text-primary hover:underline"
                >
                  ← Back to all {copy.categoryLabel === "Sunnies" ? "sunglasses" : "jewellery"}
                </Link>
              </p>
            </section>
          )}
        </div>

        <StoreLocation className="mt-20" heading={`Try the ${product.name.toLowerCase()} on in Harare`} />
      </div>
    </>
  );
}
