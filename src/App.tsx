import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import MenuCatalog from './pages/MenuCatalog';

function ScrollHandler() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80; // Approximate navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen bg-[#f8f5ff] text-slate-800 font-sans selection:bg-pink-500 selection:text-white pb-24 md:pb-0">

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu-catalog" element={<MenuCatalog />} />
        </Routes>
        <Footer />

      {/* Mobile Sticky Order Button */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm md:hidden"
      >
        <motion.button 
          onClick={() => window.open('https://zomato.com', '_blank')}
          animate={{ 
            boxShadow: [
              "0px 8px 32px rgba(236, 72, 153, 0.3)", 
              "0px 8px 32px rgba(236, 72, 153, 0.7)", 
              "0px 8px 32px rgba(236, 72, 153, 0.3)"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="relative w-full py-4 px-6 rounded-full liquid-btn bg-white/60 backdrop-blur-2xl saturate-150 border border-white/80 flex items-center justify-center gap-3 active:scale-95 transition-transform overflow-hidden"
        >
          {/* Animated liquid background blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 rainbow-bg blur-xl rounded-full"
          />
          
          <ShoppingBag className="w-5 h-5 text-slate-800 relative z-10" />
          <span className="relative z-10 font-bold text-slate-800 text-lg tracking-wide">
            Order Now
          </span>
        </motion.button>
      </motion.div>
      </div>
    </Router>
  );
}

export default App;
