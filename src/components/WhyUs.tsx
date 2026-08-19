"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  FlaskConical, 
  Beaker, 
  Zap, 
  Globe, 
  Cpu, 
  Microscope,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Therapeutic Efficacy", value: "99.9%", detail: "Prescriber-verified results" },
  { label: "Quality Compliance", value: "100%", detail: "WHO-GMP & ISO certified" },
  { label: "Stockist Network", value: "Active", detail: "Prompt nationwide supply" },
  { label: "Bio-Availability Yield", value: "100%", detail: "Optimized patient absorption" },
];

const scienceTabs = [
  {
    id: "formulation",
    title: "Therapeutic Precision",
    subtitle: "High-Efficacy Active Formulations",
    image: "/dossier-maternal.jpg",
    description: "Every formulation is engineered with optimal molar ratios and active bioavailability to ensure consistent, reliable therapeutic outcomes in gynecological and systemic therapy.",
    highlights: [
      "Precision active dosing",
      "High GI tolerance profiles",
      "Evidence-backed clinical synergy"
    ]
  },
  {
    id: "gmp",
    title: "Quality Certification",
    subtitle: "WHO-GMP & ISO Verified Partners",
    image: "/dossier-physician.jpg",
    description: "Our commercial formulations are produced in world-class, certified facilities complying with rigorous WHO-GMP, ISO 9001, and GLP quality management protocols.",
    highlights: [
      "WHO-GMP quality compliance",
      "Batch purity & potency assays",
      "ISO 9001 certified standards"
    ]
  },
  {
    id: "packaging",
    title: "Packaging Integrity",
    subtitle: "Tamper-Evident Foil & Blister Packs",
    image: "/prod-mythclav.png",
    description: "High-barrier Alu-Alu and blister packaging designed to protect active ingredients from moisture, oxidation, and temperature fluctuations across the entire supply chain.",
    highlights: [
      "Alu-Alu & Red strip protection",
      "Moisture-impermeable sealing",
      "Extended shelf-life stability"
    ]
  },
  {
    id: "bioequivalence",
    title: "Bioavailability Mapping",
    subtitle: "Consistent Clinical Performance",
    image: "/dossier-vitality.jpg",
    description: "Every batch is verified through rigorous dissolution profiling and stability assays to ensure rapid, uniform systemic absorption and optimal patient adherence.",
    highlights: [
      "Rapid dissolution & absorption",
      "HPLC chromatogram verification",
      "Consistent therapeutic plasma levels"
    ]
  }
];

const pillars = [
  {
    index: "01",
    title: "Therapeutic Efficacy",
    tag: "PURITY_STABILITY",
    desc: "Achieving optimal active molecule stability and clinical potency across all specialty formulations.",
    image: "/dossier-maternal.jpg",
    icon: FlaskConical
  },
  {
    index: "02",
    title: "Prescriber Trust",
    tag: "BIO_EQUIVALENCE",
    desc: "Formulations engineered for rapid bioavailability and superior gastrointestinal tolerance.",
    image: "/dossier-vitality.jpg",
    icon: Beaker
  },
  {
    index: "03",
    title: "Certified Compliance",
    tag: "REGULATORY_LOGIC",
    desc: "Strict adherence to stringent WHO-GMP, ISO 9001, and GLP quality protocols for patient safety.",
    image: "/dossier-bonehealth.jpg",
    icon: ShieldCheck
  }
];

export default function WhyUs() {
  const [activeTab, setActiveTab] = useState(scienceTabs[0]);

  return (
    <section id="why-us" className="bg-slate-50/70 py-16 sm:py-24 lg:py-32 relative overflow-hidden font-sans text-slate-900">
      
      {/* ── AMBIENT BACKGROUND GLOWS ── */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* ── 1. INSTITUTIONAL HERO HEADER (WHITE CARD SYSTEM) ── */}
        <div className="w-full mb-16 sm:mb-24 border-b border-slate-200/80 pb-10 sm:pb-12 text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 shadow-xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  The Mythron Standard
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Assurance & Trust</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                Delivering excellence in pharmaceutical marketing and distribution through WHO-GMP certified partner facilities, verified bioavailability, and prescriber confidence.
              </p>
            </div>

            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-lg active:scale-95 transition-all self-start lg:self-end"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── KPI STATISTICS BAR ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-200/70">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{s.value}</span>
                </p>
                <p className="text-xs font-black text-slate-900 uppercase tracking-wider">{s.label}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">{s.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2. INTERACTIVE "BEHIND THE SCIENCE" SHOWCASE ── */}
        <div className="mb-24 sm:mb-32">
          <div className="text-left mb-10">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-2">
              Quality & Science Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Behind Every Mythron Formulation
            </h2>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 custom-scrollbar">
            {scienceTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t)}
                className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all shrink-0 flex items-center gap-2.5 ${
                  activeTab.id === t.id
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeTab.id === t.id ? "bg-emerald-400" : "bg-slate-300"}`} />
                <span>{t.title}</span>
              </button>
            ))}
          </div>

          {/* Interactive Feature Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              {/* Left Details Panel (7 cols) */}
              <div className="p-8 sm:p-12 lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeTab.subtitle}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {activeTab.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {activeTab.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {activeTab.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image Stage Panel (5 cols) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full bg-slate-900 overflow-hidden flex items-center justify-center p-6">
                <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover rounded-2xl opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Verification</p>
                  <p className="text-xs font-black text-slate-900 uppercase">100% ISO & WHO-GMP Compliant</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 3. THREE SCIENTIFIC PILLARS WITH IMAGE OVERLAYS ── */}
        <div className="mb-24 sm:mb-32">
          <div className="text-left mb-12">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-2">
              Foundational Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Quality Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:border-emerald-400 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Pillar Top Image Header */}
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-black text-emerald-400 tracking-widest bg-slate-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                      PILLAR {p.index}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[9px] font-black text-emerald-300 tracking-widest uppercase block mb-1">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Pillar Content Description */}
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-wider">
                      Verified Standard
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 4. GLOBAL CERTIFICATION GRID ── */}
        <div className="border-t border-slate-200/80 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-2">
              Regulatory Standards
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              International Accreditation & Compliance
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["WHO-GMP", "ISO 9001:2015", "FDA COMPLIANT", "ISO 14001", "HACCP CERTIFIED", "FSSAI"].map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all"
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-black text-slate-800 uppercase tracking-[0.2em]">{c}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
