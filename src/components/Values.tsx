"use client";

import { motion } from "framer-motion";
import { Microscope, Globe, HeartPulse, Activity, ArrowRight } from "lucide-react";

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
    tag: "SYNTHESIS",
    desc: "Harnessing robotic manufacturing lines to deliver consistent purity threshold outputs.",
    icon: Activity,
    image: "/hero-professional.png"
  }
];

export default function Values() {
  return (
    <section id="values" className="bg-white">
      
      {/* ── MANIFESTO INTRO ── */}
      <div className="py-24 lg:py-32 px-6 text-center max-w-4xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-blue/30 mb-4 block italic">Institutional Logic</span>
            <h2 className="text-4xl lg:text-7xl font-bold text-brand-blue tracking-tighter leading-none mb-10">
               Scientific <br />
               <span className="text-brand-green italic font-light">Heritage.</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
               Stabilizing complex therapeutic indices through modular synthesis and global scale.
            </p>
         </motion.div>
      </div>

      {/* ── FOCUS PANELS ── */}
      <div className="space-y-4 md:space-y-32 pb-32">
        {pillars.map((pillar, i) => (
          <div key={i} className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center justify-center px-6">
            
            {/* Background Narrative Visual */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
               <motion.img 
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  src={pillar.image} 
                  className="w-full h-full object-cover grayscale brightness-50 lg:brightness-100 lg:grayscale" 
                  alt={pillar.title} 
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white" />
            </div>

            {/* Floating Statement Card */}
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative z-10 bg-white border border-gray-50 p-8 md:p-16 rounded-[3rem] shadow-3xl max-w-3xl w-full text-center group"
            >
               <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-all duration-700 group-hover:bg-brand-blue group-hover:text-white">
                  <pillar.icon className="w-5 h-5" />
               </div>
               
               <span className="text-[9px] font-black tracking-[0.3em] text-brand-green uppercase mb-4 block">{pillar.tag}</span>
               
               <h3 className="text-4xl md:text-5xl font-black text-brand-blue tracking-tighter leading-none mb-8">
                  {pillar.title}.
               </h3>
               
               <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                  {pillar.desc}
               </p>

               <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-50">
                  <span className="text-[9px] font-black text-brand-blue/20 uppercase tracking-[0.1em]">Verification Level 0{i+1}</span>
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                     <ArrowRight className="w-3 h-3" />
                  </div>
               </div>
            </motion.div>

          </div>
        ))}
      </div>

    </section>
  );
}
