import type { Product } from "@/lib/products";
import type { ProductCopy } from "@/lib/product-copy";
import { SITE, abs, jsonLd } from "@/lib/seo";

/**
 * Full merchant-listing Product markup. The previous version only emitted
 * name/image/offer, which is why a single URL qualified for product snippets —
 * Google needs shipping and return details plus a stable SKU to show the rich
 * result for the rest of the catalogue.
 */
// Computed once at module load rather than per render: reading the clock during
// render is impure, and every page here is statically generated anyway.
const PRICE_VALID_UNTIL = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

export default function ProductSchema({
  product,
  copy,
}: {
  product: Product;
  copy: ProductCopy;
}) {
  const url = abs(`/product/${product.id}`);
  const images = (product.images?.length ? product.images : [product.image]).map(abs);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    image: images,
    description: copy.metaDescription,
    sku: product.id,
    mpn: product.id,
    category: copy.categoryLabel === "Sunnies" ? "Sunglasses" : "Jewellery & Accessories",
    url,
    brand: { "@type": "Brand", name: SITE.name },
    manufacturer: { "@id": `${SITE.url}/#organization` },
    itemCondition: "https://schema.org/NewCondition",
    additionalProperty: copy.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      "@id": `${url}#offer`,
      url,
      priceCurrency: SITE.currency,
      price: product.price.toFixed(2),
      priceValidUntil: PRICE_VALID_UNTIL,
      itemCondition: "https://schema.org/NewCondition",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      availableAtOrFrom: { "@id": `${SITE.url}/#store` },
      seller: { "@id": `${SITE.url}/#organization` },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "ZW",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 3,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "ZW",
        // Matches the published Terms of Service: all sales are final.
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
    },
  };

  return <script {...jsonLd(schema)} />;
}
