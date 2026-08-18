"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  FlaskConical, 
  Dna,
  Zap,
  Target,
  ChevronRight,
  ShieldCheck,
  Award,
  Activity,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { products, Product } from "@/data/products";

const categories = ["All", "Anti-Infective", "Hematology", "Orthopedics", "Gynecological Care"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pt-28 sm:pt-36 pb-28 relative overflow-hidden font-sans">
      
      {/* ── AMBIENT LIGHT GLOWS ── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* ── EXECUTIVE HERO HEADER (CLEAN WHITE) ── */}
        <div className="w-full mb-12 sm:mb-16 border-b border-slate-200/80 pb-10 text-left">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 shadow-xs"
              >
                <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  Therapeutic Formulations Index
                </span>
              </motion.div>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Targeted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Therapeutic Precision</span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
                Clinical-grade biopharmaceutical formulations engineered for metabolic equilibrium, cellular bioenergetics, and reproductive vitality.
              </p>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex items-center gap-2 flex-wrap pt-2 lg:pt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    const matched = cat === "All" ? products[0] : products.find(p => p.category.toLowerCase() === cat.toLowerCase());
                    if (matched) setActiveProduct(matched);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Key Clinical Metric Badges (White Card System) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/70">
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quality Standard</p>
                <p className="text-xs font-black text-slate-900">WHO-GMP Certified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
              <Zap className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bio-Availability</p>
                <p className="text-xs font-black text-slate-900">High-Potency Yield</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
              <Award className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clinical Testing</p>
                <p className="text-xs font-black text-slate-900">99.9% Purity Verified</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
              <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Targeted Spectrum</p>
                <p className="text-xs font-black text-slate-900">Metabolic & Cellular</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP SPLIT VIEWPORT (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Formulations Specimen List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredProducts.map((p, i) => {
              const isSelected = activeProduct.id === p.id;
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onMouseEnter={() => setActiveProduct(p)}
                  className={`group relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-emerald-500 shadow-xl shadow-emerald-500/10 translate-x-2"
                      : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full border ${
                          isSelected 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                            : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}>
                          SPECIMEN {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {p.category}
                        </span>
                      </div>

                      <div>
                        <h2 className={`text-2xl sm:text-3xl font-black tracking-tight transition-colors ${
                          isSelected ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                        }`}>
                          {p.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                          {p.tagline}
                        </p>
                      </div>

                      {/* Active Ingredients Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p.ingredients.slice(0, 4).map((ing, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80"
                          >
                            {ing}
                          </span>
                        ))}
                        {p.ingredients.length > 4 && (
                          <span className="text-[10px] font-bold text-slate-400 px-1 py-0.5">
                            +{p.ingredients.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/products/${p.id}`}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md shrink-0 mt-1 ${
                        isSelected
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-900 text-white group-hover:bg-emerald-600"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.2]" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Live Formula Preview Card (5 cols - Fixed Sticky) */}
          <div className="lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white p-8 lg:p-9 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-full pointer-events-none" />

                {/* Card Header Status */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                      <FlaskConical className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-slate-400 block uppercase tracking-widest leading-none mb-1">
                        Active Formulation Dossier
                      </span>
                      <span className="text-xs font-black text-emerald-600 uppercase tracking-wider">
                        {activeProduct.focus}
                      </span>
                    </div>
                  </div>
                  <Dna className="w-6 h-6 text-emerald-500 animate-spin-slow" />
                </div>

                {/* Product Render Display Stage */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-center p-6 mb-6 group overflow-hidden">
                  <img
                    src={activeProduct.image || "/pharma-bottle.png"}
                    alt={activeProduct.name}
                    className="max-h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[10px] font-black text-slate-800 uppercase tracking-wider">
                    {activeProduct.category}
                  </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-emerald-600 tracking-wider">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Clinical Profile</span>
                  </div>
                  
                  <div className="space-y-2">
                    {activeProduct.benefits.slice(0, 3).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{activeProduct.ingredients.length} Active Agents</span>
                    </div>

                    <Link
                      href={`/products/${activeProduct.id}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                    >
                      <span>Full Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE / TABLET GRID VIEW (< lg) ── */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg flex flex-col justify-between group hover:border-emerald-400 transition-all"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-emerald-700 tracking-widest uppercase px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200">
                    SPECIMEN {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                {/* Product Image Box */}
                <div className="h-52 w-full bg-slate-50/90 rounded-2xl border border-slate-100 flex items-center justify-center p-4 mb-5 relative">
                  <img
                    src={p.image || "/pharma-bottle.png"}
                    alt={p.name}
                    className="max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                </div>

                {/* Product Details */}
                <h3 className="text-2xl font-black text-slate-900 mb-1.5 tracking-tight">
                  {p.name}
                </h3>
                <p className="text-slate-600 text-xs font-normal mb-4 leading-relaxed">
                  {p.tagline}
                </p>

                {/* Active Ingredients Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.ingredients.slice(0, 3).map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider">
                  {p.focus}
                </span>
                <Link
                  href={`/products/${p.id}`}
                  className="w-10 h-10 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
