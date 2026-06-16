import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Facebook, Instagram, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { toast } from 'sonner';

const InquiryModal = ({ 
  isOpen, 
  onClose, 
  productName = 'Products', 
  productImage, 
  productVariation,
  customMessage 
}) => {
  if (!isOpen) return null;

  const defaultText = `Hi! I'm interested in ${productName}${productVariation ? ` (Variation: ${productVariation})` : ''}. Could you provide more information?`;
  const textToShare = customMessage || defaultText;

  const handleEmail = () => {
    const subject = `Inquiry about ${productName}`;
    const body = `${textToShare}\n\n${productImage ? `Image reference: ${productImage}\n` : ''}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const handleSocialClick = (url, platform) => {
    // Social links don't natively accept pre-filled text in the same way mailto does,
    // so we copy it to the clipboard for the user to easily paste.
    navigator.clipboard.writeText(textToShare).then(() => {
      toast.success('Message copied to clipboard!', {
        description: `Ready to paste in ${platform} chat.`
      });
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    }).catch(() => {
      // Fallback if clipboard fails
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    });
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
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Inquiry</h2>
              <p className="text-sm text-muted-foreground">
                Choose a channel to send your inquiry about {productName}.
              </p>
            </div>

            {productImage && !customMessage && (
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border border-border/50 bg-muted/30">
                  <img src={productImage} alt={productName} className="w-full h-full object-cover" />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-14 justify-start text-base font-medium hover:bg-blue-600/10 hover:text-blue-600 hover:border-blue-600/30 transition-all"
                onClick={() => handleSocialClick('https://www.facebook.com/share/1BZkprESF4/', 'Facebook')}
              >
                <Facebook className="mr-3 h-5 w-5 text-blue-600" />
                Inquire via Facebook
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 justify-start text-base font-medium hover:bg-pink-600/10 hover:text-pink-600 hover:border-pink-600/30 transition-all"
                onClick={() => handleSocialClick('https://instagram.com/', 'Instagram')}
              >
                <Instagram className="mr-3 h-5 w-5 text-pink-600" />
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
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Preview Message</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 px-2 text-xs text-muted-foreground"
                  onClick={() => {
                    navigator.clipboard.writeText(textToShare);
                    toast.success('Copied to clipboard');
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
};

export default InquiryModal;