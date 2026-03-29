import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/menuData';

// Reusing colors for the beautiful category buttons
const colors = [
  'from-orange-400 to-orange-600',
  'from-teal-400 to-emerald-500',
  'from-pink-400 to-rose-500',
  'from-blue-400 to-cyan-500',
  'from-purple-400 to-fuchsia-500',
  'from-yellow-400 to-amber-500',
  'from-red-400 to-red-600',
  'from-indigo-400 to-indigo-600',
  'from-cyan-400 to-blue-500',
  'from-rose-400 to-pink-600',
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <section id="menu" className="py-32 relative bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      <div className="absolute -right-64 top-32 w-96 h-96 bg-orange-400/20 rounded-full blur-[100px]" />
      <div className="absolute -left-64 bottom-32 w-96 h-96 bg-purple-400/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black mb-6"
          >
            Our <span className="text-gradient">Vibrant</span> Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of colorful beverages and artisanal treats.
          </motion.p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const color = colors[index % colors.length];
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/menu-catalog?category=${category.id}`)}
                className={`group relative px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden glass`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300 -z-20" />
                
                <Icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                <span className="text-slate-800 group-hover:text-white transition-colors duration-300">
                  {category.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
