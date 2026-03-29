import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function MapSnippet() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[450px] md:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl group"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 p-1 rounded-[3rem] pointer-events-none">
            <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative pointer-events-auto">
              
              {/* Interactive Map Iframe */}
              <div className="absolute inset-0 bg-slate-100">
                <iframe 
                  title="Tea Bar Location"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  loading="lazy"
                  src="https://maps.google.com/maps?q=21.8420032,76.3529966&z=15&output=embed" 
                  className="w-full h-full object-cover opacity-80 transition-opacity duration-700 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 pointer-events-none" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white pointer-events-none">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(236,72,153,0.6)]"
                >
                  <MapPin className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-4xl md:text-5xl font-display font-black mb-4 drop-shadow-lg">Find Your Vibe</h3>
                <p className="text-lg md:text-xl font-medium text-white/90 mb-8 max-w-lg drop-shadow-md">
                  1st floor, Tea Bar, Kishore Nagar, Anand Nagar Rd, Khandwa, Madhya Pradesh 450001<br />Open Daily: 11:00 AM - 11:30 PM
                </p>
                
                <MagneticButton 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=21.8420032,76.3529966', '_blank')}
                  className="glass bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all backdrop-blur-md border border-white/40 pointer-events-auto"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </MagneticButton>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
