"use client";

import { useState } from "react";
import { ShoppingCart, Plus, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetailModal from "./ProductDetailModal";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images =
    product.images?.length > 0 ? product.images : [product.image];

  const handleOpen = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="group overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-2 cursor-pointer"
        onClick={handleOpen}
      >
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-background/50">
          <ProductImageGallery images={images} productName={product.name} />

          {/* "+N more" badge */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
              <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-md text-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm border border-border/50">
                <Images className="w-3.5 h-3.5" />
                <span>+{images.length - 1} more</span>
              </div>
            </div>
          )}

          {/* Quick-open button on hover */}
          <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
            <Button
              size="icon"
              className="rounded-full bg-primary/90 hover:bg-primary shadow-lg h-9 w-9"
              onClick={handleOpen}
            >
              <Plus className="h-5 w-5 text-primary-foreground" />
            </Button>
          </div>
        </div>

        {/* Info card that overlaps the image */}
        <div className="flex-1 p-6 relative z-10 -mt-10 pointer-events-none">
          <div className="bg-card/95 backdrop-blur-md rounded-xl p-4 border border-border/50 shadow-lg mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 pointer-events-auto">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-primary whitespace-nowrap">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>

        {/* Footer button */}
        <div className="p-6 pt-0 mt-auto">
          <Button
            onClick={handleOpen}
            variant="secondary"
            className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-[0.98]"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Select Variation
          </Button>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
