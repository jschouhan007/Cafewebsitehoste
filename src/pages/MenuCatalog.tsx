import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { categories, menuItems } from '../data/menuData';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function MenuCatalog() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category) {
      setSelectedId(category);
    }
  }, [location.search]);

  const selectedCategory = categories.find(c => c.id === selectedId);
  const currentItems = selectedId ? menuItems[selectedId as keyof typeof menuItems] : [];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-syncopate font-black text-4xl md:text-6xl uppercase tracking-tighter mb-4">
            Menu <span className="font-playfair italic text-pink-500 lowercase text-5xl md:text-7xl">Catalog</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of hot brews, refreshing chillers, gourmet snacks, and heavenly desserts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((cat, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div
                key={cat.id}
                layoutId={`card-container-${cat.id}`}
                variants={itemVariants}
                onClick={() => setSelectedId(cat.id)}
                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 30px rgba(251, 194, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-3xl card-border-flow h-64 group cursor-pointer transition-shadow"
              >
                <div className="clay-card border-none rounded-[22px] p-6 h-full w-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <motion.div layoutId={`icon-${cat.id}`} className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-gradient-to-br ${color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <cat.icon className="w-7 h-7" />
                  </motion.div>

                  <motion.h3 layoutId={`title-${cat.id}`} className="font-syncopate font-bold text-lg mb-2 text-slate-800 group-hover:text-pink-600 transition-colors">
                    {cat.label}
                  </motion.h3>

                  <div className="mt-auto flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-pink-500 transition-colors">
                    <span>View items</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && selectedCategory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-40"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="bg-white/90 backdrop-blur-xl w-full max-w-4xl max-h-[85vh] rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-white/50"
              >
                {/* Header */}
                <div className="p-6 md:p-8 flex items-center justify-between border-b border-slate-200/50 bg-white/50">
                  <div className="flex items-center gap-4">
                    <motion.div layoutId={`icon-${selectedCategory.id}`} className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${colors[categories.findIndex(c => c.id === selectedId) % colors.length]} text-white shadow-md`}>
                      <selectedCategory.icon className="w-6 h-6" />
                    </motion.div>
                    <motion.h2 layoutId={`title-${selectedCategory.id}`} className="text-2xl md:text-3xl font-syncopate font-bold text-slate-800">
                      {selectedCategory.label}
                    </motion.h2>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 bg-slate-100 hover:bg-pink-100 text-slate-500 hover:text-pink-500 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto no-scrollbar clay-card border-none rounded-none shadow-none flex-1">
                  {currentItems.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {currentItems.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-50 hover:border-pink-200 hover:shadow-lg transition-all group"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-slate-800 pr-2 group-hover:text-pink-600 transition-colors leading-tight">{item.name}</h4>
                            <span className="font-black text-pink-500 whitespace-nowrap">{item.price}</span>
                          </div>
                          <p className="text-sm text-slate-500 line-clamp-2">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="h-40 flex items-center justify-center text-slate-400">
                      Menu items arriving soon.
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
