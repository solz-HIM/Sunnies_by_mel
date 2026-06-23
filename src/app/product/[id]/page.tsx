import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getProductById } from "@/lib/products";
import ProductSchema from "@/components/ProductSchema";

const BASE = "https://sunniesbymel.co.zw";
const WA = "263783180745";

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
  if (!product) return { title: "Product not found — Sunnies by Mel" };

  const img = product.image.startsWith("http") ? product.image : `${BASE}${product.image}`;
  const title = `${product.name} — $${product.price.toFixed(2)} | Sunnies by Mel`;
  const description = `${product.description} Buy ${product.name} in Harare, Zimbabwe. Order via WhatsApp from Sunnies by Mel.`;

  return {
    title,
    description,
    alternates: { canonical: `${BASE}/product/${product.id}` },
    openGraph: {
      title,
      description,
      url: `${BASE}/product/${product.id}`,
      type: "website",
      images: [{ url: img, alt: product.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
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

  const waText = encodeURIComponent(
    `Hi Sunnies by Mel! I'm interested in "${product.name}" ($${product.price.toFixed(2)}). Is it available?`
  );

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <ProductSchema product={product} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={product.category === "tiny-treasures" ? "/tiny-treasures" : "/sunnies"}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to catalog
        </Link>
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-card">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-foreground mb-3">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mb-6">${product.price.toFixed(2)}</p>
            <p className="text-lg text-muted-foreground mb-8">{product.description}</p>
            <a
              href={`https://wa.me/${WA}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
