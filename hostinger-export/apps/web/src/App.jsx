import React from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner.jsx';
import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
import { CartProvider } from '@/contexts/CartContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import SunniesPage from './pages/SunniesPage.jsx';
import TinyTreasuresPage from './pages/TinyTreasuresPage.jsx';
import CartPage from './pages/CartPage.jsx';

// Separate inner component to use useLocation for page transitions
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <ScrollToTop />
      <Header />
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/sunnies" element={<SunniesPage />} />
            <Route path="/tiny-treasures" element={<TinyTreasuresPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <AppContent />
          <Toaster theme="dark" position="bottom-right" />
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;