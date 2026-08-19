"use client";

import { motion } from "framer-motion";
import { FlaskConical, Zap, ShieldCheck, ChevronRight } from "lucide-react";

const phases = [
  {
    icon: Zap,
    title: "Specialty Formulations",
    tagline: "PILLAR 01",
    desc: "Targeted gynecology, maternal health, bone wellness, and antibiotic formulations.",
    metric: "High Efficacy"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    tagline: "PILLAR 02",
    desc: "Formulations manufactured under strict WHO-GMP, ISO, and GLP compliant partner facilities.",
    metric: "WHO-GMP Certified"
  },
  {
    icon: FlaskConical,
    title: "Reliable Distribution",
    tagline: "PILLAR 03",
    desc: "Robust supply chain and stockist network ensuring consistent market availability.",
    metric: "Prompt Supply"
  }
];

const insights = [
  {
    category: "Specialty Focus",
    title: "GESTHRON-SR 200: Sustained Release Progesterone in Maternal Care",
    image: "/dossier-maternal.jpg",
    grid: "md:col-span-2",
    position: "object-[center_25%]"
  },
  {
    category: "Clinical Profile",
    title: "FERMYTH-XT: Advanced Bioavailability in Iron & Folic Acid Therapy",
    image: "/dossier-vitality.jpg",
    grid: "md:col-span-1",
    position: "object-[center_20%]"
  },
  {
    category: "Therapeutic Synergy",
    title: "MYTHCLAV LB 625: Broad-Spectrum Protection Against Resistant Strains",
    image: "/dossier-physician.jpg",
    grid: "md:col-span-1",
    position: "object-[center_25%]"
  },
  {
    category: "Bone Mineralization",
    title: "MYTHCAL-XT: Advanced Calcium, D3 & Methylfolate Skeletal Synergy",
    image: "/dossier-bonehealth.jpg",
    grid: "md:col-span-2",
    position: "object-[center_12%]"
  }
];

export default function Manufacturing() {
  return (
    <section id="insights" className="py-16 sm:py-24 lg:py-32 bg-slate-50/60 relative overflow-hidden border-b border-slate-100">
      
      {/* Soft Ambient Background Accent Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* ── HEADER (LEFT ALIGNED WIDE) ── */}
        <div className="w-full mb-12 sm:mb-16 border-b border-slate-200/80 pb-6 sm:pb-8 text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80"
            >
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] text-emerald-800">Therapeutic Focus & Standards</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Clinical Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600">Therapeutic Portfolio</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-md leading-relaxed">
            Delivering trusted pharmaceutical formulations engineered for high bioavailability, clinical efficacy, and patient-first healthcare.
          </p>
        </div>

        {/* ── PHASES: HIGH PERFORMANCE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-emerald-400/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-bl-3xl group-hover:scale-110 transition-transform pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                    <phase.icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-black tracking-widest text-emerald-700 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200/70">
                    {phase.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed mb-8">
                  {phase.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <div className="text-[10px] sm:text-[11px] font-black uppercase text-emerald-600 tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {phase.metric}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── INSIGHTS: BENTO ARCHIVE ── */}
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Therapeutic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 italic font-medium">Dossiers & Literature</span>
            </h3>
            <div className="hidden md:block h-px flex-grow mx-8 bg-slate-200/80" />
            <a href="/products" className="w-fit text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] text-slate-900 bg-white border border-slate-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xs inline-block">
              Explore Products
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer border border-slate-200/90 shadow-md ${insight.grid} h-[300px] sm:h-[340px] lg:h-[380px]`}
              >
                <img 
                  src={insight.image} 
                  className={`absolute inset-0 w-full h-full object-cover ${insight.position} transition-transform duration-700 group-hover:scale-105`} 
                  alt={insight.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/30" />
                
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between">
                  <div className="bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-400/50 w-fit shadow-md">
                    <span className="text-[10px] sm:text-[11px] font-black text-emerald-400 uppercase tracking-wider">
                      {insight.category}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white leading-snug text-lg sm:text-xl lg:text-2xl drop-shadow-md group-hover:text-emerald-300 transition-colors">
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

