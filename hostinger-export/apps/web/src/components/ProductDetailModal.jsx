import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { cn } from '@/lib/utils.js';
import { useCart } from '@/hooks/useCart.js';
import { toast } from 'sonner';
import InquiryModal from './InquiryModal.jsx';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const { addToCart } = useCart();

  const images = product?.images?.length > 0 ? product.images : [product?.image];
  const hasMultipleImages = images.length > 1;

  // Reset index and variation when product changes
  useEffect(() => {
    if (isOpen && product) {
      setCurrentIndex(0);
      setDirection(0);
      
      // Set default variation if available
      if (product.frameVariations && product.frameVariations.length > 0) {
        setSelectedVariation(product.frameVariations[0]);
      } else {
        setSelectedVariation(null);
      }
      
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  const paginate = useCallback((newDirection) => {
    if (!hasMultipleImages) return;
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  }, [images?.length, hasMultipleImages]);

  const goToImage = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleVariationClick = (variation) => {
    setSelectedVariation(variation);
    if (variation.imageIndex !== undefined && variation.imageIndex < images.length) {
      goToImage(variation.imageIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || isInquiryModalOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isInquiryModalOpen, onClose, paginate]);

  const handleAddToCart = () => {
    setIsAdding(true);
    const selectedImage = images[currentIndex];
    
    addToCart(product, selectedImage);
    
    const variationText = selectedVariation ? ` (${selectedVariation.name})` : '';
    
    toast.success(`Added ${product.name}${variationText} to cart`, {
      description: 'Item successfully added to your shopping cart.',
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--foreground))',
        border: '1px solid hsl(var(--border))'
      }
    });

    setTimeout(() => {
      setIsAdding(false);
      onClose();
    }, 600);
  };

  if (!product) return null;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '20%' : '-20%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '20%' : '-20%',
      opacity: 0
    })
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-card border border-border/50 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-50 rounded-full bg-background/50 backdrop-blur-md hover:bg-background/80 text-foreground"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Left: Image Gallery */}
              <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-muted/30 flex flex-col">
                <div className="relative flex-1 overflow-hidden flex items-center justify-center p-8">
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.img
                      key={currentIndex}
                      src={images[currentIndex]}
                      alt={`${product.name} - Variation ${currentIndex + 1}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </AnimatePresence>

                  {hasMultipleImages && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md"
                        onClick={() => paginate(-1)}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md"
                        onClick={() => paginate(1)}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Thumbnails / Dots */}
                {hasMultipleImages && (
                  <div className="h-24 bg-background/50 backdrop-blur-md border-t border-border/50 p-4 flex items-center justify-center gap-3 overflow-x-auto">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToImage(idx)}
                        className={cn(
                          "relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0",
                          idx === currentIndex 
                            ? "border-primary scale-110 shadow-md" 
                            : "border-transparent opacity-60 hover:opacity-100"
                        )}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Product Details */}
              <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col overflow-y-auto">
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category === 'sunnies' ? 'Eyewear' : product.category === 'blue-light' ? 'Blue Light' : 'Accessories'}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-2 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  {product.name}
                </h2>
                
                <p className="text-3xl font-light text-muted-foreground mb-6">
                  ${product.price.toFixed(2)}
                </p>
                
                <div className="prose prose-sm dark:prose-invert text-muted-foreground mb-8">
                  <p className="leading-relaxed">{product.description}</p>
                </div>

                {/* Frame Variations */}
                {product.frameVariations && product.frameVariations.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-foreground mb-3">Frame Variation</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.frameVariations.map((variation) => (
                        <Button
                          key={variation.id}
                          variant={selectedVariation?.id === variation.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleVariationClick(variation)}
                          className={cn(
                            "text-xs transition-all duration-200",
                            selectedVariation?.id === variation.id 
                              ? "bg-primary text-primary-foreground shadow-md" 
                              : "hover:border-primary/50"
                          )}
                        >
                          {variation.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {hasMultipleImages && !product.frameVariations && (
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-foreground mb-3">Selected Variation</h3>
                    <div className="flex items-center gap-3 bg-muted/30 p-3 rounded-xl border border-border/50">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-background">
                        <img src={images[currentIndex]} alt="Selected variation" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Variation {currentIndex + 1}</p>
                        <p className="text-xs text-muted-foreground">This exact style will be added to your cart.</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-border/50 space-y-3">
                  <Button
                    size="lg"
                    className={cn(
                      "w-full h-14 text-lg font-medium transition-all duration-300",
                      isAdding ? "bg-green-600 hover:bg-green-700 text-white" : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    )}
                    onClick={handleAddToCart}
                    disabled={isAdding}
                  >
                    {isAdding ? (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Add to Cart
                      </>
                    )}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-14 text-lg font-medium border-border/50 hover:bg-muted transition-all duration-300"
                    onClick={() => setIsInquiryModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Inquire Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productName={product?.name}
        productImage={images[currentIndex]}
        productVariation={selectedVariation ? selectedVariation.name : `Variation ${currentIndex + 1}`}
      />
    </>
  );
};

export default ProductDetailModal;