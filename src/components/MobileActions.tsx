import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ShoppingBag, MessageCircle } from 'lucide-react';

export default function MobileActions() {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 100 }}
        className="glass-dark rounded-2xl p-2 flex items-center justify-between shadow-2xl border border-white/10"
      >
        <a 
          href="tel:+12125550199"
          className="flex flex-col items-center justify-center w-16 h-16 text-white/60 hover:text-gold transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase">Call</span>
        </a>
        
        <a 
          href="#contact"
          className="flex flex-col items-center justify-center w-16 h-16 text-white/60 hover:text-gold transition-colors"
        >
          <MapPin className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase">Visit</span>
        </a>

        <button className="flex-1 bg-gold text-white h-16 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform">
          <ShoppingBag className="w-5 h-5" />
          Order Now
        </button>

        <a 
          href="https://wa.me/12125550199"
          className="flex flex-col items-center justify-center w-16 h-16 text-white/60 hover:text-gold transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase">Chat</span>
        </a>
      </motion.div>
    </div>
  );
}
