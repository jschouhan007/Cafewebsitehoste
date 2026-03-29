import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-espresso mb-8"
            >
              Visit <span className="text-gold">Us</span>
            </motion.h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-espresso mb-1">Location</h4>
                  <p className="text-espresso/60">1st floor, Tea Bar, Kishore Nagar,<br />Anand Nagar Rd, Khandwa, MP 450001</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-espresso mb-1">Phone</h4>
                  <div className="flex flex-col">
                    <a href="tel:+919285552666" className="text-espresso/60 hover:text-gold transition-colors">+91 92855 52666</a>
                    <a href="tel:+919826781064" className="text-espresso/60 hover:text-gold transition-colors">+91 98267 81064</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-espresso mb-1">Hours</h4>
                  <div className="text-espresso/60 text-sm">
                    Open Daily: 11:00 AM - 11:30 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button 
                onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=21.8420032,76.3529966', '_blank')}
                className="bg-espresso text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl hover:bg-gold transition-all"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <button className="bg-white text-espresso border border-espresso/10 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-lg hover:border-gold transition-all">
                Book a Table
              </button>
            </div>
          </div>

          {/* Premium Map Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glowing Borders */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-amber-glow to-gold rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div className="relative glass-dark p-2 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <div className="h-[500px] w-full rounded-[2rem] overflow-hidden bg-charcoal/20 relative">
                {/* Placeholder for actual map - using an image for visual impact */}
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  alt="Map Location"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-espresso/20" />
                
                {/* Custom Map Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 bg-gold rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Map Controls Glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Tea Bar</p>
                      <p className="text-white/60 text-[10px]">Khandwa, MP</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=21.8420032,76.3529966', '_blank')}
                    className="p-2 bg-white rounded-lg text-espresso shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Coffee(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}
