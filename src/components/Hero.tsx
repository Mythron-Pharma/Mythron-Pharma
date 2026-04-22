"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  
  // High-Precision Scroll Transitions
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.94]);
  const rounded = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      
      {/* ── ARCHITECTURAL PLAYER LAYER ── */}
      <motion.div 
        style={{ scale, borderRadius: rounded }}
        className="absolute inset-0 z-0 overflow-hidden shadow-[0_60px_100px_-20px_rgba(16,48,103,0.1)]"
      >
        <motion.div style={{ opacity: videoOpacity }} className="w-full h-full">
           <video 
             autoPlay 
             muted 
             loop 
             playsInline
             poster="/hero-lab.png"
             className="w-full h-full object-cover grayscale-[20%] brightness-110"
           >
             <source src="/hero-bg.mp4" type="video/mp4" />
             <source src="https://cdn.pixabay.com/video/2016/09/20/5129-183060281_large.mp4" type="video/mp4" />
           </video>
        </motion.div>
        
        {/* Clinical Texture Overlay (Dots/Grid) */}
        <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#103067 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Scientific Radial Contrast System */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.2)_100%)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
      </motion.div>

      {/* ── CENTERED CORE CONTENT ── */}
      <div className="relative z-20 max-w-5xl mx-auto w-full px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
           {/* Precision Heading */}
           <div className="space-y-6">
              <motion.h1 
                initial={{ letterSpacing: "0.1em", opacity: 0 }}
                animate={{ letterSpacing: "-0.02em", opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-blue leading-[0.95]"
              >
                 Advanced <span className="text-brand-green italic font-light">Clinical</span> <br />
                 Synthesis Standard.
              </motion.h1>
              <p className="text-lg md:text-xl text-brand-blue/50 font-medium max-w-xl mx-auto leading-relaxed tracking-tight">
                 Institutionalizing purity through modular chemistry <br className="hidden md:block" /> and automated clinical validation.
              </p>
           </div>

           {/* Premium Search module */}
           <div className="relative max-w-2xl mx-auto w-full group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/20 to-brand-green/20 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-white/80 backdrop-blur-3xl p-2 rounded-[32px] shadow-2xl border border-white flex items-center transition-all duration-500 group-hover:bg-white group-hover:border-brand-blue/20">
                 <div className="flex-grow flex items-center pl-8 pr-4">
                    <Search className="w-5 h-5 text-brand-blue/20 mr-4 group-hover:text-brand-blue transition-colors" />
                    <input 
                      type="text" 
                      placeholder="SEARCH CLINICAL DATABASE..." 
                      className="w-full bg-transparent border-none py-5 text-[11px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-blue placeholder:text-brand-blue/20 focus:outline-none"
                    />
                 </div>
                 <button className="bg-brand-blue text-white px-10 h-16 rounded-[24px] font-bold uppercase tracking-widest text-[10px] hover:bg-brand-green hover:text-brand-blue transition-all duration-500 flex items-center gap-3 shadow-xl shadow-brand-blue/20">
                    Execute <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
