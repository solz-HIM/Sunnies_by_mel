"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { tinyTreasuresProducts } from "@/lib/products";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 15 },
  },
};

export default function TinyTreasuresPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = tinyTreasuresProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 border-b border-border/50 pb-8"
        >
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground"
            style={{ letterSpacing: "-0.03em" }}
          >
            Tiny Treasures
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xl text-muted-foreground max-w-2xl">
              Precision timepieces. A curation of bold aesthetics and reliable
              mechanics.
            </p>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search treasures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-card border-border focus-visible:ring-primary text-foreground"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {filteredProducts.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} className="h-full">
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl font-semibold text-foreground mb-4">
              No products found
            </p>
            <p className="text-muted-foreground mb-8">
              We couldn&apos;t find anything matching &quot;{searchQuery}&quot;
            </p>
            <Button
              onClick={() => setSearchQuery("")}
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              Clear Search
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
