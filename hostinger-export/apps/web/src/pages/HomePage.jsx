import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import { sunniesProducts, tinyTreasuresProducts } from '@/data/products.js';

const HomePage = () => {
  const featuredProducts = [...sunniesProducts.slice(0, 3), tinyTreasuresProducts[0]];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Helmet>
        <title>Sunnies by Mel - Premium Eyewear & Accessories</title>
        <meta name="description" content="Discover premium dark-mode styled sunglasses and accessories at Sunnies by Mel. Precision engineering meets bold aesthetics." />
      </Helmet>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden parallax bg-[url('https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=2000')] bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-4 text-sm font-medium text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <span>New Collection Dropped</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1]" style={{ letterSpacing: '-0.03em' }}>
              Shade The <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Ordinary.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Curated eyewear and essential accessories. Engineered for the bold, designed for the distinct.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/sunnies">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(255,145,0,0.3)] hover:shadow-[0_0_30px_rgba(255,145,0,0.5)]">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tiny-treasures">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300 active:scale-[0.98]">
                  View Accessories
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-32 bg-background relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                Featured Items
              </h2>
              <p className="text-xl text-muted-foreground">
                Iconic styles that define the season.
              </p>
            </div>
            <Link to="/sunnies" className="group flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View All 
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;