"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/sunnies", label: "Sunglasses" },
  { path: "/tiny-treasures", label: "Jewellery" },
  { path: "/#visit", label: "Visit us" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Sunnies by Mel — home"
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg group-hover:shadow-xl group-hover:border-primary transition-all duration-300 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Sunnies by Mel logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:inline text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Sunnies by Mel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 font-medium transition-all duration-300 h-auto ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link href="/cart" aria-label="View your enquiry list" className="relative group">
              <Button
                variant="outline"
                size="icon"
                aria-hidden="true"
                tabIndex={-1}
                className={`relative border-border/50 hover:bg-secondary transition-all duration-300 ${
                  isActive("/cart") ? "bg-secondary text-primary" : ""
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pop-in">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-reveal"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
