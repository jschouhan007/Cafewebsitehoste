import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Coffee } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-32 relative bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent pointer-events-none" />
      <div className="absolute -left-32 top-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 via-pink-500/20 to-orange-400/40 mix-blend-overlay z-10 group-hover:opacity-50 transition-opacity duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80" 
              alt="Café Interior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Founder Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6 z-20 border-white/40 shadow-2xl bg-white/60 backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full border-2 border-pink-500 object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-xl text-slate-800">Mia Wong</h4>
                  <p className="text-pink-600 font-medium text-sm uppercase tracking-wider">Founder & Head Roaster</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700 italic text-sm">
                "I wanted to create a space where the energy of the city meets the comfort of a perfectly brewed cup."
              </p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-bold text-sm uppercase tracking-wider mb-6 w-fit">
              <Heart className="w-4 h-4" />
              Our Story
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-display font-black text-slate-800 mb-8 leading-tight">
              More Than Just <br />
              <span className="text-gradient">Coffee.</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tea Bar was born from a simple idea: coffee shouldn't be boring. We blend traditional roasting techniques with vibrant, modern flavors to create drinks that look as good as they taste.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 mt-8">
              <motion.div variants={itemVariants} className="glass p-6 rounded-2xl bg-pink-50/50 border-pink-100 hover:bg-pink-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Vibrant Energy</h3>
                <p className="text-slate-600 text-sm">Every cup is designed to spark joy and fuel your creativity.</p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="glass p-6 rounded-2xl bg-orange-50/50 border-orange-100 hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Artisanal Quality</h3>
                <p className="text-slate-600 text-sm">Ethically sourced beans, roasted in-house for maximum flavor.</p>
              </motion.div>
            </div>
            
            {/* Removed Read Full Story button per user request */}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
