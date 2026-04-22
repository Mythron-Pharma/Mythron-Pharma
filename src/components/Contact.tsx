"use client";

import { motion } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Globe2, 
  Building2, 
  Users2,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-40 bg-white">
      
      {/* ── BACKGROUND BLUEPRINT GRID ── */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none scientific-grid z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ── INSTITUTIONAL HEADER ── */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline gap-12 mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
             <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-brand-green" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue/30">Engagement Protocol</span>
             </div>
             <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tighter leading-none mb-10">
                Institutional <br />
                <span className="text-brand-green italic font-light">Global Nexus.</span>
             </h2>
             <p className="text-base lg:text-lg text-gray-400 font-light leading-relaxed">
                Initiating secure professional pharmaceutical partnerships through our standardized B2B engagement framework.
             </p>
          </motion.div>

          <div className="flex items-center gap-8">
             <div className="text-right">
                <span className="text-[9px] font-black uppercase tracking-widest text-brand-blue/20 block mb-2">Protocol Response</span>
                <span className="text-sm font-bold text-brand-green tracking-tight uppercase px-4 py-2 bg-brand-green/5 border border-brand-green/10 rounded-full">Active Monitoring</span>
             </div>
             <div className="w-12 h-12 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue">
                <Cpu className="w-5 h-5 animate-pulse" />
             </div>
          </div>
        </div>

        {/* ── THE DOSSIER GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">
           
           {/* LEFT: DATA MODULES */}
           <div className="lg:col-span-5 space-y-12">
              
              {/* HQ Module */}
              <div className="p-10 bg-[#fafafa] border border-gray-100 rounded-[3rem]">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-blue shadow-sm border border-gray-50">
                       <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">Corporate Headquarters</span>
                 </div>
                 
                 <div className="flex gap-6">
                    <div>
                       <p className="text-xl font-bold text-brand-blue mb-2 tracking-tight">Hyderabad Nexus</p>
                       <p className="text-sm text-gray-400 leading-relaxed font-light">
                          Phase 2, HITEC City, Telangana State, India <br />
                          <span className="text-[10px] font-mono mt-3 block text-brand-blue/30 tracking-widest uppercase">Coordinates: 17.448° N, 78.391° E</span>
                       </p>
                    </div>
                 </div>
              </div>

              {/* Secure Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="p-8 bg-white border border-gray-50 rounded-[2.5rem] shadow-sm hover:border-brand-blue/20 transition-colors group">
                    <Mail className="w-4 h-4 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-blue/20 mb-1">Secure Email</p>
                    <p className="text-sm font-bold text-brand-blue uppercase tracking-tight font-mono">info@mythronpharma.com</p>
                 </div>
                 <div className="p-8 bg-white border border-gray-50 rounded-[2.5rem] shadow-sm hover:border-brand-blue/20 transition-colors group">
                    <Phone className="w-4 h-4 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-blue/20 mb-1">Clinical Support</p>
                    <p className="text-sm font-bold text-brand-blue uppercase tracking-tight">+91 40 0000 0000</p>
                 </div>
              </div>

              {/* Compliance Verification */}
              <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-3xl flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-brand-green" />
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest leading-none">Global Partner Compliance Verified</span>
                 </div>
                 <Globe2 className="w-4 h-4 text-brand-blue/20" />
              </div>

           </div>

           {/* RIGHT: INQUIRY CONSOLE */}
           <div className="lg:col-span-7">
              <div className="bg-[#fafafa] border border-gray-100 rounded-[3rem] p-10 lg:p-16">
                 <div className="mb-12">
                    <span className="text-[9px] font-black text-brand-green uppercase tracking-[0.4em] mb-4 block">Form Protocol 01-C</span>
                    <h4 className="text-2xl font-bold text-brand-blue tracking-tight">Analytical Inquiry Console.</h4>
                 </div>
                 
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-blue/30 px-2">Official Name</label>
                       <input 
                         type="text" 
                         className="w-full bg-white border border-gray-100 py-4 px-8 rounded-2xl text-sm focus:outline-none focus:border-brand-blue/40 transition-all font-light"
                         placeholder="Enter credentials"
                       />
                    </div>
                    <div className="flex flex-col gap-3">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-blue/30 px-2">Institutional Email</label>
                       <input 
                         type="email" 
                         className="w-full bg-white border border-gray-100 py-4 px-8 rounded-2xl text-sm focus:outline-none focus:border-brand-blue/40 transition-all font-light"
                         placeholder="nexus@domain.com"
                       />
                    </div>
                    <div className="flex flex-col gap-3 md:col-span-2">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-blue/30 px-2">Dossier Details</label>
                       <textarea 
                         rows={4}
                         className="w-full bg-white border border-gray-100 py-6 px-8 rounded-3xl text-sm focus:outline-none focus:border-brand-blue/40 transition-all font-light resize-none"
                         placeholder="Provide a clinical brief..."
                       />
                    </div>
                    <div className="md:col-span-2 pt-4">
                       <button className="group flex items-center gap-6 bg-brand-blue text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-brand-blue/20 hover:bg-brand-blue/90 transition-all">
                          Transmit Protocol
                          <ArrowRight className="w-5 h-5 text-brand-green group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>
                 </form>
              </div>
           </div>

        </div>

        {/* ── FOOTER NEXUS MAP ── */}
        <div className="mt-32 lg:mt-40 rounded-[3rem] overflow-hidden border border-gray-100 group shadow-sm bg-white relative">
           <div className="aspect-[21/9] lg:aspect-[3/1] w-full relative">
              <img src="/hq-map.png" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt="Institutional Nexus" />
              <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
           </div>
           
           <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-6 pointer-events-none">
              <div className="p-8 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl max-w-sm pointer-events-auto border-white/20">
                 <p className="text-[10px] font-black text-brand-blue tracking-[0.4em] uppercase mb-4">Location Matrix</p>
                 <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
                    Our global strategic headquarters is located in the pharmaceutical hub of Hyderabad.
                 </p>
                 <div className="flex items-center gap-4 text-[9px] font-black text-brand-blue uppercase tracking-widest cursor-pointer hover:gap-6 transition-all group/link">
                    Initiate Navigation Nexus
                    <ArrowRight className="w-4 h-4 text-brand-green group-hover/link:translate-x-1 transition-transform" />
                 </div>
              </div>
              <div className="p-4 bg-brand-blue text-white rounded-2xl flex items-center gap-4 shadow-2xl pointer-events-auto mb-4">
                 <Globe2 className="w-5 h-5" />
                 <span className="text-[9px] font-bold uppercase tracking-widest">Global Export Authorized</span>
              </div>
           </div>
        </div>

      </div>

      <style jsx global>{`
        .scientific-grid {
          background-image: 
            linear-gradient(to right, #103067 1px, transparent 1px),
            linear-gradient(to bottom, #103067 1px, transparent 1px);
          background-size: 100px 100px;
        }
      `}</style>

    </section>
  );
}
