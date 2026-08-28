import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteSchema from "@/components/SiteSchema";
import { OG_IMAGE, SITE } from "@/lib/seo";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * NOTE: no `alternates.canonical` here on purpose. Metadata `alternates` are
 * inherited by every child route, so a canonical set on the root layout made
 * /sunnies, /tiny-treasures, /privacy and /terms all point at the homepage —
 * which is why Google refused to index them. Each page sets its own canonical.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Sunglasses & Jewellery in Harare | Sunnies by Mel",
    template: `%s | ${SITE.titleSuffix}`,
  },
  description:
    "Sunnies by Mel is a sunglasses and jewellery store in Belgravia, Harare. Polarized, photochromic and blue-light glasses plus non-tarnish jewellery from $5.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "shopping",
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: "Sunglasses & Jewellery in Harare | Sunnies by Mel",
    description:
      "Polarized, photochromic and blue-light sunglasses plus non-tarnish jewellery. Visit us at 78 East Road, Belgravia, Harare or order on WhatsApp.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunglasses & Jewellery in Harare | Sunnies by Mel",
    description:
      "Polarized, photochromic and blue-light sunglasses plus non-tarnish jewellery in Belgravia, Harare.",
    images: [OG_IMAGE.url],
  },
  other: {
    "geo.region": "ZW-HA",
    "geo.placename": "Harare",
    "geo.position": `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0f1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZW" className={`${outfit.variable} ${dmSans.variable} dark`}>
      <body className="min-h-screen flex flex-col">
        <SiteSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
