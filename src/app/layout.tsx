import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

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

export const metadata: Metadata = {
  title: "Sunnies by Mel - Premium Eyewear & Accessories",
  description:
    "Shop premium sunglasses, blue-light glasses, and accessories at Sunnies by Mel. Bold styles, great prices. Order via WhatsApp.",
  metadataBase: new URL("https://sunniesbymel.co.zw"),
  alternates: { canonical: "https://sunniesbymel.co.zw" },
  openGraph: {
    title: "Sunnies by Mel - Premium Eyewear & Accessories",
    description:
      "Shop premium sunglasses, blue-light glasses, and accessories at Sunnies by Mel. Bold styles, great prices. Order via WhatsApp.",
    siteName: "Sunnies by Mel",
    images: [{ url: "/profile%20pic.png", width: 400, height: 400, alt: "Sunnies by Mel" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunnies by Mel - Premium Eyewear & Accessories",
    description:
      "Shop premium sunglasses, blue-light glasses, and accessories at Sunnies by Mel.",
    images: ["/profile%20pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} dark`}
    >
      <body className="min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
