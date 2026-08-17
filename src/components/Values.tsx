"use client";

import { motion } from "framer-motion";
import { Microscope, Globe, HeartPulse, Activity, ArrowRight, Sparkles } from "lucide-react";

const pillars = [
  {
    title: "Precision Science",
    tag: "MOLECULAR_LOGIC",
    desc: "Rigorous molecular modeling and chemical stability across all therapeutic precursors.",
    icon: Microscope,
    image: "/value-precision.png"
  },
  {
    title: "Global Reach",
    tag: "INSTITUTIONAL_REACH",
    desc: "Optimizing supply-chain velocities to democratize access across emerging global healthcare.",
    icon: Globe,
    image: "/value-reach.png"
  },
  {
    title: "Patient Focus",
    tag: "PATIENT_EQUILIBRIUM",
    desc: "Instituting a mission of profound care translates into systemic well-being for every patient.",
    icon: HeartPulse,
    image: "/value-care.png"
  },
  {
    title: "Robotic Velocity",
    tag: "AUTOMATED_SYNTHESIS",
    desc: "Harnessing robotic manufacturing lines to deliver consistent purity threshold outputs.",
    icon: Activity,
    image: "/hero-professional.png"
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-slate-50/80 via-emerald-50/20 to-transparent pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* ── INTRO HEADER (LEFT ALIGNED WIDE) ── */}
        <div className="w-full mb-16 border-b border-slate-200 pb-8 text-left">
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-3"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800">Corporate Pillars</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
                 Scientific <span className="text-emerald-600">Heritage & Values</span>
              </h2>
              
              <p className="text-slate-600 text-sm lg:text-base font-normal leading-relaxed max-w-2xl">
                 Stabilizing complex therapeutic indices through modular synthesis, automated clinical validation, and patient-first commitment.
              </p>
           </motion.div>
        </div>

        {/* ── 4-COLUMN CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between"
            >
               {/* Image Header */}
               <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-emerald-600 shadow-md">
                     <pillar.icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
               </div>

               {/* Card Body */}
               <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
                       {pillar.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                       {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed mt-3">
                       {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                     <span>Pillar 0{i+1}</span>
                     <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white text-slate-700 flex items-center justify-center transition-all">
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
