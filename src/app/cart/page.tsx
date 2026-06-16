"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import ShoppingCartItem from "@/components/ShoppingCartItem";

const WHATSAPP_NUMBER = "263783180745";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const handleWhatsAppCheckout = () => {
    const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();
    let message = `*New Order - Sunnies by Mel*\n`;
    message += `Order ID: #${orderId}\n`;
    message += `─────────────────────\n\n`;
    message += `*Items:*\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      if (item.quantity > 1) message += `   Qty: ${item.quantity}\n`;
      message += `   Price: $${(item.price * item.quantity).toFixed(2)}\n`;
      if (item.description) message += `   ${item.description}\n`;
      message += `\n`;
    });

    message += `─────────────────────\n`;
    message += `*Total: $${getCartTotal().toFixed(2)}*\n\n`;
    message += `Please confirm my order and provide payment details. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[80vh] flex flex-col items-center justify-center px-4"
      >
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Your cart is empty
        </h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven&apos;t added any items to your cart yet. Discover
          our premium collection of eyewear and accessories.
        </p>
        <Link href="/sunnies">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl md:text-5xl font-bold text-foreground mb-10"
          style={{ letterSpacing: "-0.02em" }}
        >
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <ShoppingCartItem
                key={item.cartItemId}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 sticky top-28 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-border/50 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">
                    Total
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-right">
                  Taxes included where applicable
                </p>
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,145,0,0.2)] hover:shadow-[0_0_30px_rgba(255,145,0,0.4)] transition-all duration-300"
                onClick={handleWhatsAppCheckout}
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Checkout / Inquire
              </Button>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Your order details are sent securely</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
