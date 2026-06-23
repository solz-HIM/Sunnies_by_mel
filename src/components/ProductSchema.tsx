import type { Product } from "@/lib/products";

const BASE = "https://sunniesbymel.co.zw";

export default function ProductSchema({ product }: { product: Product }) {
  const img = product.image.startsWith("http") ? product.image : `${BASE}${product.image}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: img,
    description: product.description,
    category: product.category,
    brand: { "@type": "Brand", name: "Sunnies by Mel" },
    offers: {
      "@type": "Offer",
      url: `${BASE}/product/${product.id}`,
      priceCurrency: "USD",
      price: product.price.toFixed(2),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "Sunnies by Mel" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
