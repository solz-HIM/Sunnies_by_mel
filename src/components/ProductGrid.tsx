"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

/** Cards past this index skip the entrance animation — staggering 70+ nodes
 *  costs more in main-thread time than it buys in polish. */
const MAX_ANIMATED_CARDS = 12;

/**
 * Client-side catalogue grid. Search only filters an array that is already
 * server-rendered, so every product link exists in the initial HTML and stays
 * crawlable regardless of JavaScript.
 */
export default function ProductGrid({
  products,
  searchPlaceholder,
  columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}: {
  products: Product[];
  searchPlaceholder: string;
  columnsClassName?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
          of {products.length} products
        </p>

        <div className="relative w-full sm:w-72">
          <label htmlFor="catalogue-search" className="sr-only">
            {searchPlaceholder}
          </label>
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <Input
            id="catalogue-search"
            type="search"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 border-border bg-card pl-10 pr-10 text-foreground focus-visible:ring-primary"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Clear search"
              className="absolute right-1 top-1/2 h-9 w-9 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className={`grid gap-8 ${columnsClassName}`}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={index < MAX_ANIMATED_CARDS ? "h-full animate-reveal" : "h-full"}
              style={
                index < MAX_ANIMATED_CARDS
                  ? { animationDelay: `${index * 60}ms` }
                  : undefined
              }
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="mb-4 text-2xl font-semibold text-foreground">No products found</p>
          <p className="mb-8 text-muted-foreground">
            We couldn&apos;t find anything matching &quot;{searchQuery}&quot;
          </p>
          <Button
            onClick={() => setSearchQuery("")}
            variant="outline"
            className="min-h-11 border-border hover:bg-secondary"
          >
            Clear search
          </Button>
        </div>
      )}
    </div>
  );
}
