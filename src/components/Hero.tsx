import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Vibrant Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[#f8f5ff]">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-400/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-400/30 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-purple-400/30 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-pink-500/30 shadow-[0_0_15px_rgba(255,0,127,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Brewed With Love ☕</span>
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-slate-800 flex flex-col items-center lg:items-start"
          >
            <span className="font-syncopate font-black uppercase tracking-tighter block">Taste The</span>
            <span className="font-playfair italic font-bold animated-text-flow bg-clip-text text-transparent text-6xl md:text-8xl lg:text-9xl -mt-2 mb-2 block w-fit">Vibrant</span>
            <span className="font-syncopate font-black uppercase tracking-tighter animated-text-flow bg-clip-text text-transparent block w-fit">Energy.</span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg font-medium"
          >
            Step into a world of color, flavor, and unmatched vibes. 
            Premium coffee and artisanal treats crafted to perfection.
          </motion.p>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <MagneticButton className="liquid-btn px-8 py-4 text-lg flex items-center justify-center gap-2 group">
              View Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton className="liquid-btn px-8 py-4 text-lg flex items-center justify-center gap-2 group">
              <Coffee className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
              Visit Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Video Replacement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center p-4 lg:p-8"
        >
          <div className="relative w-full h-full max-w-md mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/50 bg-slate-100">
            {/* 
              Since I don't have direct access to the video file URL you uploaded,
              I've added a placeholder video. Please upload your video to the 'public' 
              folder via the file explorer and rename it to 'coffee-video.mp4', 
              or update the src attribute below with the URL of your video.
            */}
            <video 
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
