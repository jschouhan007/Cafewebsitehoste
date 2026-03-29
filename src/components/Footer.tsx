import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-24 relative overflow-hidden">
      {/* Neon Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Tea <span className="text-gradient">Bar</span>
              </span>
            </a>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Fueling creativity with vibrant flavors and a space designed for connection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {['Menu', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-pink-400 transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-pink-500" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>1st floor, Tea Bar, Kishore Nagar,</li>
              <li>Anand Nagar Rd, Khandwa, MP 450001</li>
              <li>hello@teabar.com</li>
              <li>+91 92855 52666 / 98267 81064</li>
            </ul>
          </div>

          {/* Order CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Order Online</h4>
            <p className="text-slate-400 mb-6">Skip the line and order your favorite brew for pickup or delivery.</p>
            <div className="flex flex-col gap-4">
              <MagneticButton 
                onClick={() => window.open('https://zomato.com', '_blank')}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-bold hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Order on Zomato
              </MagneticButton>
              <MagneticButton 
                onClick={() => window.open('https://swiggy.com', '_blank')}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all flex items-center justify-center gap-2"
              >
                Order on Swiggy
              </MagneticButton>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tea Bar. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
