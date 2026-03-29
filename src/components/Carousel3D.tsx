import React, { useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';

const carouselItems = [
  { id: 1, img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80', title: 'Morning Vibes' },
  { id: 2, img: 'https://images.unsplash.com/photo-1495474472201-42b4d13f24b0?auto=format&fit=crop&w=600&q=80', title: 'Latte Art' },
  { id: 3, img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', title: 'Cozy Corners' },
  { id: 4, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', title: 'Fresh Brews' },
  { id: 5, img: 'https://images.unsplash.com/photo-1445116572660-236099ce4fdf?auto=format&fit=crop&w=600&q=80', title: 'Sweet Treats' },
  { id: 6, img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80', title: 'Tea Nights' },
];

export default function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(300);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 200 : 300);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    controls.start({
      rotateY: rotation,
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    });
  }, [rotation, controls]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      setRotation(prev => prev + (360 / carouselItems.length));
    } else if (info.offset.x < -swipeThreshold) {
      setRotation(prev => prev - (360 / carouselItems.length));
    }
  };

  return (
    <section className="py-32 bg-[#1a1025] relative overflow-hidden flex flex-col items-center justify-center min-h-[800px] perspective-[1200px]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="text-center mb-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black text-white mb-6"
        >
          Tea Bar <span className="text-gradient">Moments</span>
        </motion.h2>
        <p className="text-slate-300 text-lg">Swipe to explore our vibrant community.</p>
      </div>

      <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[400px]" style={{ perspective: 1200 }}>
        <motion.div 
          className="w-full h-full preserve-3d cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {carouselItems.map((item, index) => {
            const angle = (index / carouselItems.length) * 360;
            return (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden glass-dark border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.2)]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white font-display font-bold text-2xl drop-shadow-md">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="mt-24 text-slate-400 text-sm tracking-widest uppercase flex items-center gap-4">
        <div className="w-12 h-px bg-slate-600" />
        Drag to rotate
        <div className="w-12 h-px bg-slate-600" />
      </div>
    </section>
  );
}
