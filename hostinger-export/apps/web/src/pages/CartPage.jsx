import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useCart } from '@/hooks/useCart.js';
import ShoppingCartItem from '@/components/ShoppingCartItem.jsx';
import InquiryModal from '@/components/InquiryModal.jsx';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const getOrderMessage = () => {
    const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();
    
    let message = `*New Order Request - Sunnies by Mel*\n`;
    message += `Order ID: #${orderId}\n\n`;
    message += `*Items:*\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: $${(item.price * item.quantity).toFixed(2)}\n`;
      if (item.selectedVariationImage) {
        message += `   Image Ref: ${item.selectedVariationImage}\n`;
      }
      message += `\n`;
    });
    
    message += `*Total Amount: $${getCartTotal().toFixed(2)}*\n\n`;
    message += `Please confirm my order and provide payment details.`;
    
    return message;
  };

  if (cartItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[80vh] flex flex-col items-center justify-center px-4"
      >
        <Helmet>
          <title>Sunnies by Mel - Shopping Cart</title>
        </Helmet>
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any items to your cart yet. Discover our premium collection of eyewear and accessories.
        </p>
        <Link to="/sunnies">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pt-24 pb-20 bg-background"
      >
        <Helmet>
          <title>Sunnies by Mel - Shopping Cart</title>
        </Helmet>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-10" style={{ letterSpacing: '-0.02em' }}>
            Shopping Cart
          </h1>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items List */}
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-border/50 pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
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
                  onClick={() => setIsInquiryModalOpen(true)}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Checkout / Inquire
                </Button>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Secure multi-channel checkout process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        productName="Cart Order"
        customMessage={getOrderMessage()}
      />
    </>
  );
};

export default CartPage;