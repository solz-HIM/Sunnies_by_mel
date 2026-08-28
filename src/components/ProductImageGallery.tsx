"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: string[];
  productName?: string;
  /** Extra descriptive context appended to each alt attribute (SEO + a11y). */
  altContext?: string;
  /** Eager-load the first frame when this gallery is the page's LCP element. */
  priority?: boolean;
  /**
   * Rendered width of the gallery, for the responsive srcset. Defaults to the
   * catalogue-grid case; product pages pass their own larger value.
   */
  sizes?: string;
}

/**
 * The slide used to be a framer-motion AnimatePresence. This component renders
 * once per product card, so a catalogue page mounted 50 motion trees and had to
 * download the whole animation library before it could become interactive. A
 * CSS keyframe keyed on the image index gives the same effect for no JS.
 */

export default function ProductImageGallery({
  images = [],
  productName = "Product",
  altContext = "at Sunnies by Mel, Harare",
  priority = false,
  sizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 31vw, 23vw",
}: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleImages = images.length > 1;

  const paginate = useCallback(
    (newDir: number) => {
      if (!hasMultipleImages) return;
      setDirection(newDir);
      setCurrentIndex((prev) => {
        let next = prev + newDir;
        if (next < 0) next = images.length - 1;
        if (next >= images.length) next = 0;
        return next;
      });
    },
    [images.length, hasMultipleImages]
  );

  const goToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Reset to the first frame when the gallery is handed a different set of
  // images. Adjusting state during render is React's documented alternative to
  // a reset effect — it avoids the extra render pass an effect would cause.
  const [previousCount, setPreviousCount] = useState(images.length);
  if (previousCount !== images.length) {
    setPreviousCount(images.length);
    setCurrentIndex(0);
    setDirection(0);
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isHovered || !hasMultipleImages) return;
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isHovered, paginate, hasMultipleImages]);

  if (!images.length) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">No image</span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* `key` remounts the <img> on change, which restarts the CSS slide.
          direction === 0 is the very first paint — and on a product page that
          image is the LCP element — so it is deliberately left unanimated. */}
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        alt={
          images.length > 1
            ? `${productName} ${altContext} — view ${currentIndex + 1} of ${images.length}`
            : `${productName} ${altContext}`
        }
        fill
        sizes={sizes}
        priority={priority && currentIndex === 0}
        className={cn(
          "object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105",
          direction > 0 && "animate-slide-from-right",
          direction < 0 && "animate-slide-from-left"
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />

      {hasMultipleImages && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-foreground shadow-md"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                paginate(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-foreground shadow-md"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                paginate(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-2 z-10 pointer-events-none">
            <div className="flex pointer-events-auto">
              {/* Dots stay small visually but each button keeps a 44px tap target */}
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    goToImage(idx);
                  }}
                  className="flex h-11 w-6 items-center justify-center"
                  aria-label={`Show image ${idx + 1} of ${images.length}`}
                  aria-current={idx === currentIndex}
                >
                  <span
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === currentIndex
                        ? "bg-primary w-4"
                        : "bg-primary/40 hover:bg-primary/60 w-2"
                    )}
                  />
                </button>
              ))}
            </div>
            <span className="text-[10px] font-medium text-primary-foreground/90 bg-background/40 backdrop-blur-md px-2 py-0.5 rounded-full">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
