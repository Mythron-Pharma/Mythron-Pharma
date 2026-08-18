"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Globe2, 
  Building2, 
  ShieldCheck,
  ExternalLink,
  Navigation,
  Sparkles
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-slate-50/70 text-slate-900 font-sans">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* ── 1. INSTITUTIONAL HEADER ── */}
        <div className="w-full mb-12 sm:mb-16 border-b border-slate-200/80 pb-10 text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 shadow-xs"
              >
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  Global Engagement Desk
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Corporate Headquarters <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">& Global Reach</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                Visit or connect with Mythron Pharma&apos;s strategic headquarters in Hyderabad for formulation licensing, CDMO manufacturing, and clinical distribution.
              </p>
            </div>

            <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm self-start lg:self-end">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Headquarters Status</p>
                <p className="text-xs font-black text-slate-900 uppercase">Operational & Active Desk</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. TWO COLUMN LAYOUT: TOUCHPOINTS & LIVE GOOGLE MAP ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          
          {/* LEFT: CORPORATE TOUCHPOINTS (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Headquarters Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Corporate HQ</span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Hyderabad Innovation Nexus</h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>PLOT NO.373, HOUSE. NO. 2-23-358, HMT HIILS, OPP JNTU, KUKATPALLY, HYDERABAD - 500 085</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mon - Fri: 09:00 - 18:00 IST</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Official Email</p>
                <a href="mailto:business@mythronpharma.in" className="text-xs font-black text-slate-900 uppercase hover:text-emerald-600 transition-colors">
                  business@mythronpharma.in
                </a>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Direct Desk</p>
                <a href="tel:+914048592900" className="text-xs font-black text-slate-900 uppercase hover:text-emerald-600 transition-colors">
                  +91 40 4859 2900
                </a>
              </div>
            </div>

            {/* Compliance Verified Banner */}
            <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-6 rounded-3xl border border-emerald-200/80 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-wider">WHO-GMP & ISO Certified Facility</p>
                  <p className="text-[11px] text-slate-500">Class-100 Cleanroom & R&D Laboratory</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: LIVE INTERACTIVE GOOGLE MAPS INTEGRATION (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[480px]">
            <div className="bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xl h-full flex flex-col justify-between relative group overflow-hidden">
              
              {/* Map Header Status Bar */}
              <div className="flex items-center justify-between p-3.5 mb-2 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Live GPS Location Matrix
                  </span>
                </div>
                <span className="text-[10px] font-mono font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  17.493° N, 78.389° E
                </span>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="w-full flex-1 min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden relative border border-slate-200/80 shadow-inner">
                <iframe
                  title="Mythron Pharma Headquarters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3023193245086!2d78.3888806!3d17.4931899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3a2c5a0bd%3A0x286ecad462445e0d!2sHMT%20Hills%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[380px] sm:min-h-[440px] grayscale-[20%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
                />

                {/* Direct Google Maps Action Overlay */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-lg">
                  <a
                    href="https://maps.google.com/?q=HMT+Hills+Opp+JNTU+Kukatpally+Hyderabad+500085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase hover:text-emerald-600 transition-colors"
                  >
                    <span>Open Full Map</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
