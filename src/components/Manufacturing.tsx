"use client";

import { motion } from "framer-motion";
import { FlaskConical, Beaker, ShieldCheck, ArrowRight, Zap, Microscope, BookOpen, Activity, ChevronRight } from "lucide-react";

const phases = [
  {
    icon: Zap,
    title: "Molecular Synthesis",
    tagline: "PHASE 01",
    desc: "Predictive chemical algorithms simulated before physical synthesis.",
    metric: "99.9% Purity"
  },
  {
    icon: FlaskConical,
    title: "Structural Validation",
    tagline: "PHASE 02",
    desc: "Rigorous bio-equivalent testing and structural analysis.",
    metric: "ISO Certified"
  },
  {
    icon: Microscope,
    title: "Automated Scale",
    tagline: "PHASE 03",
    desc: "Closed-loop robotic assembly ensuring batch integrity.",
    metric: "Global GMP"
  }
];

const insights = [
  {
    category: "White Paper",
    title: "Catalytic Synthesis in 2027: The Modular Cleanroom Revolution",
    image: "/insight-molecular.png",
    grid: "md:col-span-2 md:row-span-2"
  },
  {
    category: "Case Study",
    title: "Bio-Equivalence Benchmarks",
    image: "/hero-professional.png",
    grid: "md:col-span-1 md:row-span-1"
  },
  {
    category: "Report",
    title: "Robot Stability",
    image: "/insight-molecular.png",
    grid: "md:col-span-1 md:row-span-1"
  }
];

export default function Manufacturing() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* ── HEADER: SURGICAL PRECISION ── */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-green font-black tracking-[0.4em] text-[10px] uppercase mb-6"
            >
              Institutional Integrity
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-black text-brand-blue leading-[0.9] tracking-tighter">
              Precision <br />
              <span className="text-brand-green">Infrastructure.</span>
            </h2>
          </div>
          <p className="text-lg text-gray-400 font-light max-w-sm leading-relaxed">
            Defining the next generation of purity through computational chemistry and robotic synthesis.
          </p>
        </div>

        {/* ── PHASES: HIGH PERFORMANCE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-gray-50/50 p-10 lg:p-14 rounded-[3rem] border border-transparent hover:border-brand-blue/10 hover:bg-white hover:shadow-2xl transition-all duration-500 will-change-transform"
            >
              <div className="flex justify-between items-start mb-12">
                 <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                    <phase.icon className="w-7 h-7" />
                 </div>
                 <span className="text-[10px] font-black tracking-widest text-brand-blue/20">{phase.tagline}</span>
              </div>
              <h3 className="text-2xl font-black text-brand-blue mb-4 tracking-tight">{phase.title}</h3>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-10">{phase.desc}</p>
              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                 <div className="text-[10px] font-black uppercase text-brand-green tracking-widest">{phase.metric}</div>
                 <ChevronRight className="w-4 h-4 text-brand-blue/20 group-hover:text-brand-blue transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── INSIGHTS: BENTO ARCHIVE ── */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
             <h3 className="text-3xl font-black text-brand-blue tracking-tighter">Scientific <span className="text-brand-green italic font-light">Dossier</span></h3>
             <div className="h-px flex-grow mx-12 bg-gray-50 hidden md:block" />
             <button className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/40 border border-gray-100 px-8 py-4 rounded-full hover:bg-brand-blue hover:text-white transition-all">
                Full Archive
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-6 h-auto">
             {insights.map((insight, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.98 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-gray-50 ${insight.grid} ${insight.grid.includes('col-span-2') ? 'min-h-[380px]' : 'min-h-[300px]'}`}
               >
                 <img 
                   src={insight.image} 
                   className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                   alt={insight.title} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/20 to-transparent p-10 flex flex-col justify-between" />
                 
                 <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-between">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 w-fit">
                       <span className="text-[8px] font-bold text-white uppercase tracking-widest">{insight.category}</span>
                    </div>
                    <div>
                       <h4 className={`font-bold text-white leading-[1.1] group-hover:text-brand-green transition-colors ${insight.grid.includes('col-span-2') ? 'text-2xl md:text-4xl max-w-xl' : 'text-lg md:text-xl'}`}>
                          {insight.title}
                       </h4>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
