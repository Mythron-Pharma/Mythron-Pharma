"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-16 py-24 lg:py-32 relative z-10 w-full bg-slate-50/50">
      
      {/* ── SECTION HEADER (LEFT ALIGNED WIDE) ── */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8 text-left">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-50 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800">Formulation Portfolio</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Featured <span className="text-emerald-600">Therapeutic Products</span>
          </h2>
          <p className="text-slate-600 text-sm font-normal max-w-xl">
            Discover Mythron Pharma&apos;s advanced portfolio of anti-infective, hematology, orthopedic, and gynecological formulations.
          </p>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-all shrink-0 shadow-sm"
        >
          Explore All Products ({products.length})
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ── PRODUCTS CARDS GRID (FULL WIDTH 5 COLS) ── */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Photo Showcase */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50 to-white p-2 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] opacity-[0.05] [background-size:16px_16px]" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                   </span>
                </div>

                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500 relative z-10 mix-blend-multiply"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors mb-2">
                     {product.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-3 text-teal-600">
                     {product.focus}
                  </p>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed line-clamp-2">
                     {product.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                   <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>Clinical Grade</span>
                   </div>

                   <Link 
                     href={`/products/${product.id}`}
                     className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all shadow-sm"
                   >
                     Dossier <ArrowRight className="w-3.5 h-3.5" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
