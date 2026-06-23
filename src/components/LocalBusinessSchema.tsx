export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Sunnies by Mel",
    description:
      "Premium sunglasses, blue-light glasses, watches, and accessories in Harare, Zimbabwe.",
    image: "https://sunniesbymel.co.zw/profile-pic.png",
    url: "https://sunniesbymel.co.zw",
    telephone: "+263783180745",
    priceRange: "$5–$60",
    address: {
      "@type": "PostalAddress",
      streetAddress: "78 East Road, Belgravia",
      addressLocality: "Harare",
      addressCountry: "ZW",
    },
    sameAs: [
      "https://www.instagram.com/sunnies_by_mel",
      "https://www.facebook.com/share/1BZkprESF4/",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
