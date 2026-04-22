"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  FlaskConical, 
  Activity, 
  ShieldCheck, 
  Dna,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <div className="min-h-screen bg-[#fafafa] relative">
      
      {/* ── SCIENTIFIC GRID BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none scientific-grid z-0" />

      {/* ── DESKTOP DASHBOARD (lg+) ── */}
      <div className="hidden lg:flex flex-row relative z-10 h-screen overflow-hidden">
        {/* LEFT: THE ARCHIVE LIST */}
        <div className="w-[55%] h-full overflow-y-auto pt-48 pb-40 px-24 custom-scrollbar">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-brand-green" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue/30 italic">Catalogue Index</span>
               </div>
               <h1 className="text-8xl font-bold text-brand-blue tracking-tighter leading-none mb-8">
                  The Scientific <br />
                  <span className="text-brand-green italic font-light">Archive.</span>
               </h1>
            </motion.div>

            <div className="space-y-0">
               {products.map((p, i) => (
                 <motion.div
                   key={p.id}
                   onMouseEnter={() => setActiveProduct(p)}
                   className="group relative py-12 border-b border-gray-100 cursor-pointer"
                 >
                   <Link href={`/products/${p.id}`} className="flex items-end justify-between">
                      <div>
                          <span className="text-[10px] font-black text-brand-green mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">SPECIMEN {String(i + 1).padStart(2, '0')}</span>
                          <h2 className={`text-6xl font-bold tracking-tighter transition-all duration-500 
                            ${activeProduct.id === p.id ? 'text-brand-blue translate-x-4' : 'text-gray-200 group-hover:text-brand-blue/40'}`}>
                             {p.name}
                          </h2>
                          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mt-4 block opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">
                             {p.category}
                          </span>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-brand-blue opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 shadow-xl shadow-brand-blue/10 bg-white">
                         <ArrowUpRight className="w-5 h-5" />
                      </div>
                   </Link>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT: THE ANALYSTICAL VIEWPORT (FIXED ON DESKTOP) */}
        <div className="w-[45%] h-full bg-white border-l border-gray-100 flex flex-col p-20 overflow-hidden pt-40">
           <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white">
                    <FlaskConical className="w-6 h-6" />
                 </div>
                 <div>
                    <span className="text-[10px] font-black text-brand-blue/30 block uppercase tracking-widest leading-none mb-1">Stability Status</span>
                    <span className="text-[11px] font-bold text-brand-green uppercase tracking-widest">Verified 99.9% Purity</span>
                 </div>
              </div>
              <Dna className="w-7 h-7 text-brand-blue/10 animate-spin-slow" />
           </div>

           <div className="flex-1 relative flex items-center justify-center mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                   <img src={activeProduct.image || "/pharma-bottle.png"} className="max-h-[85%] object-contain drop-shadow-2xl" alt={activeProduct.name} />
                   <div className="absolute top-0 right-0 bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-gray-50 shadow-2xl max-w-[190px]">
                      <p className="text-[9px] font-black text-brand-blue/40 uppercase tracking-widest mb-2">Therapeutic Index</p>
                      <p className="text-[13px] font-bold text-brand-blue leading-tight uppercase tracking-tight">{activeProduct.focus}</p>
                   </div>
                   <div className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-gray-50 shadow-2xl">
                      <p className="text-[9px] font-black text-brand-blue/40 uppercase tracking-widest mb-2">Stability Matrix</p>
                      <div className="flex items-center gap-2">
                         <Zap className="w-3.5 h-3.5 text-brand-green" />
                         <span className="text-[13px] font-bold text-brand-blue tracking-tight">Active Synthesis</span>
                      </div>
                   </div>
                </motion.div>
              </AnimatePresence>
           </div>

           <div className="h-32 border-t border-gray-50 pt-10">
              <AnimatePresence mode="wait">
                 <motion.div key={activeProduct.id + 'text'} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                    <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                       <Target className="w-3 h-3" /> Technical Summary
                    </h4>
                    <p className="text-lg text-gray-400 font-light leading-relaxed line-clamp-2 italic">"{activeProduct.tagline}"</p>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </div>

      {/* ── MOBILE MAGAZINE VIEW (max-lg) ── */}
      <div className="lg:hidden h-screen overflow-y-auto snap-y snap-mandatory pt-20">
         {products.map((p, i) => (
           <div key={p.id} className="h-screen w-full snap-start flex flex-col p-6 bg-white border-b border-gray-100 flex-shrink-0">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                 <span className="text-[9px] font-black text-brand-green tracking-[0.4em] uppercase">Specimen {String(i + 1).padStart(2, '0')}</span>
                 <FlaskConical className="w-5 h-5 text-brand-blue/20" />
              </div>

              {/* Mobile Visual */}
              <div className="flex-1 relative flex items-center justify-center p-4">
                 <img src={p.image || "/pharma-bottle.png"} className="max-h-full object-contain drop-shadow-xl" alt={p.name} />
                 
                 {/* Tiny Meta Pills */}
                 <div className="absolute top-4 right-0 bg-brand-blue/5 px-4 py-2 rounded-2xl border border-brand-blue/10">
                    <span className="text-[8px] font-black text-brand-blue uppercase">{p.category}</span>
                 </div>
              </div>

              {/* Mobile Content */}
              <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm mt-auto mb-10">
                 <h2 className="text-3xl font-bold text-brand-blue mb-4 tracking-tighter">{p.name}</h2>
                 <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 italic">"{p.tagline}"</p>
                 
                 <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div>
                       <p className="text-[8px] font-black text-brand-blue/30 uppercase tracking-widest mb-1">Index Focus</p>
                       <p className="text-[11px] font-bold text-brand-blue">{p.focus}</p>
                    </div>
                    <Link href={`/products/${p.id}`} className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/20">
                       <ArrowUpRight className="w-4 h-4" />
                    </Link>
                 </div>
              </div>
           </div>
         ))}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        
        .scientific-grid {
          background-image: 
            linear-gradient(to right, #103067 1px, transparent 1px),
            linear-gradient(to bottom, #103067 1px, transparent 1px);
          background-size: 100px 100px;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>

    </div>
  );
}
