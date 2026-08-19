"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

const SCENE_VIDEOS = [
  "/videos/scene1.mp4",
  "/videos/scene2.mp4",
  "/videos/scene3.mp4",
  "/videos/scene4.mp4",
  "/videos/scene5.mp4",
];

export default function Hero() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // Advance to next scene when video finishes
  const handleVideoEnded = () => {
    setCurrentSceneIndex((prevIndex) => (prevIndex + 1) % SCENE_VIDEOS.length);
  };

  // If next scene file is missing/fails, loop back to the first scene immediately
  const handleVideoError = () => {
    if (currentSceneIndex !== 0) {
      setCurrentSceneIndex(0);
    }
  };

  const activeVideoSrc = SCENE_VIDEOS[currentSceneIndex];

  return (
    <section id="home" className="relative w-full bg-white text-slate-900 pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-20 overflow-hidden border-b border-slate-100">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 via-slate-50/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-emerald-100/30 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* ── 2-COLUMN CORPORATE HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: HEADLINE & CTAS */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8 text-left"
          >
            {/* Innovation Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.16em]">
                Specialty Pharma • Gynecological Formulations
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] sm:leading-[1.08] tracking-tight">
                Pioneering Advanced Therapeutic Formulations For <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">
                  Modern Healthcare.
                </span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl">
                Mythron Pharma is a dedicated pharmaceutical enterprise specializing in high-potency formulations across gynecology, maternal health, bone wellness, and targeted therapeutic care.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
              <Link 
                href="/products"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3 shadow-lg shadow-slate-900/10 transition-all duration-300 hover:scale-[1.02] active:scale-98 text-center"
              >
                Explore Product Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                href="/connect"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all hover:border-slate-400 text-center"
              >
                Partner With Us
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: EXPANDED HIGH-IMPACT VIDEO VISUAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative w-full">
              <div className="bg-white p-2.5 sm:p-3.5 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl sm:shadow-2xl overflow-hidden group">
                <div className="h-[280px] sm:h-[380px] md:h-[440px] lg:h-[460px] xl:h-[500px] w-full rounded-xl sm:rounded-2xl overflow-hidden relative">
                  <video 
                    key={activeVideoSrc}
                    autoPlay 
                    muted 
                    playsInline
                    onEnded={handleVideoEnded}
                    onError={handleVideoError}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={activeVideoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 text-white text-left z-10">
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-emerald-400 block mb-1">
                      Trusted By Prescribing Doctors
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black leading-snug">
                      High-Efficacy Specialty Formulations
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── METRICS STRIP ── */}
        <div className="border-t border-b border-slate-200/80 py-6 sm:py-8 bg-slate-50/50 rounded-2xl px-4 sm:px-6 lg:px-12 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">100%</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Bio-Available Formulations</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-600 tracking-tight">WHO-GMP</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Quality Certified</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">Gynecology</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Specialized Portfolio</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">ISO 9001</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Quality Management</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

