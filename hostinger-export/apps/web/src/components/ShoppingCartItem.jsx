import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ShoppingCartItem = ({ item, updateQuantity, removeFromCart }) => {
  // Use the selected variation image, fallback to default image
  const displayImage = item.selectedVariationImage || item.image;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
      {/* Product Image */}
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0 border border-border/50">
        <img 
          src={displayImage} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 w-full">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground line-clamp-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {item.category === 'sunnies' ? 'Eyewear' : 'Accessories'}
            </p>
            {item.selectedVariationImage && (
              <p className="text-xs font-medium text-primary mt-2 bg-primary/10 inline-block px-2 py-0.5 rounded">
                Specific Variation Selected
              </p>
            )}
          </div>
          <p className="font-bold text-lg text-foreground whitespace-nowrap">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center bg-background rounded-lg border border-border/50 p-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md hover:bg-muted text-foreground"
              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center font-medium text-sm text-foreground">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md hover:bg-muted text-foreground"
              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            onClick={() => removeFromCart(item.cartItemId)}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;