"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, ArrowRight, CheckCircle, FlaskConical, Beaker, Zap, Globe } from "lucide-react";

const pillars = [
  {
    index: "01",
    title: "Molecular Purity Index",
    tag: "PURITY_STABILITY",
    desc: "Achieving absolute molecule stability through automated catalytic synthesis in Class-100 aseptic environments.",
    icon: FlaskConical
  },
  {
    index: "02",
    title: "Clinical Fidelity",
    tag: "BIO_EQUIVALENCE",
    desc: "Rigorous molecular mapping to exceed global reference standards for systemic therapeutic efficacy.",
    icon: Beaker
  },
  {
    index: "03",
    title: "Global Compliance",
    tag: "REGULATORY_LOGIC",
    desc: "Our laboratories adhere to stringent WHO-GMP and international ISO protocols for systemic safety.",
    icon: ShieldCheck
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-32">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ── REFINED HEADER ── */}
        <div className="max-w-3xl mb-20 lg:mb-24">
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-[1px] bg-brand-green" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue/30 italic">Institutional Edge</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter leading-tight mb-8">
                 Clinical <span className="text-brand-green italic font-light">Superiority.</span>
              </h2>
              <p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed">
                 Synthesizing institutional excellence through systemic quality frameworks and molecular precision at global scale.
              </p>
           </motion.div>
        </div>

        {/* ── COMPACT PILLARS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 lg:mb-32">
           {pillars.map((p, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-gray-100 rounded-[2rem] p-8 lg:p-12 hover:border-brand-blue/20 transition-all duration-500 hover:shadow-xl"
             >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-10 transition-all duration-700 group-hover:bg-brand-blue group-hover:text-white">
                   <p.icon className="w-5 h-5" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-xs font-black text-brand-green/30 tracking-widest">{p.index}</span>
                   <span className="text-[9px] font-black text-brand-blue/20 tracking-[0.1em] uppercase">{p.tag}</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-brand-blue mb-4 tracking-tight">
                   {p.title}.
                </h3>
                
                <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed">
                   {p.desc}
                </p>
             </motion.div>
           ))}
        </div>

        {/* ── MINIMALIST CERTIFICATION ROW ── */}
        <div className="border-t border-gray-50 pt-16">
           <div className="flex flex-wrap items-center justify-center lg:justify-between gap-10 lg:gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {["WHO-GMP", "ISO 9001:2015", "FDA COMPLIANT", "ISO 14001", "HACCP CERTIFIED", "FSSAI"].map((c, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-brand-blue" />
                    <span className="text-[10px] lg:text-xs font-bold text-brand-blue uppercase tracking-[0.2em]">{c}</span>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
