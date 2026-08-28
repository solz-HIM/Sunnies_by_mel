import Link from "next/link";
import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";
import { sunniesProducts, tinyTreasuresProducts } from "@/lib/products";
import { SITE } from "@/lib/seo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  /* Deep links straight from the footer give the most valuable product URLs an
     extra site-wide inbound link, instead of leaving them two clicks deep in a
     single category grid. */
  const popularSunnies = sunniesProducts.slice(0, 6);
  const popularTreasures = tinyTreasuresProducts.slice(0, 5);

  return (
    <footer className="bg-muted text-muted-foreground border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-semibold text-lg mb-4 text-foreground">
              Sunnies by Mel
            </h2>
            <p className="text-sm leading-relaxed mb-5">
              A sunglasses and jewellery store in Belgravia, Harare. Polarized,
              photochromic and anti-blue-light eyewear plus non-tarnish Tiny
              Treasures jewellery — details matter.
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com/sunnies_by_mel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <InstagramIcon className="h-4 w-4" />
                <span>@sunnies_by_mel</span>
              </a>
              <a
                href="https://www.facebook.com/share/1BZkprESF4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <FacebookIcon className="h-4 w-4" />
                <span>Message us on Facebook</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-sunnies">
            <h2 id="footer-sunnies" className="font-semibold text-lg mb-4 text-foreground">
              <Link href="/sunnies" className="hover:text-primary transition-colors duration-200">
                Sunglasses
              </Link>
            </h2>
            <ul className="space-y-2.5 text-sm">
              {popularSunnies.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sunnies" className="font-medium text-primary hover:underline">
                  All {sunniesProducts.length} sunglasses →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-treasures">
            <h2 id="footer-treasures" className="font-semibold text-lg mb-4 text-foreground">
              <Link href="/tiny-treasures" className="hover:text-primary transition-colors duration-200">
                Tiny Treasures
              </Link>
            </h2>
            <ul className="space-y-2.5 text-sm">
              {popularTreasures.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tiny-treasures" className="font-medium text-primary hover:underline">
                  All {tinyTreasuresProducts.length} pieces →
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-semibold text-lg mb-4 text-foreground">Visit us</h2>
            <address className="not-italic space-y-3 text-sm leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {SITE.address.street}
                  <br />
                  {SITE.address.suburb}, {SITE.address.city}
                  <br />
                  {SITE.address.countryName}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${SITE.telephone}`} className="hover:text-primary transition-colors duration-200">
                  {SITE.telephone}
                </a>
              </p>
            </address>
            <p className="mt-4 text-sm leading-relaxed">
              Mon–Fri 8:30am–5:00pm
              <br />
              Sat 9:00am–1:00pm
            </p>
            <Link
              href="/#visit"
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              See us on the map →
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">
            © {currentYear} Sunnies by Mel. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-border/30 mt-6 pt-6 text-center">
          <a
            href="https://solzdesigns.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Website designed by Solz Designs
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
