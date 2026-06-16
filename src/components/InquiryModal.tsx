"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productImage?: string;
  productVariation?: string;
  customMessage?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  productName = "Products",
  productImage,
  productVariation,
  customMessage,
}: InquiryModalProps) {
  const defaultText = `Hi! I'm interested in ${productName}${
    productVariation ? ` (Variation: ${productVariation})` : ""
  }. Could you provide more information?`;
  const textToShare = customMessage || defaultText;

  const handleEmail = () => {
    const subject = `Inquiry about ${productName}`;
    const body = `${textToShare}\n\n${productImage ? `Image reference: ${productImage}\n` : ""}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const handleSocialClick = (url: string, platform: string) => {
    navigator.clipboard.writeText(textToShare).then(
      () => {
        toast.success("Message copied to clipboard!", {
          description: `Ready to paste in ${platform} chat.`,
        });
        window.open(url, "_blank", "noopener,noreferrer");
        onClose();
      },
      () => {
        window.open(url, "_blank", "noopener,noreferrer");
        onClose();
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-card border border-border/50 shadow-2xl rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send Inquiry
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose a channel to send your inquiry about {productName}.
              </p>
            </div>

            {productImage && !customMessage && (
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border border-border/50 bg-muted/30">
                  <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-14 justify-start text-base font-medium hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-600/30 transition-all"
                onClick={() =>
                  handleSocialClick(
                    "https://www.facebook.com/share/1BZkprESF4/",
                    "Facebook"
                  )
                }
              >
                <FacebookIcon className="mr-3 h-5 w-5 text-blue-500" />
                Inquire via Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 justify-start text-base font-medium hover:bg-pink-600/10 hover:text-pink-400 hover:border-pink-600/30 transition-all"
                onClick={() =>
                  handleSocialClick("https://instagram.com/sunnies_by_mel", "Instagram")
                }
              >
                <InstagramIcon className="mr-3 h-5 w-5 text-pink-500" />
                Inquire via Instagram
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 justify-start text-base font-medium hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                onClick={handleEmail}
              >
                <Mail className="mr-3 h-5 w-5 text-primary" />
                Inquire via Email
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-xl border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Preview Message
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs text-muted-foreground"
                  onClick={() => {
                    navigator.clipboard.writeText(textToShare);
                    toast.success("Copied to clipboard");
                  }}
                >
                  <Copy className="h-3 w-3 mr-1" /> Copy
                </Button>
              </div>
              <p className="text-sm text-foreground/80 whitespace-pre-wrap max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                {textToShare}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
