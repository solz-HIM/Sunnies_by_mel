import type { Metadata } from "next";

/**
 * The cart page is a Client Component, so its metadata lives here. It holds
 * per-visitor state with no indexable content — noindex keeps it out of the
 * crawl budget that should be going to the 106 product URLs.
 */
export const metadata: Metadata = {
  title: "Your enquiry list",
  description:
    "Review the sunglasses and jewellery you've selected, then send the whole list to Sunnies by Mel on WhatsApp.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cart" },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return children;
}
