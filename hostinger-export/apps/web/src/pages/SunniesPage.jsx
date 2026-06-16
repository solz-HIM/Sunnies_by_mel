import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { sunniesProducts } from '@/data/products.js';

const SunniesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = sunniesProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20 bg-background"
    >
      <Helmet>
        <title>Sunnies by Mel - Shop Sunnies</title>
        <meta name="description" content="Browse our complete collection of premium sunglasses at Sunnies by Mel." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 border-b border-border/50 pb-8"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground" style={{ letterSpacing: '-0.03em' }}>
            Sunnies
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-xl text-muted-foreground max-w-2xl">
              The complete catalog. Designed for every face, styled for every vibe.
            </p>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search sunnies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 bg-card border-border focus-visible:ring-primary text-foreground"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery('')}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
            <p className="text-2xl font-semibold text-foreground mb-4">No products found</p>
            <p className="text-muted-foreground mb-8">We couldn't find anything matching "{searchQuery}"</p>
            <Button 
              onClick={() => setSearchQuery('')}
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
};

export default SunniesPage;