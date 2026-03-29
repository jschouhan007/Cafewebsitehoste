import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import MagneticButton from './MagneticButton';
import { allMenuItems } from '../data/menuData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : allMenuItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/#home' },
    { name: 'Menu', href: isHome ? '#menu' : '/#menu' },
    { name: 'Gallery', href: isHome ? '#gallery' : '/#gallery' },
    { name: 'About', href: isHome ? '#about' : '/#about' },
    { name: 'Menu Catalog', href: '/menu-catalog' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          'flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300',
          isScrolled ? 'glass' : 'bg-transparent'
        )}>
          {/* Logo */}
          <Link to="/#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] transition-all">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-800">
              Tea <span className="text-gradient">Bar</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-sm font-semibold text-slate-700 hover:text-pink-500 transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-slate-700 hover:text-pink-500 transition-colors"
              aria-label="Search menu"
            >
              <Search className="w-5 h-5" />
            </button>
            <MagneticButton className="liquid-btn px-6 py-2.5 text-sm">
              Order Now
            </MagneticButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="relative z-50 w-10 h-10 rounded-full glass flex items-center justify-center text-slate-800 hover:text-pink-500 transition-colors"
              aria-label="Search menu"
            >
              <Search className="w-5 h-5" />
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="relative z-50 w-10 h-10 rounded-full glass flex items-center justify-center text-slate-800 hover:text-pink-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-pink-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="liquid-btn w-full py-4 mt-4 text-lg">
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4 sm:pt-32"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-4">
                <Search className="w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search for coffee, pastries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg sm:text-xl bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
                {searchQuery.trim() === '' ? (
                  <div className="text-center py-12 text-slate-500">
                    <Coffee className="w-12 h-12 mx-auto mb-4 text-slate-300 opacity-50" />
                    <p>Type to start searching our vibrant menu</p>
                  </div>
                ) : searchResults.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">
                    <p>No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {searchResults.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                        <div className="flex-1">
                          <h4 className="font-display font-bold text-slate-800 group-hover:text-pink-500 transition-colors">{item.name}</h4>
                          <p className="text-sm text-slate-500 line-clamp-1">{item.desc}</p>
                        </div>
                        <div className="font-bold text-pink-500">{item.price}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
