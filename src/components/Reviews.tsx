import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '@/src/lib/data';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-espresso relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-4"
          >
            What Our <span className="text-gold">Guests</span> Say
          </motion.h2>
          <div className="flex items-center justify-center gap-1 text-gold mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold" />)}
            <span className="ml-2 text-white/60 font-bold">4.9 / 5.0 on Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-dark p-10 rounded-[2.5rem] relative group hover:bg-charcoal/60 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/20 group-hover:text-gold/40 transition-colors" />
              
              <div className="flex gap-1 text-gold mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
              </div>
              
              <p className="text-white/80 text-lg italic leading-relaxed mb-8">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-white/40 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-gold text-white rounded-full font-bold shadow-2xl shadow-gold/20 hover:bg-gold/90 transition-all">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}
